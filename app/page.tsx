import ContactSection from "@/components/contact";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-11";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <LogoCloud/>
      <ContentSection/>
      <Features/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}
