import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <div className=' relative left-40'>
        <ul>
            <div>
            <li className="float-left p-4 text-lg font-semibold hover:text-red-700 hover:underline">
                <Link to="/">HOME</Link>
            </li>
            <li className="float-left p-4 text-lg font-semibold hover:text-red-700 hover:underline">
                <Link to="/about">ABOUT</Link>
            </li>
            <li className=" p-4 text-lg font-semibold hover:text-red-700 hover:underline">
                <Link to="/articles">ARTICLES</Link>
            </li>
            </div>
        </ul>
        </div>
    </nav>
  );
}

export default NavBar;