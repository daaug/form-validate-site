import Head from "next/head";
import { withRouter } from "next/router";

function User(props) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        
        <p>Email: {props.router.query.email}</p>
        <p>Password: {props.router.query.password}</p>

      </main>
    </>
  );
}

export default withRouter(User)
