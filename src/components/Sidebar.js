import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'
import './Sidebar.css';
const Sidebar =() => {
  return (
    <Menu>
      <Link to="/home">
        <a className="menu-item" href="/">
            Home
        </a>
      </Link>
     <Link to="/about">
     <a className="menu-item" href="/">
        about
      </a>
     </Link>
      <Link to="/skills">
        <a className="menu-item" href="/">
            Skills
        </a>
      </Link>
     <Link to="/exprience">
     <a className="menu-item" href="/">
        Exprience
      </a>
     </Link>
    </Menu>
  );
};
export default Sidebar