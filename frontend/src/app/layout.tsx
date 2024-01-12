import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from './context/userContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scp Foundation'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <html lang="en" className='w-screen h-screen bg-gray-100'>
          <body className={inter.className}>{children}</body>
      </html>
    </UserProvider>
  )
}
