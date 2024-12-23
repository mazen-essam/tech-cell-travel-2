import React from "react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Trips from "./sections/Trips";
function Layout() {
  return (
    <main className="font-sans">
      <header>
        <Header />
      </header>
        <section>
            <Trips />
        </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
