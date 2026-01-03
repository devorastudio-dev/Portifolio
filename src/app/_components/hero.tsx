'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/app/lib/motion'
import { ArrowRightIcon } from '@phosphor-icons/react'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-[#0F0F14] text-white w-full overflow-hidden">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="max-w-6xl mx-auto px-6 space-y-6 w-full"
            >
                <h1 className="text-4xl md:text-6xl font-bold">
                    Desenvolvimento de softwares
                    <span className="text-[#6B5CFF]"> sem enrolação</span>.
                </h1>
                <p className="text-lg text-neutral-400 max-w-xl">
                    Código limpo, entrega rápida e comunicação clara.
                </p>

                <div className="m-2 space-x-3 space-y-4">
                    <a
                        href="http://wa.me/31990855251"
                        className="inline-flex bg-[#6B5CFF] px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 hover:bg-[#5A4BCF]"
                    >
                        Começar projeto
                        <ArrowRightIcon className="w-5 h-5" />
                    </a>

                    <a
                        href="#portfolio"
                        className="inline-flex bg-[#6B5CFF] px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 hover:bg-[#5A4BCF]"
                    >
                        Ver projetos
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
