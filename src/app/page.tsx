import Navbar from '@/app/_components/navbar'
import Hero from '@/app/_components/hero'
import Services from '@/app/_components/services'
import Portfolio from '@/app/_components/portfolio'
import Process from '@/app/_components/process'
import CTA from '@/app/_components/cta'
import FAQ from '@/app/_components/faq'
import Footer from '@/app/_components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030307]">
      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* SERVIÇOS */}
        <section id="servicos">
          <Services />
        </section>

        {/* PORTFÓLIO */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* PROCESSO */}
        <section id="processo">
          <Process />
        </section>

        {/* CTA FINAL */}
        <CTA />

        {/* FAQ */}
        <FAQ />

      </main>

      <Footer />
    </div>
  )
}
