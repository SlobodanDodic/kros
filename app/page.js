import styles from './page.module.scss'
import { Roboto_Slab } from 'next/font/google';
import Image from 'next/image';
import workImg from '../public/1.png'
import jerseyImg from '../public/2.png'
import TextCircle from '@/components/TextCircle';

const customFont = Roboto_Slab({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <div className={styles.main + ' ' + customFont.className}>

      <div className={styles.photo}>
        <Image src={workImg} alt='work-outfit' priority className={styles.workImg} />
        <Image src={jerseyImg} alt='work-outfit' priority className={styles.jerseyImg} />
      </div>

      <div className={styles.circle} />

      <div className={styles.ground} />

      <TextCircle />

      {/* <div className={styles}>Klub rekreativnih odbojkaša Sombor</div> */}
    </div>
  )
}