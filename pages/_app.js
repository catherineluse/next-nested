import "../styles/global.css";
import { getFolderNestedData } from "../lib/docs";
import NestedList from "../components/nestedList";

export async function getStaticProps() {
  const allDocsNestedData = await getFolderNestedData("docs");

  return {
    props: {
      allDocsNestedData,
    },
  };
}

export default function App({ Component, pageProps }) {
  console.log('nested data in app', pageProps.allDocsNestedData)
  const nestedData = pageProps.allDocsNestedData
  return (
    <>
      <nav className="navbar topnav">
        <span className="navbar-brand mb-0 h1">
          Software Documentation Theme
        </span>
      </nav>
      <div className="sidenav">
        <NestedList dirData={nestedData}></NestedList>
      </div>
      <Component {...pageProps} />
    </>
  );
}
