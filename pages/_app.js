import "@/styles/globals.css";
import Navbar from "./../components/navbar";
import "../components/navbar.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
