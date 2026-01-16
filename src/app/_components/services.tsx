'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Lightning,
  Database,
  Robot,
  ArrowUpRightIcon,
} from '@phosphor-icons/react'

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description:
      'Sites e aplicações modernas com React, Next.js e Tailwind, focados em performance, usabilidade e código limpo.',
    features: ['Next.js 14', 'React 18', 'TailwindCSS', 'TypeScript'],
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description:
      'APIs seguras e escaláveis com Node.js ou Python, integração com bancos de dados e serviços externos.',
    features: ['Node.js', 'Python', 'PostgreSQL', 'Prisma'],
  },
  {
    icon: Lightning,
    title: 'Landing Pages',
    description:
      'Landing pages rápidas, objetivas e otimizadas para conversão, SEO e carregamento instantâneo.',
    features: ['SEO Otimizado', 'Vercel', 'Analytics', 'A/B Testing'],
  },
  {
    icon: Robot,
    title: 'Automação & Integrações',
    description:
      'Automações com Python, bots e integrações que reduzem trabalho manual e aumentam produtividade.',
    features: ['Python', 'APIs', 'Webhooks', 'Bots'],
  },
]

export default function Services() {
    return (
        <section className="relative py-24 md:py-32 bg-[#030307]">
            {/* CSS-only Background Effects (GPU optimized) */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#6B5CFF]/10 rounded-full blur-[80px] bg-animate-float-1" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[80px] bg-animate-float-2" />
            </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-[#6B5CFF]/10 border border-[#6B5CFF]/20 text-[#6B5CFF] text-sm font-medium mb-6"
          >
            O que fazemos
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Soluções digitais completas, do design ao código, com foco em qualidade
            e resultado real para fazer seu negócio crescer.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border border-white/10 bg-[#1a1a24]/50 p-8 overflow-hidden card-hover"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-[#6B5CFF]/5 to-[#22D3EE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#6B5CFF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#6B5CFF]/10 text-[#6B5CFF] group-hover:bg-[#6B5CFF] group-hover:text-white transition-all duration-300">
                      <Icon size={28} weight="bold" />
                    </div>
                    <motion.div 
                      whileHover={{ x: 5, y: -5 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowUpRightIcon size={24} className="text-[#6B5CFF]" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#6B5CFF] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 group-hover:border-[#6B5CFF]/30 group-hover:text-neutral-300 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
