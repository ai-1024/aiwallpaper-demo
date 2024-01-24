import Stripe from "stripe";
import { redirect } from "next/navigation";
import { updateOrderStatus } from "@/models/order";

export default async function ({ params }: { params: { session_id: string } }) {
  console.log("pay callback id", params.session_id);

  const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || "");
  try {
    const session = await stripe.checkout.sessions.retrieve(params.session_id);
    console.log("order session: ", session);

    console.log("metadata", session.metadata);
    if (!session || !session.metadata || !session.metadata.order_no) {
      console.log("invalid session", params.session_id);
      throw new Error("invalid session");
    }

    const order_no = session.metadata.order_no;
    const paied_at = new Date().toISOString();

    updateOrderStatus(order_no, 2, paied_at);
    console.log("update success order status: ", order_no, paied_at);

    redirect("/");
  } catch (e) {
    console.log("handle order session failed: ", e);
    throw e;
  }
}
