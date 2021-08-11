import { SWRConfig } from "swr";

import "../styles/globals.css";
import Header from "../components/organisms/Header/Header";
import Footer from "../components/organisms/Footer/Footer";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    console.log("RES", res);
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <SWRConfig value={{ fetcher, errorRetryCount: 1 }}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </SWRConfig>

      <Footer />
    </>
  );
}

export default MyApp;
