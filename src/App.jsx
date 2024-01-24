
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Enquiry from "./Enquiry";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Router>
  )
}

export default App
