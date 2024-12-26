import React from "react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Trips from "./sections/Trips";
import Trips2 from "./sections/Trips2";
import Price from "./sections/Price";
function Layout() {
  return (
    <main className="font-sans">
      <header>
        <Header />
      </header>
        <section>
            <Trips />
            <Trips2 />
            <Price />
        </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
