import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ChracterCounter from '../components/ChracterCounter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <div>
     <ChracterCounter />
   </div>
  )
}

export default Home
