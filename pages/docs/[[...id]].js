import path from "path";
import { getPathList, getPostData } from "../../lib/docs";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Layout, { siteTitle } from "../../components/layout";
import { getFolderNestedData } from "../../lib/docs";
import Link from "next/link";
import Date from "../../components/date";
import NestedList from "../../components/nestedList";
import MarkdownText from '../../components/markdownText';

// File path for docs root
const DOCS_ROOT = path.join(process.cwd(), "/docs");

export default function Docs({ postData, allDocsNestedData }) {
  // const content = hydrate(source, { components });
  console.log('post data is ', postData)

  return (
    <>
      <div className="sidenav">
        <NestedList dirData={allDocsNestedData}></NestedList>
      </div>
      <div className="main">
        <div className="container">
        <Layout>
          {/* Add this <Head> tag */}
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            {postData.date && (
              <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
              </div>
            )}
            <MarkdownText text={postData.text}/>
          </article>
        </Layout>
        </div>
      </div>
    </>
  );
}

// Define a cache that will map the slug to the actual path.
// This is used to work around the index.mdx issue that I'm having
const pageFileCache = {};

export const getStaticProps = async ({ params }) => {
  // Retrieve full path from a cache. Generate cache if it doesnt exist.
  // id is undefined at index '/', set slugpath as '' instead
  let slugPath;
  if (params.id) {
    slugPath = params.id.join("/");
  } else {
    slugPath = "";
  }
  if (!pageFileCache[slugPath]) {
    await getStaticPaths({});
  }
  const markdownFile = pageFileCache[slugPath];

  // Get postdata for the slug and markdown file
  const postData = await getPostData(slugPath, markdownFile);

  const allDocsNestedData = await getFolderNestedData("docs");

  return {
    props: {
      postData,
      allDocsNestedData,
    },
  };
};

// Get static paths being a wrapper around the getPathList
export const getStaticPaths = async () => {
  let paths = await getPathList(DOCS_ROOT, DOCS_ROOT, pageFileCache);

  return {
    paths,
    fallback: false,
  };
};
