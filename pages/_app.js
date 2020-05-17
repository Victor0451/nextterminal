import App from "next/app";
import "../css/styles.css";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default MyApp;
