import React, { Component } from 'react';
import '../App.css';


class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">Sokratis Logo</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/auth/google">Login with Google</a></li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;