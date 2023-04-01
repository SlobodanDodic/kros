import styles from './page.module.scss'
import { Roboto_Slab } from 'next/font/google';
import Image from 'next/image';
import workImg from '../public/images/1.png'
import jerseyImg from '../public/images/2.png'

const customFont = Roboto_Slab({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <div className={styles.main + ' ' + customFont.className}>

      <div className={styles.photo}>
        <Image src={workImg} alt='work-outfit' priority={true} className={styles.workImg} />
        <Image src={jerseyImg} alt='work-outfit' priority={true} className={styles.jerseyImg} />
      </div>

      <div className={styles.circle} />

      <div className={styles.ground} />

      <div className={styles.text}>
        <span>K.R.O.S.</span>
        <div className={styles.textLong}>Rekreativna Odbojka</div>
      </div>

      {/* <div className={styles.textLong}>
        <span>Klub Rekreativnih Odbojkaša Sombor</span>
      </div> */}
    </div>
  )
}