"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
    InstagramLogoIcon, 
    WhatsappLogoIcon, 
    EnvelopeIcon, 
    MapPinIcon 
} from '@phosphor-icons/react'
import logoImg from "../../../public/Devora-w.png"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: InstagramLogoIcon, href: 'https://instagram.com/devorastudio_tech', label: 'Instagram' },
        { icon: WhatsappLogoIcon, href: 'https://wa.me/553173219729', label: 'WhatsApp' },
        { icon: EnvelopeIcon, href: 'mailto:devorastudio.dev@gmail.com', label: 'Email' },
    ]

    const footerLinks = {
        Services: [
            { label: 'Desenvolvimento Web', href: '#servicos' },
            { label: 'Backend & APIs', href: '#servicos' },
            { label: 'Landing Pages', href: '#servicos' },
            { label: 'Automação', href: '#servicos' },
        ],
        Company: [
            { label: 'Sobre nós', href: '#' },
            { label: 'Projetos', href: '#portfolio' },
            { label: 'Processo', href: '#processo' },
            { label: 'Contato', href: 'https://wa.me/553173219729' },
        ],
    }

    return (
        <footer className="relative bg-[#030307] border-t border-white/10">
            {/* CSS-only Background Effects (GPU optimized) */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-1/4 w-100 h-100 bg-[#6B5CFF]/5 rounded-full blur-[80px] bg-animate-float-1" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image 
                                src={logoImg}
                                alt="Devora Studio"
                                width={120}
                                height={40}
                            />
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Desenvolvimento de softwares sem enrolação. Código limpo, 
                            entrega rápida e comunicação clara.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-[#6B5CFF]/50 hover:bg-[#6B5CFF]/10 transition-all"
                                        aria-label={social.label}
                                    >
                                        <Icon size={20} weight="bold" />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Serviços</h4>
                        <ul className="space-y-3">
                            {footerLinks.Services.map((link) => (
                                <li key={link.label}>
                                    <Link 
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-[#6B5CFF] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-3">
                            {footerLinks.Company.map((link) => (
                                <li key={link.label}>
                                    <Link 
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-[#6B5CFF] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPinIcon size={20} className="text-[#6B5CFF] mt-0.5 shrink-0" />
                                <span className="text-sm text-neutral-400">
                                    Belo Horizonte, MG
                                </span>
                            </li>
                            <li>
                                <a 
                                    href="mailto:devorastudio.dev@gmail.com"
                                    className="text-sm text-neutral-400 hover:text-[#6B5CFF] transition-colors"
                                >
                                    devorastudio.dev@gmail.com
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://wa.me/553173219729"
                                    target="_blank"
                                    className="text-sm text-neutral-400 hover:text-[#6B5CFF] transition-colors"
                                >
                                    (31) 97321-9729
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-neutral-500">
                        © {currentYear} Devora Studio. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link 
                            href="#" 
                            className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors"
                        >
                            Política de Privacidade
                        </Link>
                        <Link 
                            href="#" 
                            className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors"
                        >
                            Termos de Uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
