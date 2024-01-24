import { insertOrder, updateOrderSession } from "@/models/order";

import { Order } from "@/types/order";
import Stripe from "stripe";
import { currentUser } from "@clerk/nextjs";

export async function POST(req: Request) {
  // 0. 获取当前登录用户的标识
  const user = await currentUser();
  if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
    return Response.json("not login");
  }
  const user_email = user.emailAddresses[0].emailAddress;
  console.log("user_email", user_email);

  // 1. 获取下单参数
  const params = await req.json();
  console.log("params", params);

  const currentDate = new Date();
  const oneMonthLater = new Date(currentDate);
  oneMonthLater.setMonth(currentDate.getMonth() + 1);

  const created_at = currentDate.toISOString();
  const expired_at = oneMonthLater.toISOString();
  const order_no = new Date().getMilliseconds();

  // 2. 创建订单
  const order: Order = {
    order_no: order_no.toString(),
    created_at: created_at,
    user_email: user_email,
    amount: params.amount,
    plan: params.plan,
    expired_at: expired_at,
    order_status: 1,
    credits: params.credits,
  };
  console.log("order", order);
  // 把订单保存到 db
  await insertOrder(order);

  // 3. 调 stripe 下单
  const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || "");

  const session = await stripe.checkout.sessions.create({
    customer_email: user_email,
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "aiwallpaper.demo credits plan",
          },
          unit_amount: params.amount,
          recurring:
            params.plan === "monthly"
              ? {
                  interval: "month",
                }
              : undefined,
        },
        quantity: 1,
      },
    ],
    allow_promotion_codes: false,
    metadata: {
      project: "aiwallpaper-demo",
      pay_scene: "buy-credits",
      order_no: order_no.toString(),
      user_email: user_email,
      credits: params.credits,
    },
    mode: params.plan === "monthly" ? "subscription" : "payment",
    success_url: `${process.env.WEB_BASE_URI}/pay-success/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.WEB_BASE_URI}/pricing`,
  });

  // console.log("pay result", session);

  // 4. 更新支付标识
  const stripe_session_id = session.id;
  console.log("stripe session id", stripe_session_id);
  await updateOrderSession(order_no.toString(), stripe_session_id);

  return Response.json({
    code: 0,
    message: "ok",
    data: {
      public_key: process.env.STRIPE_PUBLIC_KEY,
      order_no: order_no.toString(),
      session_id: stripe_session_id,
    },
  });
}
