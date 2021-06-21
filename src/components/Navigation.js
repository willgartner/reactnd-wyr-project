import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import NavUser from "./NavUser"

export default function Navigation() {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/new">
              New Question
            </Nav.Link>
            <Nav.Link href="/leaderboard">
              Leaderboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end mr-2">
          <NavUser/>
        </Navbar.Collapse>
    </Navbar>
  );
}
