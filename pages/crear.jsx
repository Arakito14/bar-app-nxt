import axios from 'axios';
import CrearList from '../components/CrearList';
import styles from "../styles/Home.module.css"

export default function Crear({crearList}) {
  return (
    <div className={styles.container}>
      <CrearList crearList={crearList}/>
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
      crearList: res.data,
      // admin,
    },
  };
};