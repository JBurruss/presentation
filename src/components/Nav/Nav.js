<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    console.log("hi");
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <header>Mr Maille</header>
        <Link to="/checkout" className="active">Checkout</Link>        
      </div>
    );
  }
}

=======
import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    console.log("hi");
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <header>Mr Maille</header>
        <Link to="/checkout" className="active">Checkout</Link>        
      </div>
    );
  }
}

>>>>>>> cd4669b8141510027fe01c1b67ce1f368804ba21
export default Nav;