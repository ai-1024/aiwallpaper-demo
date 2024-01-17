import { getWallpapers } from "@/models/wallpaper";

export async function GET(req: Request) {
  const wallpapers = await getWallpapers(1, 50);

  return Response.json({
    code: 0,
    message: "ok",
    data: wallpapers,
  });
}
