import {
  Navbar,
  Hero,
  Footer,
  Qualifications,
  Contact,
  About,
  Skills,
  Services,
  Portfolio,
} from "./components";

const App = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Qualifications />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
