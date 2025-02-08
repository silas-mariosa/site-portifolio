'use client'

import { Button } from "./ui/button"
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image"
import video from "@/lib/video.json"

interface videos {
  id: string,
  thumbnail: string,
}

const videos: videos[] = video

export default function ChannelCard() {
  const { t } = useTranslations();
  return (
    <>
      <hr className="h-5 w-full  bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6]" />
      <section id="channel" className="flex flex-col md:flex-row gap-4 justify-center item-center sm:items-start p-4 bg-[#151922] py-10">
        <div className="flex flex-col justify-center item-center sm:items-start text-white max-w-md gap-6">
          <h3 className="font-bold text-[36px] text-center sm:text-start">{t('ChannelComponent', 'follow')}</h3>
          <p className="font-semibold text-center sm:text-start">{t('ChannelComponent', 'Share')}</p>
          <Button variant={'ghost'} className="text-[#5271ff] rounded-none p-0 text-3xl hover:bg-[#151922] hover:text-[#5271ff] pb-4 hover:border-b-4 border-b-[#5271ff]">
            {t('ChannelComponent', 'Go')}
            <Image src="/foguete.png" alt="foguete" width={30} height={30} />
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          {videos.map((video) => (
            <div key={video.id} >
              <iframe
                className="w-96 h-52"
                src={video.thumbnail}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope;  web-share">
              </iframe>
            </div>
          ))}
        </div>
      </section>
      <hr className="h-5 w-full bg-gradient-to-r from-[#5ce1e6] to-[#8c52ff]" />
    </>
  )
}