'use client'

import Image from 'next/image'
import logoImg from "../../../public/Devora-w.png"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, ArrowRightIcon } from '@phosphor-icons/react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#030307]/80 backdrop-blur-lg border-b border-white/10 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image 
              src={logoImg}
              alt="Devora logo"
              height={scrolled ? 32 : 40}
              width={scrolled ? 96 : 120}
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#servicos" className="text-neutral-400 hover:text-white transition-colors">
              Serviços
            </Link>
            <Link href="#portfolio" className="text-neutral-400 hover:text-white transition-colors">
              Projetos
            </Link>
            <Link href="#processo" className="text-neutral-400 hover:text-white transition-colors">
              Processo
            </Link>
            <Link
              href="https://wa.me/31990855251"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#6B5CFF] px-6 py-3 rounded-lg font-medium text-white hover:bg-[#5a4bc6] transition-all hover:shadow-lg hover:shadow-[#6B5CFF]/25"
            >
              Contato
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile button */}
          <button 
            onClick={() => setOpen(true)} 
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <List size={28} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
      {open && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#030307] text-white"
        >
        <div className="flex justify-between items-center h-20 px-6 border-b border-white/10">
          <Image 
          src={logoImg}
          alt="Devora logo"
          height={36}
          width={108}
          />
          <button 
            onClick={() => setOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <motion.nav
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-2 px-6 pt-8"
        >
          {['servicos', 'portfolio', 'processo'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15 + index * 0.05 }}
            >
              <Link 
                href={`#${item}`} 
                onClick={() => setOpen(false)}
                className="block py-4 text-lg text-neutral-300 hover:text-white border-b border-white/5 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="pt-6 space-y-3"
          >
            
            <Link
              href="https://wa.me/553173219729"
              target="_blank"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#6B5CFF] py-4  rounded-xl font-semibold transition-all hover:bg-[#5a4bc6] hover:shadow-lg hover:shadow-[#6B5CFF]/25"
            >
              Falar no WhatsApp
            </Link>

            <Link
              href="mailto:devorastudio.dev@gmail.com"
              target="_blank"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center py-4 rounded-xl font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
            >
              Enviar Email
            </Link>
            
          </motion.div>
        </motion.nav>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}
