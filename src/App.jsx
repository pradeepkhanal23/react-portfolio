import { Navbar, Footer, TechStack } from "./components";

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
      <main className="w-full min-h-screen">
        <div className="min-h-screen w-full flex flex-col justify-center md:justify-start">
          <Hero />
          <TechStack />
        </div>
        <div className="bg-white py-5 min-h-screen">
          <About />
        </div>
        <div className="py-5">
          <Qualifications />
        </div>
        <div className="bg-white py-5">
          <Portfolio />
        </div>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default App;
