import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
