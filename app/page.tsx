import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandMarquee from "@/components/BrandMarquee";
import About from "@/components/About";
import { brandLogos } from "@/lib/brandLogos";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const marqueeItems = [
  "BRAND BUILDING",
  "STORY TELLING",
  "DIGITAL PRESENCE",
  "LEAD GENERATION",
  "CREATIVE CAMPAIGNS",
  "PERFORMANCE MEDIA",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <About />
        <BrandMarquee logos={brandLogos} />
        <Services />
        <Stats />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
