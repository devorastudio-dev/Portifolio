import Link from 'next/link'


export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Devora Studio. Todos os direitos reservados.
                </span>
                <div className="flex gap-6 text-sm">
                    <Link href="https://instagram.com" target="_blank">Instagram</Link>
                    <Link href="https://wa.me/31990855251" target="_blank">WhatsApp</Link>
                </div>
            </div>
        </footer>
    )
}