import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payments';
import '../App.css';


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {

      case null:
        return <div>Pending</div>

      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;

      default:
        return (
          <div>
        <li style={{marginRight: '20px'}}>Welcome user</li>
        <li><Payment /></li>
        <li><a href="/api/logout">Logout</a></li>
        </div>
        );
    }

  }


  render() {
    console.log(this.props);

    return (
      <nav>
        <div className="nav-wrapper">
          <Link 
          to={this.props.auth ? '/surveys': '/'} 
          className="left brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );

  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth

  };
}

export default connect(mapStateToProps)(Header);