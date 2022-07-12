import Head from "next/head";

type Props = {
  title: string;
  keywordContents: string;
};
export default function HeadInfo({ title, keywordContents }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={"keyword"} content={keywordContents} />
    </Head>
  );
}
