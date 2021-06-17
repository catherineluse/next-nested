import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import utilStyles from "../styles/utils.module.css";

import { getFolderNestedData, getSortedFlatData } from "../lib/docs";
import Link from "next/link";
import Date from "../components/date";
import NestedList from "../components/nestedList";



export default function Home() {
  return (
        <Layout home>
          content
        </Layout>
  );
}
