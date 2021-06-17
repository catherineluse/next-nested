import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="navbar topnav">
        <span className="navbar-brand mb-0 h1">
          Software Documentation Theme
        </span>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
