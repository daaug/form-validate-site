import Head from "next/head";
import { withRouter } from "next/router";
import styles from "@/styles/User.module.css";

function User(props) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        
        <div className={styles.groupData}>
          <p className={styles.userData}>Email: </p>
          <p className={styles.userData}>{props.router.query.email}</p>
        </div>

        <div className={styles.groupData}>
          <p className={styles.userData}>Password: </p>
          <p className={styles.userData}>{props.router.query.password}</p>
        </div>

      </main>
    </>
  );
}

export default withRouter(User)
