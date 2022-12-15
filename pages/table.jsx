import axios from 'axios';
import CrearList from '../components/CrearList';
import TableList from '../components/TableList'
import styles from "../styles/Home.module.css"

export default function Mesa({tableList}) {
  return (
    <div className={styles.container}>
      <TableList tableList={tableList}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  // const myCookie = ctx.req?.cookies || "";
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get("http://localhost:3000/api/tables");
  return {
    props: {
      tableList: res.data,
      // admin,
    },
  };
};
