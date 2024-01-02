import type {Metadata, Viewport} from 'next'
import {Roboto} from 'next/font/google'
import 'app/globals.scss'
import Favicon from './favicon.ico'
import MenuBar from "@/components/menu-bar/menu-bar";
import ValidateUser from "@/components/validate-user/validate-user";
import {Suspense} from "react";
import LoadingPage from "@/app/loading";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: 'Biblia Flix',
  description: 'Biblia Flix é uma plataforma de estudos bíblicos.',
  manifest: '/manifest.json',
  icons: [{rel: 'icon', url: Favicon.src}]
}

export const viewport: Viewport = {
  width: 'device-width',
  viewportFit: 'cover',
  colorScheme: 'dark',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#141414'
}

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
    <body className={`${roboto.className}`}>
      <div className="flex flex-col h-full justify-between">
        <div className="flex-1 overflow-y-auto">
          <Suspense fallback={<LoadingPage/>}>
            {children}
          </Suspense>
          <ValidateUser/>
        </div>
        <MenuBar />
      </div>
    </body>
    </html>
  )
}
