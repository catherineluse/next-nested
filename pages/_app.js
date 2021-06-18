import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <nav className="navbar topnav">
        <span className="navbar-brand mb-0 h1">
          Software Documentation Theme
        </span>
      </nav>
      {/* <div className="sidenav">
        <NestedList dirData={nestedData}></NestedList>
      </div> */}
      <Component {...pageProps} />
    </>
  );
}

export default App