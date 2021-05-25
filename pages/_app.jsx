import "../styles/globals.css";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} className="content" />
      <Footer />
    </>
  );
}

export default MyApp;
