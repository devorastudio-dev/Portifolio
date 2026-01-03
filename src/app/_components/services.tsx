'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Lightning,
  Database,
  Robot,
} from '@phosphor-icons/react'

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description:
      'Sites e aplicações modernas com React, Next.js e Tailwind, focados em performance, usabilidade e código limpo.',
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description:
      'APIs seguras e escaláveis com Node.js ou Python, integração com bancos de dados e serviços externos.',
  },
  {
    icon: Lightning,
    title: 'Landing Pages',
    description:
      'Landing pages rápidas, objetivas e otimizadas para conversão, SEO e carregamento instantâneo.',
  },
  {
    icon: Robot,
    title: 'Automação & Integrações',
    description:
      'Automações com Python, bots e integrações que reduzem trabalho manual e aumentam produtividade.',
  },
]

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold">Serviços</h2>
        <p className="text-neutral-400 mt-4 max-w-xl">
          Soluções digitais completas, do design ao código, com foco em qualidade
          e resultado real.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#6B5CFF]/10 text-[#6B5CFF]">
                <Icon size={26} weight="bold" />
              </div>

              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
