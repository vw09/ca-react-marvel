// src/pages/_app.js
import "@/styles/globals.css";
import BottomNav from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div style={{ paddingBottom: '56px' }}> {/* Zorg voor ruimte onderaan voor de navigatie */}
        <Component {...pageProps} />
      </div>
      <BottomNav />
    </>
  );
}