import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation () {
  return (
    <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
            <Nav.Link className="mx-3" href="/">Home</Nav.Link>
            <Nav.Link className="mx-3" href="/new">New Question</Nav.Link>
            <Nav.Link className="mx-3" href="/leaderboard">Leaderboard</Nav.Link>
        </Nav>
    </Navbar>
  )
}