import type { NextPage } from "next";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js Head {CMS_NAME}</title>
      </Head>

      <main></main>

      <footer></footer>
    </div>
  );
};

export default Home;
