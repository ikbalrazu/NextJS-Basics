import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const handleclick = () => {
    // router.push("/about");
    router.replace("/about");
  }
  return (
    <div>
      Hello world
      <Link href="/about">
        About
      </Link>
      <div>
        <button onClick={handleclick}>form submitted</button>
      </div>
    </div>
  )
}
