import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pandanarum</title>
            </Head>

            <main className={styles.main}>
                <div className="w-full border min-h-screen flex flex-col">Pandanarum</div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default Home;
