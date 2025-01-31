'use client'

import Atributos from "@/components/atributos";
import BannerMid from "@/components/bannerMid";
import BannerTop from "@/components/bannerTop";
import ChannelCard from "@/components/channelCard";
import Expertise from "@/components/expertise";
import Language from "@/components/language";
import Portifolios from "@/components/portifolios";
import AppSidebar from "@/components/sideBar";

export default function Home() {
  return (
    <div>
      <header className="flex flex-row justify-between items-center p-2 color-white">
        <AppSidebar />
        <h1 className="text-white text-[30px]">Mariosa Tech</h1>
        <Language />
      </header>
      <BannerTop />
      <BannerMid />
      <Atributos />
      <Portifolios />
      <Expertise />
      <ChannelCard />
    </div>
  );
}
