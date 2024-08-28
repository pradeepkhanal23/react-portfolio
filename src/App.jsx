import { Navbar, Footer } from "./components";

import {
  Hero,
  About,
  Skills,
  Services,
  Qualifications,
  Contact,
  Portfolio,
} from "./pages/index.js";

const App = () => {
  return (
    <div className="flex flex-col">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default App;
