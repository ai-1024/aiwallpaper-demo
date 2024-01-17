import { User } from "@/types/user";
import { getDb } from "./db";

export async function insertUser(user: User) {
  const createdAt: string = new Date().toISOString();

  const db = await getDb();
  const res = await db.query(
    `INSERT INTO users 
        (email, nickname, avatar_url, created_at) 
        VALUES 
        ($1, $2, $3, $4)
    `,
    [user.email, user.nickname, user.avatar_url, createdAt]
  );

  return res;
}
