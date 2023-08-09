  'use client'
import { Provider } from 'react-redux'
import './globals.css'
import { Inter } from 'next/font/google'
import store from '../store/store'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
      <body className={inter.className}>
        
        {/* navigation header */}
        <div>
          {/* main content | middle content */}
          {children}
        </div>
        {/* Footer */}

      </body>
      </Provider>
    </html>
  )
}
