import '../scss/globals.scss'
import Header from '../components/Header'
import { Oswald } from 'next/font/google'

const customFont = Oswald({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: {
    default: "Kros",
    template: "%s | Kros"
  },
  description: 'Rekreativni sportisti Sombor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={customFont.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
