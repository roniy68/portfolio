import { Providers } from '@src/store/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ahroniy.me',
  description: 'Hello I am Ahmed Hasan Rony. Happy Coding...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative z-0 bg-primary`}>
        <Providers>
          <header className='z-50 absoloute top-0'>
            <Header />
          </header>

          <main>
            {children}
          </main>

          <Footer />

        </Providers>
      </body>
    </html>
  )
}
