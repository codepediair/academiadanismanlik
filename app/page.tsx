import ContactSection from "@/components/contact";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-11";
import Features2 from "@/components/features-10";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <ContentSection/>
      <Features2/>
      <ContactSection/>
      <LogoCloud/>
      <FooterSection/>
    </div>
  );
}
