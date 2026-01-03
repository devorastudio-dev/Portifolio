'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/app/lib/projects'

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold">Projetos</h2>
        <p className="text-neutral-400 mt-4 max-w-xl">
          Alguns trabalhos que mostram como transformamos ideias em produtos
          digitais sólidos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#6B5CFF] transition"
            >
              <div className="relative w-full h-65 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
