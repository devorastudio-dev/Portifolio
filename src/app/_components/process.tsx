'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/app/lib/motion'

const STEPS = [
    { title: 'Entendimento', desc: 'Alinhamos objetivos, público e necessidades reais.' },
    { title: 'Planejamento', desc: 'Definimos estrutura, stack e cronograma.' },
    { title: 'Desenvolvimento', desc: 'Código limpo, testes e entregas contínuas.' },
    { title: 'Entrega', desc: 'Projeto no ar com suporte e ajustes finais.' },
]

export default function Process() {
    return (
        <section id="processo" className="max-w-7xl mx-auto px-6 py-32">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
            >
                <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-16">
                    Processo
                </motion.h2>

                <div className="grid md:grid-cols-4 gap-10">
                    {STEPS.map((step, index) => (
                        <motion.div key={index} variants={fadeUp} className="space-y-3">
                            <span className="text-[#6B5CFF] font-bold">0{index + 1}</span>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-neutral-500">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
