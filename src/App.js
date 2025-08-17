import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
