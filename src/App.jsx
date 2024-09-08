import { Navbar, Footer } from "./components";

import {
  Hero,
  About,
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
      <main className="flex-grow mt-16">
        <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center">
          <Hero />
        </div>
        <div className="bg-white py-5 ">
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
