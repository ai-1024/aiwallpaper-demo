import { Order } from "@/types/order";
import { UserCredits } from "@/types/user";
import { getUserOrders } from "@/models/order";
import { getUserWallpapersCount } from "@/models/wallpaper";

export async function getUserCredits(user_email: string): Promise<UserCredits> {
  let user_credits: UserCredits = {
    one_time_credits: 2,
    monthly_credits: 1,
    total_credits: 3,
    used_credits: 0,
    left_credits: 3,
  };

  console.log("user", user_credits);

  try {
    const used_credits = await getUserWallpapersCount(user_email);
    console.log("used_credits", used_credits);
    user_credits.used_credits = Number(used_credits);

    const orders = await getUserOrders(user_email);
    if (!orders) {
      return user_credits;
    }

    let monthly_credits = 0;
    let one_time_credits = 0;
    let total_credits = 0;

    orders.forEach((order: Order) => {
      if (order.plan === "monthly") {
        monthly_credits += order.credits;
      } else {
        one_time_credits += order.credits;
      }
      total_credits += order.credits;
    });

    user_credits.monthly_credits = monthly_credits;
    user_credits.one_time_credits = one_time_credits;
    user_credits.total_credits = total_credits;
    user_credits.left_credits = total_credits - used_credits;
    if (user_credits.left_credits < 0) {
      user_credits.left_credits = 0;
    }

    return user_credits;
  } catch (e) {
    console.log("get user credits failed: ", e);
    return user_credits;
  }
}
