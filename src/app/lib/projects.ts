const globalImg = '/global.png'
const devoraImg = '/Devora-w.png'
const petImg = '/petdev.png'

export type Project = {
    slug: string
    title: string
    description: string
    stack: string[]
    image: string
    link: string
}

export const projects: Project[] = [
    {
        slug: 'petshop-lovepet',
        title: 'PetShop LovePet',
        description: 'landing page para PetShop.',
        stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
        image: petImg,
        link: 'https://lovepet-theta.vercel.app',
    },
    {
        slug: 'landing-global',
        title: 'Landing Page Globalshop',
        description: 'Landing page rápida, objetiva e otimizada para conversão.',
        stack: ['React', 'TailwindCSS'],
        image: globalImg,
        link: 'https://global-shop-three.vercel.app',
    },
    {
        slug: 'micro-saas-ajuda-se',
        title: 'Micro Saas Ajuda-se',
        description: 'Sistema web simples para gestão interna.',
        stack: ['Next.js', 'Prisma', 'PostgreSQL'],
        image: globalImg,
        link: '#',
    },
]


