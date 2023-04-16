import styles from "/Users/arakito/Documents/A hacer/BarAPP/bar-app-npx/styles/Home.module.css"
import axios from 'axios';
import CrearList from '/Users/arakito/Documents/A hacer/BarAPP/bar-app-npx/components/CrearList.jsx';

const Table = ({ crearList }) => {
    return (
        <div className={styles.container}>
            <CrearList crearList={crearList} />
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
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

export default Table;
