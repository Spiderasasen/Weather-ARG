import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import FAQ from "./pages/FAQ.jsx";
import About from "./pages/About.jsx";
import Join from "./pages/Join.jsx";
import ARG_Home from "./pages/ARG_pages/ARG_Home.jsx";
import Entities from "./pages/ARG_pages/Entities.jsx";
import Questioning_locals from "./pages/ARG_pages/Questioning_locals.jsx";
import Email from "./pages/ARG_pages/Email.jsx";

function App() {
  return(
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/ARG" element={<ARG_Home />} />
            <Route path="/ARG/entities" element={<Entities />} />
            <Route path="/ARG/questioning_locals" element={<Questioning_locals />} />
            <Route path="/ARG/email" element={<Email />} />
        </Routes>
      </Router>
  )
}
export default App