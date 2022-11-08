import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Books App </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <h1>Books App</h1>
     <Link 
      href = "/libros" 
      data-cy = "link-to-books"
      >
        Boook List
      </Link>
    </div>
  )
}
