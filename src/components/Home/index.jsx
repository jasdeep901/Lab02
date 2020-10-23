import React from 'react';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';

// You need to import your shared header...

const Home = () => {
  return (
    <>
      <Header title = "Hello Everyone Welcome to my Home Page!!!!"/>
       <button>
        <Link to="/About"
         style={{ backgroundColor: "#00FF00" }}>About</Link>
       </button>
    </>
  );
}
 
export default Home;