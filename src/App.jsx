import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div className="app-wrapper selection:bg-accent-primary/30">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto/:id" element={<Project />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
