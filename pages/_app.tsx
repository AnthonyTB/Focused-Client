import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import Head from "next/head";
import React from "react";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
