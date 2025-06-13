import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CompanyLogos from '@/components/CompanyLogos'
import Services from '@/components/Services'
import Statistics from '@/components/Statistics'
import RealtimeSection from '@/components/RealtimeSection'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <CompanyLogos />
      <Services />
      <Statistics />
      <RealtimeSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
} 