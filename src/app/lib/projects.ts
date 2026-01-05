import { ReactNode } from 'react'

const globalImg = '/global.png'
const devoraImg = '/Devora-w.png'
const petImg = '/petdev.png'
const lojaImg = '/fiore.png'

export type Project = {
    description?: ReactNode
    slug: string
    title: string
    shortDescription: string
    fullDescription: string
    challenge: string
    solution: string
    features: string[]
    technologies: { name: string; category: string }[]
    stack: string[]
    image: string
    images?: string[]
    link: string
    liveUrl?: string
    githubUrl?: string
    duration: string
    year: string
}

export const projects: Project[] = [
    {
        slug: 'petshop-lovepet',
        title: 'PetShop LovePet',
        shortDescription: 'Landing page moderna e responsiva para PetShop com sistema de agendamento.',
        fullDescription: 'Desenvolvemos uma landing page completa e otimizada para o PetShop LovePet, focada em conversão e experiência do usuário. O projeto inclui um design moderno com animações suaves, sistema de agendamento de serviços integrado, galeria de fotos dos pets atendidos e informações completas sobre os serviços oferecidos.',
        challenge: 'O desafio principal era criar uma página que transmitisse confiança e profissionalismo para donos de pets, ao mesmo tempo em que fosse visualmente atraente e fácil de navegar. Além disso, precisávamos integrar um sistema de agendamento que funcionasse de forma intuitiva.',
        solution: 'Desenvolvemos uma landing page com design clean e harmonioso, utilizando tons que remetem ao universo pet. Implementamos um sistema de agendamento via formulário com confirmação automática, otimizamos para SEO local e criamos uma experiência mobile-first que representa 70% do tráfego do site.',
        features: [
            'Sistema de agendamento de serviços',
            'Galeria de fotos com lightbox',
            'Formulário de contato com validação',
            'Integração com WhatsApp para confirmações',
            'Responsividade completa',
            'Otimização SEO local',
            'Animações suaves com Framer Motion',
            'Integração com Google Analytics'
        ],
        technologies: [
            { name: 'Next.js 14', category: 'Frontend' },
            { name: 'TypeScript', category: 'Linguagem' },
            { name: 'TailwindCSS', category: 'Styling' },
            { name: 'Framer Motion', category: 'Animações' },
            { name: 'React Hook Form', category: 'Forms' },
            { name: 'Vercel', category: 'Deploy' }
        ],
        stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        image: petImg,
        images: [petImg],
        link: 'https://lovepet-theta.vercel.app',
        liveUrl: 'https://lovepet-theta.vercel.app',
        duration: '3 semanas',
        year: '2025'
    },
    {
        slug: 'landing-global',
        title: 'Landing Page Globalshop',
        shortDescription: 'Landing page de alta conversão para e-commerce com design minimalista.',
        fullDescription: 'Criamos uma landing page altamente otimizada para conversão para a Globalshop, uma loja virtual de produtos diversos. O projeto focou em criar uma experiência de usuário fluida, com destaque para os produtos em destaque, ofertas especiais e uma navegação intuitiva que leva o usuário diretamente para o checkout.',
        challenge: 'O principal desafio era criar uma página que carregasse rapidamente (crucial para SEO e conversão) enquanto mantinha um visual premium e profissional. Precisávamos também garantir que a página funcionasse perfeitamente em todos os dispositivos.',
        solution: 'Utilizamos Next.js com Server Side Rendering para garantir performance máxima e SEO otimizado. Implementamos lazy loading para imagens, código minimizado e um design que prioriza a hierarquia visual. O resultado foi uma página com Core Web Vitals exemplares e taxa de conversão 40% maior que a versão anterior.',
        features: [
            'Design minimalista focado em conversão',
            'Hero section com CTA otimizado',
            'Carrossel de produtos em destaque',
            'Contagem regressiva para ofertas',
            'Widget de avaliações de clientes',
            'Integração com WhatsApp Business',
            'Speed optimization avançado',
            'SEO técnico implementado'
        ],
        technologies: [
            { name: 'React 18', category: 'Frontend' },
            { name: 'Next.js 14', category: 'Framework' },
            { name: 'TailwindCSS', category: 'Styling' },
            { name: 'TypeScript', category: 'Linguagem' },
            { name: 'Next SEO', category: 'SEO' },
            { name: 'Vercel Edge', category: 'Deploy' }
        ],
        stack: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
        image: globalImg,
        images: [globalImg],
        link: 'https://global-shop-three.vercel.app',
        liveUrl: 'https://global-shop-three.vercel.app',
        duration: '4 semanas',
        year: '2025'
    },
    {
        slug: 'micro-saas-ajuda-se',
        title: 'Micro SaaS Ajuda-se',
        shortDescription: 'Sistema web completo para gestão interna de pequenas empresas.',
        fullDescription: 'Desenvolvemos um sistema SaaS completo para gestão interna da empresa Ajuda-se, incluindo módulo de clientes, serviços, financeiro e relatórios. O sistema foi projetado para ser intuitivo e reduzir o tempo gasto em tarefas administrativas rotineiras.',
        challenge: 'O desafio era criar uma aplicação completa que fosse fácil de usar para usuários não técnicos, mas que também oferecesse funcionalidades robustas de gestão. Precisávamos de uma arquitetura escalável que permitisse adicionar novos módulos no futuro.',
        solution: 'Desenvolvemos uma aplicação web completa com Next.js no frontend e API routes para o backend. Implementamos autenticação segura, banco de dados PostgreSQL com Prisma ORM, dashboard com gráficos em tempo real e sistema de permissões por papéis de usuário. A interface foi desenhada seguindo princípios de UX para aplicações SaaS.',
        features: [
            'Dashboard com métricas em tempo real',
            'Cadastro e gestão de clientes',
            'Controle de serviços prestados',
            'Gestão financeira completa',
            'Relatórios e exportableis',
            'Sistema de permissões',
            'Notificações em tempo real',
            'Backup automático diário',
            'API documentação',
            'Multi-device sync'
        ],
        technologies: [
            { name: 'Next.js 14', category: 'Full Stack' },
            { name: 'TypeScript', category: 'Linguagem' },
            { name: 'Prisma ORM', category: 'Database' },
            { name: 'PostgreSQL', category: 'Database' },
            { name: 'NextAuth.js', category: 'Auth' },
            { name: 'Recharts', category: 'Charts' },
            { name: 'TailwindCSS', category: 'Styling' },
            { name: 'React Query', category: 'State' }
        ],
        stack: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
        image: devoraImg,
        images: [devoraImg],
        link: '#',
        duration: '8 semanas',
        year: '2025'
    },
    {
       slug: 'loja-virtual-fiore',
       title: 'Loja Virtual – Fiore',
       shortDescription: 'E-commerce de moda feminina com foco em experiência de compra e conversão.',
        fullDescription: 'Desenvolvemos uma loja virtual completa para a marca Fiore, focada na venda online de roupas femininas. A aplicação foi pensada para oferecer uma navegação fluida, visual moderno e uma jornada de compra simples, tanto no desktop quanto no mobile, garantindo uma experiência agradável para o cliente final e facilidade de gestão para a marca.',
        challenge: 'O principal desafio foi criar uma loja virtual visualmente atraente, rápida e intuitiva, que transmitisse a identidade da marca e funcionasse bem em dispositivos móveis. Além disso, era necessário estruturar o projeto de forma escalável para futuras integrações, como meios de pagamento, frete e automações de marketing.',
        solution: 'Construímos um e-commerce moderno utilizando Next.js, com foco em performance e SEO. Implementamos catálogo de produtos, páginas dinâmicas, carrinho de compras e estrutura preparada para integração com gateways de pagamento e sistemas de entrega. O layout foi desenvolvido seguindo boas práticas de UX/UI para maximizar conversão e usabilidade.',
        features: [
            'Catálogo de produtos com variações',
            'Páginas de produto otimizadas para SEO',
            'Carrinho de compras',
            'Layout responsivo (mobile first)',
            'Filtros por categoria',
            'Busca de produtos',
            'Checkout otimizado',
            'Integração preparada para pagamento e frete',
            'Design focado em conversão',
            'Performance otimizada'
        ],
        technologies: [
                { name: 'Next.js 14', category: 'Frontend' },
                { name: 'TypeScript', category: 'Linguagem' },
                { name: 'TailwindCSS', category: 'Styling' },
                { name: 'React', category: 'Frontend' },
                { name: 'Vercel', category: 'Deploy' },
                { name: 'Prisma', category: 'Database' },
                { name: 'PostgreSQL', category: 'Database' }   
        ],
        stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
        image: lojaImg,
        images: [lojaImg],
        link: '#',
        duration: '6 semanas',
        year: '2026'    
    }
]


