import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from './context/userContext'
import { ScpProvider } from './context/scpContext'
import { BankProvider } from './context/bankContext'

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
    <html lang="en" className='w-screen h-screen bg-gray-100'>
      <UserProvider>
        <ScpProvider>
          <BankProvider>
            <body className={inter.className}>{children}</body>
          </BankProvider>
        </ScpProvider>
      </UserProvider>
    </html>
  )
}
