import React from "react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Trips from "./sections/Trips";
import Trips2 from "./sections/Trips2";
function Layout() {
  return (
    <main className="font-sans">
      <header>
        <Header />
      </header>
        <section>
            <Trips />
            <Trips2 />
        </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
