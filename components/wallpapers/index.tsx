"use client";

import { Button } from "@/components/ui/button";
import { Wallpaper } from "@/types/wallpaper";

interface Props {
  wallpapers: Wallpaper[];
}

export default function ({ wallpapers }: Props) {
  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div className="mb-8 text-center md:mb-12 ">
            <h2 className="text-3xl font-bold md:text-5xl text-primary">
              全部壁纸
            </h2>
            <p className="mt-4 text-[#636262] sm:text-sm md:text-base">
              一共 100 条由 AI 生成的壁纸
            </p>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-16 md:grid-cols-3 md:gap-4 ">
            {wallpapers &&
              wallpapers.map((wallpaper: Wallpaper, idx: number) => {
                return (
                  <div
                    key={idx}
                    className="mx-auto w-full max-w-md gap-4 rounded-md bg-[#f2f2f7] p-8 text-black sm:px-4 sm:py-8"
                  >
                    <div className="mb-3 flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={wallpaper.user_avatar}
                          alt=""
                          className="mr-4 inline-block h-8 w-8 rounded-full"
                        />
                        <h6 className="text-base font-bold">
                          {wallpaper.user_nickname}
                        </h6>
                      </div>
                      <a
                        href="#"
                        className="inline-block max-w-full text-black"
                      >
                        <span>{wallpaper.img_size}</span>
                      </a>
                    </div>
                    <img
                      src={wallpaper.img_url}
                      alt=""
                      className="inline-block h-60 w-full rounded-md object-cover"
                    />
                  </div>
                );
              })}
          </div>
          <div className="w-full flex justify-center">
            <Button>查看更多</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
