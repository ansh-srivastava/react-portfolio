import { useEffect } from "react"; //4.1k (gzipped:1.8k)
import Aos from "aos";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();

    const fetchFake = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-4b4c.onrender.com/fake",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.text);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFake();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
