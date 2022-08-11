import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MyHome from "../components/home/index";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pandanarum</title>
            </Head>

            <main className="bg-slate-200 flex flex-col w-full h-screen">
                <MyHome />
            </main>

            {/* <footer className={styles.footer}></footer> */}
        </div>
    );
};

export default Home;
