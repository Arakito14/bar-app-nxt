import axios from 'axios';
import ProductList from '../components/ProductList'
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
      <ProductList productList={productList}/>
    </div >
  )
}

export const getServerSideProps = async () => {
  // const myCookie = ctx.req?.cookies || "";
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
      // admin,
    },
  };
};
