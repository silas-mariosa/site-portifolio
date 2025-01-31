'use client'

import { Button } from "./ui/button"

const videos = [
  {
    id: Math.random(),
    thumbnail: "https://www.youtube.com/embed/eRvOOgMgPvs"
  },
  {
    id: Math.random(),
    thumbnail: "https://www.youtube.com/embed/KNNPrXBisa4"
  },
  {
    id: Math.random(),
    thumbnail: "https://www.youtube.com/embed/F-ootAeT2tA"
  }
]

export default function ChannelCard() {
  return (
    <>
      <hr className="h-5 w-full  bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6]" />
      <section className="flex flex-col md:flex-row gap-4 justify-center item-center sm:items-start p-4 bg-[#151922] py-10">
        <div className="flex flex-col justify-center item-center sm:items-start text-white max-w-md gap-6">
          <h3 className="font-bold text-[36px] text-center sm:text-start">Siga meu canal no youtube!</h3>
          <p className="font-semibold text-center sm:text-start">Compartilho dicas diárias sobre programação, freelancer, crescimento profissional pessoal, notícias de tecnologia e insights de negócios.</p>
          <Button variant={'ghost'} className="text-[#5271ff] rounded-none p-0 text-3xl hover:bg-[#151922] hover:text-[#5271ff] pb-4 hover:border-b-4 border-b-[#5271ff]">Ir para Youtube <img src="/foguete.png" alt="foguete" className="w-10 h-10" /></Button>
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