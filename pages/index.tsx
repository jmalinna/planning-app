import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planning App</title>
        <meta name="description" content="Planning app: plan daily and year goals, make todo lists" />
        <link rel="icon" href="/favicon.png" sizes="16x16 32x32" type="image/png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/year-goals/year-goals" className={styles.card}>
            <h2 className="title">
              Year Goals
            </h2>
            <p>see your year goals</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <div className={styles.doneIcon}>
          <a href="https://icons8.com/icon/108633/done" target="_blank" rel="noopener noreferrer">Done</a> icon by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a>
        </div>
      </footer>
    </div>
  )
}
