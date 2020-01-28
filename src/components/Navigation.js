import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1 className='mainHeader'>React Router Mini</h1>
        <section className="Nav">
        <div>
          <Link to="/" className="NavLink">
          Home
          </Link>
        </div>
        <div>
          <Link  to="/about" className="NavLink">About</Link>
        </div>
        <div>
          <Link  to="/contact" className="NavLink">Contact</Link>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Navigation;
