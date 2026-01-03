'use client'

import Image from 'next/image'
import logoImg from "../../../public/Devora-w.png"
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-[#0F0F14]/80 backdrop-blur border-b border-white/10"
      >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        <div className="shrink-0">
        <Image 
          src={logoImg}
          alt="Devora logo"
          height={40}
          width={120}
        />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#servicos">Serviços</a>
        <a href="#portfolio">Projetos</a>
        <a href="#processo">Processo</a>
        <a
          href="https://wa.me/31990855251"
          target="_blank"
          className="bg-[#6B5CFF] px-4 py-2 rounded-lg font-medium"
        >
          Contato
        </a>
        </div>

        {/* Mobile button */}
        <button onClick={() => setOpen(true)} className="md:hidden">
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
        className="fixed inset-0 z-50 bg-[#0F0F14] text-white"
        >
        <div className="flex justify-between items-center h-16 px-6 border-b border-white/10">
          <Image 
          src={logoImg}
          alt="Devora logo"
          height={40}
          width={120}
          />
          <button onClick={() => setOpen(false)}>
          <X size={28} />
          </button>
        </div>

        <motion.nav
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6 px-6 pt-12 text-lg"
        >
          <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Projetos</a>
          <a href="#processo" onClick={() => setOpen(false)}>Processo</a>

            <a
            href="https://wa.me/-"
            target="_blank"
            className="mt-6 bg-[#6B5CFF] py-4 rounded-xl text-center font-semibold transition-transform transform hover:scale-105 hover:bg-[#5A4BCF]"
            >
            Falar no WhatsApp
            </a>

            <a
            href="mailto:devorastudio.dev@gmail.com"
            target="_blank"
            className="mt-6 bg-[#6B5CFF] py-4 rounded-xl text-center font-semibold transition-transform transform hover:scale-105 hover:bg-[#5A4BCF]"
            >
            Enviar Email
            </a>
        </motion.nav>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}
