import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { ActivitiesSection } from "@/components/activities-section"
import { MembershipSection } from "@/components/membership-section"
import { GallerySection } from "@/components/gallery-section"
import { InstagramGallery } from "@/components/instagram-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BMICalculator } from "@/components/bmi-calculator"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PromoPopup } from "@/components/promo-popup"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <ActivitiesSection />
      <MembershipSection />
      <GallerySection />
      <InstagramGallery />
      <TestimonialsSection />
      <BMICalculator />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <PromoPopup />
    </main>
  )
}
