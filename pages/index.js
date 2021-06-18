import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import utilStyles from "../styles/utils.module.css";

import { getFolderNestedData } from "../lib/docs";

export async function getStaticProps() {
  const allDocsNestedData = await getFolderNestedData("docs");

  return {
    props: {
      allDocsNestedData,
    },
  };
}

export default function Home({
  allDocsNestedData,
}) {
  console.log('nested data in index ', allDocsNestedData)
  return (
    <>
      <div className="main">
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
            <h2>NextJS Nested demo</h2>
            <p>
              This is a sample website to demonstrate nested markdown structure
              rendered in next.js.
            </p>
          </section>
        </Layout>
      </div>
    </>
  );
}
