'use client'

import Atributos from "@/components/atributos";
import BannerMid from "@/components/bannerMid";
import BannerTop from "@/components/bannerTop";
import ChannelCard from "@/components/channelCard";
import Contato from "@/components/contato";
import Expertise from "@/components/expertise";
import Language from "@/components/language";
import Portifolios from "@/components/portifolios";
import AppSidebar from "@/components/sideBar";

export default function Home() {

  return (
    <div id="home">
      <div className={`fixed top-2 left-2 z-50`}>
        <AppSidebar />
      </div>
      <header className="flex flex-row justify-between items-center p-2 color-white">
        <div></div>
        <h1 className="text-white text-[30px]">Mariosa Tech</h1>
        <Language />
      </header>
      <BannerTop />
      <BannerMid />
      <Atributos />
      <Portifolios />
      <Expertise />
      <ChannelCard />
      <Contato />
      <footer className="text-black font-bold bg-gradient-to-br from-[#8c52ff] to-[#5ce1e6] p-2 text-center">
        @ 2025 Mariosa Tech. Todos os direitos reservados.
      </footer>
    </div>
  );
}
