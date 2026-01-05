'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '@/app/lib/motion'
import { ArrowDownIcon, PlusIcon, MinusIcon } from '@phosphor-icons/react'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: 'Quanto tempo leva para desenvolver um projeto?',
        answer: 'O tempo varia conforme a complexidade do projeto. Projetos pequenos como landing pages levam de 2-3 semanas, enquanto aplicações mais complexas podem levar 2-3 meses. Durante o planejamento, definimos um cronograma realista e mantemos você atualizado em cada etapa através de relatórios semanais.'
    },
    {
        question: 'Como funciona o processo de desenvolvimento?',
        answer: 'Nosso processo é transparente e colaborativo: 1) Reunimos para entender suas necessidades e objetivos, 2) Criamos um planejamento detalhado com cronograma, 3) Desenvolvemos com atualizações semanais, 4) Testamos rigorosamente, 5) Entregamos com documentação completa e suporte inicial.'
    },
    {
        question: 'Vocês oferecem suporte após a entrega?',
        answer: 'Sim! Oferecemos 30 dias de suporte gratuito após a entrega do projeto para garantir que tudo funcione perfeitamente. Depois desse período, temos planos de manutenção mensal que incluem correções, atualizações de segurança e melhorias contínuas conforme suas necessidades.'
    },
    {
        question: 'Quais tecnologias vocês utilizam?',
        answer: 'Trabalhamos com as melhores tecnologias do mercado moderno: React/Next.js para frontend, Node.js e Python para backend, PostgreSQL e MongoDB para bancos de dados, e deploy em cloud (Vercel, AWS ou Railway). Escolhemos a melhor opção baseada nas necessidades específicas do seu projeto.'
    },
    {
        question: 'Quanto custa desenvolver um software?',
        answer: 'O investimento depende do escopo e complexidade do projeto. Para ter uma estimativa precisa, agende uma conversa gratuita onde discutiremos suas necessidades. Aceitamos pagamentos parcelados e temos opções para diferentes orçamentos, desde projetos pontuais até soluções completas.'
    },
    {
        question: 'Vocês trabalham com projetos de qualquer tamanho?',
        answer: 'Absolutamente! Trabalhamos com projetos de todos os tamanhos, desde landing pages e apps simples até sistemas empresariais complexos. Cada projeto recebe a mesma atenção e qualidade, independente do porte.中小企业也欢迎！'
    },
    {
        question: 'Como vocês garantem a qualidade do código?',
        answer: 'Seguimos boas práticas de desenvolvimento: código limpo e documentado, testes automatizados, code reviews, uso de TypeScript para segurança de tipos, e arquitetura escalável. Além disso, utilizamos ferramentas de linting e formatação automática para manter a consistência.'
    },
    {
        question: 'Vocês fazem integrações com outros sistemas?',
        answer: 'Sim! Fazemos integrações com APIs externas, sistemas de pagamento (Stripe, PagSeguro, etc.), CRMs, ERPs, automações de marketing e muito mais. Nossa experiência com REST e GraphQL nos permite conectar praticamente qualquer sistema.'
    }
]

function FAQAccordion({ question, answer, isOpen, onClick, index }: { question: string; answer: string; isOpen: boolean; onClick: () => void; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group"
        >
            <button
                onClick={onClick}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none border-b border-white/10 hover:border-[#6B5CFF]/30 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <span className="text-[#6B5CFF] text-sm font-mono">0{index + 1}</span>
                    <span className="text-lg font-medium text-white group-hover:text-[#6B5CFF] transition-colors pr-4">
                        {question}
                    </span>
                </div>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#6B5CFF] shrink-0"
                >
                    <PlusIcon className="w-6 h-6" />
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="py-6 pl-12">
                            <p className="text-neutral-400 leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="relative py-32 bg-[#030307]">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.06, 0.03]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#6B5CFF]/5 rounded-full blur-[100px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-4xl mx-auto px-6"
            >
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-block px-4 py-2 rounded-full bg-[#6B5CFF]/10 border border-[#6B5CFF]/20 text-[#6B5CFF] text-sm font-medium mb-6"
                    >
                        Dúvidas frequentes
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Perguntas <span className="gradient-text">Frequentes</span>
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
                        Tire suas dúvidas sobre nosso processo de desenvolvimento 
                        e encontre as respostas que você procura.
                    </p>
                </div>

                <div className="bg-[#1a1a24]/50 rounded-2xl border border-white/10 p-2 md:p-4">
                    {faqs.map((faq, index) => (
                        <FAQAccordion
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA at bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-neutral-400 mb-4">
                        Não encontrou o que procurava?
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/31990855251"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                    >
                        Fale conosco no WhatsApp
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    )
}

