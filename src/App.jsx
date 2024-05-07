import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Beds from './Components/Beds/Beds';
import Sofa from './Components/Sofas/Sofa';
import Chairs from './Components/Chairs/Chairs';

function App() {
  return (
    <Router>
      <div>
      {/* <ReactWhatsapp number="+92 3115386005" message="Hello World!!!" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="beds-detail" element={<Beds />} />
          <Route path="sofa-detail" element={<Sofa />} />
          <Route path="chairs-detail" element={<Chairs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
