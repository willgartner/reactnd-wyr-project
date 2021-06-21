import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import NavUser from "./NavUser";

export default function Navigation() {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/add" className="nav-link">
            New Question
          </Link>
          <Link to="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end mr-2">
        <NavUser />
      </Navbar.Collapse>
    </Navbar>
  );
}
