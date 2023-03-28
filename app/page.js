import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.blob + ' ' + styles.blob1} />
      <div className={styles.blob + ' ' + styles.blob2} />

      <div className={styles.stripe} />

      <div className={styles.kros}>
        <h2>Klub</h2>
        <h2>Rekreativnih</h2>
        <h2>0dbojkaša</h2>
        <h2>Sombor</h2>
      </div>
    </div>
  )
}