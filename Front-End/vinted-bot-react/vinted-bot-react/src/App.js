import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './composant/Home';

import About from './composant/About';
import Contact from './composant/Contact';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
