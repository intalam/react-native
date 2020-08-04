import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './home.style.css'

const Home = (props) => {

  return (
    <div className="container">
      <div className="item-container">
        <Link to="/user-list">
          <div className="item">
            User List
        </div>
        </Link>
      </div>

      <div className="item-container">
        <Link to="/user-list-render-prop">
          <div className="item">
            User List - using RenderProps
        </div>
        </Link>
      </div>

    </div>
  )
};

export default Home;