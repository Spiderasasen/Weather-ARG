import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import FAQ from "./pages/FAQ.jsx";
import About from "./pages/About.jsx";
import Join from "./pages/Join.jsx";
import ARG_Home from "./pages/ARG_pages/ARG_Home.jsx";

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/ARG" element={<ARG_Home />} />
        </Routes>
      </Router>
  )
}
export default App