import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Index from "./pages/Index";
import Title from "./pages/Title";
import Contact from "./pages/Contact";
import Upplaga20 from "./pages/Upplaga20";
import Upplaga21 from "./pages/Upplaga21";
import Upplaga22 from "./pages/Upplaga22";
import Account from "./pages/Account";
import Loans from "./pages/Loans";
import Saved from "./pages/Saved";


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/title" element={<Title />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/title/edition20" element={<Upplaga20 />} />
        <Route path="/title/edition21" element={<Upplaga21 />} />
        <Route path="/title/edition22" element={<Upplaga22 />} />

        <Route path="/account" element={<Account />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/Saved" element={<Saved />} />

      </Routes>
    </Router>

  )
}

export default App
