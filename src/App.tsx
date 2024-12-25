import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Suggestion } from './pages/Suggestion';
import { CHDDetection } from './pages/CHDDetection';
import { SpamDetection } from './pages/SpamDetection';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/suggestion" element={<Suggestion />} />
            <Route path="/chd-detection" element={<CHDDetection />} />
            <Route path="/spam-detection" element={<SpamDetection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;