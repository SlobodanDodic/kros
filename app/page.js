import styles from './page.module.scss'
import { Roboto_Slab } from 'next/font/google';
import Image from 'next/image';
import workImg from '../public/images/hero/1.png'
import jerseyImg from '../public/images/hero/2.png'
import Arrows from '@/components/Arrows';

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

      <section className={styles.wrapper}>
        <div className={styles.top}>KROS</div>
        <div className={styles.bottom} aria-hidden="true">KROS</div>
      </section>

      <div className={styles.text}>
        <h2>Odbojka</h2>
        <h2>za rekreativce</h2>
      </div>

      <div className={styles.line} />

      <Arrows />

    </div>
  )
}