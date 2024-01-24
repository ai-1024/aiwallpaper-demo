import { Wallpaper } from "@/types/wallpaper";
import { getDb } from "./db";

export async function insertWallpaper(wallpaper: Wallpaper) {
  const db = getDb();
  const res = await db.query(
    `INSERT INTO wallpapers 
          (user_email, img_description, img_size, img_url, llm_name, llm_params, created_at) 
          VALUES 
          ($1, $2, $3, $4, $5, $6, $7)
      `,
    [
      wallpaper.user_email,
      wallpaper.img_description,
      wallpaper.img_size,
      wallpaper.img_url,
      wallpaper.llm_name,
      wallpaper.llm_params,
      wallpaper.created_at,
    ]
  );

  return res;
}

export async function getWallpapers(
  page: number,
  limit: number
): Promise<Wallpaper[] | undefined> {
  if (page < 1) {
    page = 1;
  }
  if (limit <= 0) {
    limit = 50;
  }
  const offset = (page - 1) * limit;

  const db = getDb();
  const res = await db.query(`select * from wallpapers limit $1 offset $2`, [
    limit,
    offset,
  ]);
  if (res.rowCount === 0) {
    return undefined;
  }

  const { rows } = res;
  let wallpapers: Wallpaper[] = [];

  rows.forEach((row) => {
    const wallpaper: Wallpaper = {
      id: row.id,
      user_email: row.user_email,
      img_description: row.img_description,
      img_size: row.img_size,
      img_url: row.img_url,
      llm_name: row.llm_name,
      llm_params: row.llm_params,
      created_at: row.created_at,
    };
    wallpapers.push(wallpaper);
  });

  return wallpapers;
}

export async function getUserWallpapersCount(
  user_email: string
): Promise<number> {
  const db = getDb();
  const res = await db.query(
    `SELECT count(1) as count FROM wallpapers WHERE user_email = $1`,
    [user_email]
  );
  if (res.rowCount === 0) {
    return 0;
  }

  const { rows } = res;
  const row = rows[0];

  return row.count;
}
