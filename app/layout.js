import '../scss/globals.scss'
import Header from '../components/Header'
import { Josefin_Sans } from 'next/font/google';

const customFont = Josefin_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
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
