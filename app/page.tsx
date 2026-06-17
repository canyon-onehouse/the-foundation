import { StickyBanner } from "@/components/StickyBanner";
import { Hero } from "@/components/Hero";
import { WhatItIs } from "@/components/WhatItIs";
import { ExclusivityCallout } from "@/components/ExclusivityCallout";
import { Tiers } from "@/components/Tiers";
import { BrandMoment } from "@/components/BrandMoment";
import { TicketDrop } from "@/components/TicketDrop";
import { CommunityEvents } from "@/components/CommunityEvents";
import { BeyondPerks } from "@/components/BeyondPerks";
import { Impact } from "@/components/Impact";
import { MemberEvents } from "@/components/MemberEvents";
import { Wall } from "@/components/Wall";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* TEMPORARY (ticket drop): sticky free-ticket countdown banner —
          remove after the drop closes (see component header). */}
      <StickyBanner />
      <Hero />
      <WhatItIs />
      {/* TEMPORARY (ticket drop): ExclusivityCallout, BrandMoment, TicketDrop —
          remove these three after the drop closes (see component headers). */}
      <ExclusivityCallout />
      <Tiers />
      <BrandMoment />
      <TicketDrop />
      {/* END TEMPORARY */}
      <CommunityEvents />
      <BeyondPerks />
      <Impact />
      <MemberEvents />
      <Wall />
      <Footer />
    </main>
  );
}
