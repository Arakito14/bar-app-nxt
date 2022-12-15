import styles from "../styles/ProductCard.module.css"
import axios from "axios";
import Link from 'next/link'

const TableCard = ({ table }) => {

  return (
    <div className={styles.container}>
      <Link href="/crear" passHref>
        <button
          className={styles.mesa}>Mesa {table.mesas.map((mesa) => (
            <span key={mesa._id}>
              {mesa.numero}
            </span>
          ))}
        </button>
      </Link>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/tables/${params.id}`
  );
  return {
    props: {
      table: res.data,
    },
  };
};

export default TableCard