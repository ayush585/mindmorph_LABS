import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SongPlayer from './components/home/SongPlayer';
import About from './components/about/About';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<SongPlayer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
