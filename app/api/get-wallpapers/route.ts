import { Wallpaper } from "@/types/wallpaper";

export function GET(req: Request) {
  const wallpapers: Wallpaper[] = [
    {
      img_description: "spiderman fightting ironman",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Kg8cvGBgBkWAELNuqLMzrWmW/user-3JJGCjM0I3NvF0PAoY1SyUp1/img-9ACph5BivDv0l9IVfxjCRah1.png?st=2024-01-10T13%3A25%3A28Z&se=2024-01-10T15%3A25%3A28Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-10T02%3A19%3A50Z&ske=2024-01-11T02%3A19%3A50Z&sks=b&skv=2021-08-06&sig=dqUe1UCiROzNjuiw6KnqrUzSF5ZWg/K%2BSitPEyEiDn0%3D",
      img_size: "1780x1024",
      user_avatar:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYWhrVVJkNDRVTkQ1YU10SVJyeFJSZjc4OTQifQ",
      user_nickname: "James",
    },
    {
      img_description: "一个美丽的女孩在公园跑步",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Kg8cvGBgBkWAELNuqLMzrWmW/user-3JJGCjM0I3NvF0PAoY1SyUp1/img-QBZfVb59V0lUBQ2WIuIErUX8.png?st=2024-01-10T12%3A35%3A07Z&se=2024-01-10T14%3A35%3A07Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-10T02%3A28%3A28Z&ske=2024-01-11T02%3A28%3A28Z&sks=b&skv=2021-08-06&sig=q8Fve1SEbBDl/smV6Witt2pRCoQx/zQhP1WXXZruBs0%3D",
      img_size: "1780x1024",
      user_avatar:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYWhrVVJkNDRVTkQ1YU10SVJyeFJSZjc4OTQifQ",
      user_nickname: "Amei",
    },
    {
      img_description: "coding in the office",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Kg8cvGBgBkWAELNuqLMzrWmW/user-3JJGCjM0I3NvF0PAoY1SyUp1/img-v9GV7wkFDTuTAkNaBGKiDyNw.png?st=2024-01-10T12%3A28%3A12Z&se=2024-01-10T14%3A28%3A12Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-10T02%3A18%3A02Z&ske=2024-01-11T02%3A18%3A02Z&sks=b&skv=2021-08-06&sig=LdNTcLkH5VjSA/XwMOTttC5oiHxW/lviZymQcaztYmg%3D",
      img_size: "1780x1024",
      user_avatar:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYWhrVVJkNDRVTkQ1YU10SVJyeFJSZjc4OTQifQ",
      user_nickname: "涛哥",
    },
    {
      img_description: "two cute cats fightting.",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Kg8cvGBgBkWAELNuqLMzrWmW/user-3JJGCjM0I3NvF0PAoY1SyUp1/img-X55yt01KEukIKRSVfPlZEkPh.png?st=2024-01-10T12%3A26%3A27Z&se=2024-01-10T14%3A26%3A27Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-10T02%3A27%3A01Z&ske=2024-01-11T02%3A27%3A01Z&sks=b&skv=2021-08-06&sig=/OManI88wAoEt/bKWlLW2T6fuTBk4/Fqb7U6WJtP/IU%3D",
      img_size: "1780x1024",
      user_avatar:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYWhrVVJkNDRVTkQ1YU10SVJyeFJSZjc4OTQifQ",
      user_nickname: "idoubi",
    },
  ];

  return Response.json({
    code: 0,
    message: "ok",
    data: wallpapers,
  });
}
