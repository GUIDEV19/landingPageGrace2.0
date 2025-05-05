import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SpeakerSection from "@/components/speaker-section"
import LearningSection from "@/components/learning-section"
import TestimonialsSection from "@/components/testimonials-section"
import SpeakersSection from "@/components/speakers-section"
import LocationSection from "@/components/location-section"
import CtaSection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpeakerSection />
      <LearningSection />
      <TestimonialsSection />
      {/* <SpeakersSection /> */}
      <LocationSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
