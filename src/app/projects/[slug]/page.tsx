import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/app/lib/projects'
import { ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr'

export default async function ProjectPage({ 
    params 
}: { 
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find(p => p.slug === slug)

    if (!project) return notFound()

    return (
        <main className="max-w-5xl mx-auto px-6 py-32">
            <Link 
                href="/#portfolio" 
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-10"
            >
                <ArrowLeftIcon size={16} /> Voltar
            </Link>

            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <p className="text-neutral-400 mb-10">{project.description}</p>

            <div className="relative w-full h-105 rounded-xl overflow-hidden mb-10">
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                />
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
                {project.stack.map(tech => (
                    <span 
                        key={tech} 
                        className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                className="inline-block bg-[#6B5CFF] px-6 py-3 rounded-lg font-medium"
            >
                Ver projeto online
            </a>
        </main>
    )
}