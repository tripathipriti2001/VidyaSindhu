import React,{useState} from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import Cards from './Cards';
import Blog from './Blog';
import {Link} from 'react-router-dom'
import './static/HomePage.css';

function HomePage(){
//function HomePage({ selectedText, setSelectedText }) {
  const [selectedText, setSelectedText] = useState(null);
  return (
    <div className="home-page">
      <NavBar />
      <div className="side-cards">
        {/* Pass selectedText and setSelectedText as props to SideBar */}
        <SideBar handleTextSelection={setSelectedText} />
        <div className='container'>
          {/* Conditionally render the Blog component based on selectedText */}
          {selectedText ? <Blog selectedText={selectedText} /> : (
          // <Blog selectedText={selectedText} />
            <>
              <Cards className="card" />
              <Cards className="card" />
              <Cards className="card" />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
