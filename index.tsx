import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Location } from "@/components/site/Location";
import { Booking } from "@/components/site/Booking";
import { Faq } from "@/components/site/Faq";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Belíssima Hair | Cabelos e Unhas em Guarulhos" },
      {
        name: "description",
        content:
          "Salão de cabelos, unhas e sobrancelhas no Jardim Adriana, Guarulhos. Agende seu horário pelo WhatsApp.",
      },
      { property: "og:title", content: "Studio Belíssima Hair | Cabelos e Unhas" },
      {
        property: "og:description",
        content:
          "Cortes, coloração, unhas e design de sobrancelhas com produtos premium. Agende seu horário.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Location />
        <Faq />
        <Booking />
      </main>
      <SiteFooter />
    </div>
  );
}
