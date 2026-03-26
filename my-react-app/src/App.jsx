import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <BrowserRouter basename="/react-ghp2"> {/*repo name*/}
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Hello World</h1>
            <Link to="/problem"><button>Go to Problem</button></Link>
          </div>
        } />
        <Route path="/problem" element={<h1>Hello World (problematic)</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
