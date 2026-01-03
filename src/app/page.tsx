import Navbar from '@/app/_components/navbar'
import Hero from '@/app/_components/hero'
import Services from '@/app/_components/services'
import Portfolio from '@/app/_components/portfolio'
import Process from '@/app/_components/process'
import CTA from '@/app/_components/cta'
import Footer from '@/app/_components/footer'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
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
        <Process />

        {/* CTA FINAL */}
        <CTA />
      </main>

      <Footer />
    </>
  )
}