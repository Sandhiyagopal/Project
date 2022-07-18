import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ETApp from "./Comp/ETApp";

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/et" element={<ETApp />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
