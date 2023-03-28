import styles from './page.module.scss'
import { Roboto_Slab } from 'next/font/google';

const customFont = Roboto_Slab({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <div className={styles.main + ' ' + customFont.className}>
      <div className={styles.blob + ' ' + styles.blob1} />
      <div className={styles.blob + ' ' + styles.blob2} />

      <div className={styles.stripe} />

      <div className={styles.kros}>
        <h2>Klub</h2>
        <h2>Rekreativnih</h2>
        <h2>Odbojkaša</h2>
        <h2>Sombor</h2>
      </div>
    </div>
  )
}