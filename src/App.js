import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//Testing

// Router tells our app we have multiple routes
// Routes tells it that we only want one route at a time.
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes> 
          <Route path="/" exact element={<Home />} />
      </Routes> 
      <Footer />
    </Router>
    </div>
  );
}

export default App;
