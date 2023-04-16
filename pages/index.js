import Head from 'next/head'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'

export default function Home({productList}) {
  return (
    < div className = {styles.container} >      
      <Head>
        <title>BarApp</title>
        <meta name="Tomemos... Buenas decisiones" content="Created by Matías Alevropulos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div >
  )
}