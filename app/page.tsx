'use client'

import Atributos from "@/components/atributos";
import BannerMid from "@/components/bannerMid";
import BannerTop from "@/components/bannerTop";
import ChannelCard from "@/components/channelCard";
import Contato from "@/components/contato";
import Expertise from "@/components/expertise";
import Portifolios from "@/components/portifolios";
import portifolios from "@/lib/portifolios.json";

export default function Home() {
  return (
    <div id="home">
      <BannerTop />
      <BannerMid />
      <Atributos />
      <Portifolios data={portifolios} isHome={true} />
      <Expertise />
      <ChannelCard />
      <Contato />
    </div>
  );
}
