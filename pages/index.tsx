import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h2 className={styles.title} >Login</h2>
        <form className={styles.form} >

          <label className="" >Email</label>
          <input className={styles.input} name="email" type="text" />

          <label className="" >Senha</label>
          <input className={styles.input} name="password" type="password" />

          <button className={styles.submitBtn} type="submit">Enviar</button>
        </form>

      </main>
    </>
  );
}
