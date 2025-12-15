import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhySection from '@/components/WhySection'
import TransformationSection from '@/components/TransformationSection'
import SolutionsSection from '@/components/SolutionsSection'
import TechStackSection from '@/components/TechStackSection'
import SecuritySection from '@/components/SecuritySection'
import DemoSection from '@/components/DemoSection'
import AboutSection from '@/components/AboutSection'
import ValuesSection from '@/components/ValuesSection'
import CareersSection from '@/components/CareersSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <WhySection />
      <TransformationSection />
      <SolutionsSection />
      <TechStackSection />
      <SecuritySection />
      <DemoSection />
      <AboutSection />
      <ValuesSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
