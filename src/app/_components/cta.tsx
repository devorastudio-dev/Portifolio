'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/app/lib/motion'
import { ArrowRightIcon, CheckIcon } from '@phosphor-icons/react'

const WHATSAPP_URL = 'https://wa.me/553173219729'

const benefits = [
    "Atendimento em até 24 horas",
    "Orçamento sem compromisso",
    "Metodologia transparente",
    "Suporte pós-entrega",
]

export default function CTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-linear-to-br from-[#6B5CFF]/10 via-[#030307] to-[#22D3EE]/5" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#6B5CFF]/20 via-transparent to-transparent" />
            
            {/* Animated Blobs */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 right-0 w-125 h-125 bg-[#6B5CFF]/20 rounded-full blur-[120px]"
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 w-125 h-125 bg-[#22D3EE]/15 rounded-full blur-[120px]"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative z-10 max-w-4xl mx-auto px-6"
            >
                <div className="relative bg-[#1a1a24]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 overflow-hidden">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#6B5CFF]/20 via-transparent to-[#22D3EE]/20" />
                    
                    {/* Content */}
                    <div className="relative text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mb-8"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-[#6B5CFF]/10 border border-[#6B5CFF]/20 text-[#6B5CFF] text-sm font-medium mb-6">
                                Vamos trabalhar juntos
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Pronto para tirar seu projeto
                                <br />
                                <span className="gradient-text">do papel?</span>
                            </h2>
                            <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
                                Vamos criar algo rápido, bem feito e do jeito certo. 
                                Entre em contato agora e vamos transformar sua ideia em realidade.
                            </p>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4 mb-10"
                        >
                            {benefits.map((benefit, index) => (
                                <div 
                                    key={benefit}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                                >
                                    <CheckIcon size={16} className="text-[#22D3EE]" weight="bold" />
                                    <span className="text-sm text-neutral-300">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#6B5CFF] px-8 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#6B5CFF]/25 hover:shadow-[#6B5CFF]/40 transition-all"
                            >
                                Falar no WhatsApp
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <ArrowRightIcon className="w-5 h-5" />
                                </motion.span>
                            </motion.a>
                        </motion.div>

                        {/* Trust Signal */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-sm text-neutral-500"
                        >
                            Sem compromisso. Resposta em até 12h úteis.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
