import Navbar from "./Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./Comp/Home";
import About from "./Comp/About";
import Contact from "./Comp/Contact";
import Resume from "./Comp/Resume";
import Testimonial from "./Comp/Testimonial";
import Fooder from "./Navbar/Fooder";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/testimonial" element={<Testimonial />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Fooder />
      </Router>
    </div>
  );
}

export default App;
