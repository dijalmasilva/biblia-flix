import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import 'app/globals.scss'
import Favicon from './favicon.ico'
import MenuBar from "@/components/menu-bar/menu-bar";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
    title: 'Biblia Flix',
    description: 'Biblia Flix é uma plataforma de estudos bíblicos.',
    manifest: '/manifest.json',
    icons: [{ rel: 'icon', url: Favicon.src }]
}

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
        <body className={roboto.className}>
            {children}
            <MenuBar/>
            <div className="mb-20"/>
        </body>
        </html>
    )
}
