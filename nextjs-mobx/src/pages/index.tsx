import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { NextPage } from "next";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Counter from "../components/Molecules/Counter";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let start = 0;

  if (ctx.query.start && typeof ctx.query.start == "string") {
    start = Number(ctx.query.start);
  }

  return {
    props: {
      hydrationData: {
        start,
      },
    },
  };
};

export default function Index({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <div>
      <Head>
        <title>Next.js Head {CMS_NAME}</title>
      </Head>

      <main>
        <Counter />
      </main>

      <footer></footer>
    </div>
  );
}
