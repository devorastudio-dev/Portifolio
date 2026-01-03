'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/app/lib/motion'

const WHATSAPP_URL = 'https://wa.me/SEUNUMERO'

export default function CTA() {
    return (
        <section className="bg-[#0F0F14] text-white py-32">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="max-w-5xl mx-auto px-6 text-center space-y-6"
            >
                <h2 className="text-4xl font-bold">
                    Pronto para tirar seu projeto do papel?
                </h2>
                <p className="text-neutral-400">
                    Vamos criar algo rápido, bem feito e do jeito certo.
                </p>
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#6B5CFF] px-8 py-4 rounded-xl font-semibold hover:bg-[#5a4de6] transition-colors"
                >
                    Falar no WhatsApp
                </a>
            </motion.div>
        </section>
    )
}