import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import React from "react";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) {
  return (
    <div className="bg-background">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
