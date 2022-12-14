import axios from 'axios';
import ProductList from '../components/ProductList'
import styles from "../styles/Home.module.css"

export default function Menu({productList}) {
  return (
    <div className={styles.container}>
      {/* <ProductList productList={productList}/> */}
    </div>
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