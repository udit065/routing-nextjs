'use client'
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h2>Home Page</h2>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <br />
      <button onClick={() => router.push('/login')}>LOGGGGin</button>
      <br />
      <button onClick={() => router.push("/about")}>ABOOOOOut</button>
    </main>
  )
}
