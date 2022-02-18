import Head from "next/head";

import "../styles/globals.css";
import "react-calendar/dist/Calendar.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
