'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/app/lib/motion'
import { ArrowRightIcon, CodeIcon, LightningIcon } from '@phosphor-icons/react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030307]">
            {/* CSS-only Background Effects (GPU optimized) */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs - CSS animations instead of Framer Motion */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6B5CFF]/20 rounded-full blur-[80px] bg-animate-float-1" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[80px] bg-animate-float-2" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#6B5CFF]/5 rounded-full blur-[100px] bg-animate-pulse" />
                
                {/* Floating Icons */}
                <div className="absolute top-32 right-20 opacity-20 animate-float-delayed">
                    <CodeIcon size={48} />
                </div>
                <div className="absolute bottom-40 left-20 opacity-20 animate-float">
                    <LightningIcon size={40} />
                </div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(107,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(107,92,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_100%)]" />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full"
            >
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <motion.div variants={fadeUp} className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B5CFF]/10 border border-[#6B5CFF]/20 text-[#6B5CFF] text-sm font-medium mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B5CFF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B5CFF]"></span>
                            </span>
                            Disponível para novos projetos
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                            Desenvolvimento de softwares
                            <br />
                            <span className="gradient-text">sem enrolação.</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Código limpo, entrega rápida e comunicação clara. Transforme sua ideia em realidade digital com uma equipe que entende do assunto.
                        </p>

                        {/* Stats */}
                        <motion.div 
                            variants={stagger}
                            className="flex flex-wrap gap-8 justify-center lg:justify-start mb-10"
                        >
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold gradient-text">50+</div>
                                <div className="text-sm text-neutral-500">Projetos feitos</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold gradient-text">100%</div>
                                <div className="text-sm text-neutral-500">Satisfação</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold gradient-text">2h</div>
                                <div className="text-sm text-neutral-500">Tempo médio de resposta</div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div 
                            variants={stagger}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="http://wa.me/553173219729"
                                className="inline-flex items-center justify-center gap-2 bg-[#6B5CFF] px-8 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#6B5CFF]/25 hover:shadow-[#6B5CFF]/40 transition-all"
                            >
                                Começar projeto
                                <ArrowRightIcon className="w-5 h-5" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#portfolio"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                            >
                                Ver projetos
                            </motion.a>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div 
                            variants={fadeUp}
                            className="mt-12 pt-8 border-t border-white/5"
                        >
                            <p className="text-sm text-neutral-500 mb-4">Tecnologias que dominamos</p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-neutral-400">
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">React</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Next.js</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">TypeScript</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Node.js</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">PostgreSQL</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Visual/Image */}
                    <motion.div 
                        variants={fadeUp}
                        className="flex-1 relative"
                    >
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-[#6B5CFF] to-[#22D3EE] opacity-20 blur-[100px] rounded-full" />
                            
                            {/* Main Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="relative glass rounded-2xl border border-white/10 p-8 overflow-hidden"
                            >
                                {/* Code Mockup */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="h-2 bg-white/10 rounded animate-pulse" style={{ width: '80%' }} />
                                    <div className="h-2 bg-white/10 rounded animate-pulse" style={{ width: '60%' }} />
                                    <div className="h-2 bg-white/10 rounded animate-pulse" style={{ width: '90%' }} />
                                    <div className="h-4 bg-[#6B5CFF]/20 rounded mt-4 border-l-2 border-[#6B5CFF] pl-3">
                                        <span className="text-[#6B5CFF] text-sm">const result = await deliverOnTime();</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded animate-pulse" style={{ width: '70%' }} />
                                    <div className="h-2 bg-white/10 rounded animate-pulse" style={{ width: '85%' }} />
                                </div>

                                {/* Floating Elements */}
                                <motion.div 
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-10 -right-10 bg-[#22D3EE]/10 rounded-xl p-3 border border-[#22D3EE]/20"
                                >
                                    <div className="text-[#22D3EE]">
                                        <LightningIcon size={24} />
                                    </div>
                                </motion.div>

                                <motion.div 
                                    animate={{ y: [15, -15, 15] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-8 -left-8 bg-[#6B5CFF]/10 rounded-xl p-3 border border-[#6B5CFF]/20"
                                >
                                    <div className="text-[#6B5CFF]">
                                        <CodeIcon size={24} />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-4 -right-4 w-20 h-20 border border-[#6B5CFF]/20 rounded-full"
                            />
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-4 -left-4 w-16 h-16 border border-[#22D3EE]/20 rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
                    >
                        <motion.div 
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-[#6B5CFF] rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}
