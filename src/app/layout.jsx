import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Time Event - Create Unforgettable Moments',
  description: 'Your Time Event specializes in creating extraordinary experiences for special occasions. From weddings to corporate events, we turn your vision into reality.',
  keywords: 'event planning, special occasions, weddings, corporate events, birthday parties',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar/>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Your Time Event. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

