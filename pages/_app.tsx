import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import Head from "next/head";
import React from "react";
import TransitionLayout from "../components/Transition";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/1a7135390e.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>
      <div className="bg-background">
        <TransitionLayout>
          <Component {...pageProps} />
        </TransitionLayout>
        {pathname !== "/" && <Navigation />}
      </div>
    </>
  );
}

export default MyApp;
