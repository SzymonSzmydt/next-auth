import "@/styles/globals.css";
import Navbar from "./../components/navbar";
import "../components/navbar.css";
import { SessionProvider } from 'next/auth/react'
export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
