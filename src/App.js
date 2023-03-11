import React, { useEffect, useState } from "react";

// Nhúng thư viện của bạn vào dự án
import "./fontawesome";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import ButotnGotoTop from "./components/ButotnGotoTop";

function App() {
  const [showButtonGotoTop, setShowButtonGotoTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setShowButtonGotoTop(window.scrollY > 200);
    });
  }, [showButtonGotoTop]);
  return (
    <div className="App">
      <Header />
      <Banner />
      <Footer />
      {showButtonGotoTop && <ButotnGotoTop />}
    </div>
  );
}

export default App;
