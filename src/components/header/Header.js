import React from "react";
import "../../App.css";
import "./Header.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default function Header() {
  return (
    <div className="wrapper">
      <Navbar collapseOnSelect className="nav nav-color" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            // className="justify-content-md-center"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDUiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAxMDUgMjYiPgogICAgPGcgZmlsbD0iIzIxOTZGMyIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMzMuNjMyIDUuMTc2aDQuMzkydjYuODY0aDYuNzkyVjUuMTc2aDQuMzkyVjIyaC00LjM5MnYtNi40NTZoLTYuNzkyVjIyaC00LjM5MlY1LjE3NnptMjMuMjg0IDBoNC4zOTJWMjJoLTQuMzkyVjUuMTc2em0xMC40MiAwaDQuNzI5bDQuMiAxMi4xNjggNC4yMjQtMTIuMTY4SDg1TDc4LjQyNSAyMmgtNC41Nkw2Ny4zMzcgNS4xNzZ6bTIzLjY5MyAwaDEzLjI3MlY4LjY4aC04Ljg4djMuMTQ0aDguMDE2djMuNDhsLTguMDE2LjAyNHYzLjE2OGg5LjEyVjIySDkxLjAzVjUuMTc2eiIvPgogICAgICAgIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjI2IiB4PSI5IiByeD0iMyIvPgogICAgICAgIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB5PSI1IiByeD0iMyIvPgogICAgICAgIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB4PSIxOCIgeT0iNSIgcng9IjMiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
            alt="Hive"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="flex-col-jc-ai-center"
        >
          <Nav className="link-div flex-col-jc-ai-center">
            <Nav.Link href="#home" className="link">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="link">
              Products
            </Nav.Link>
            <Nav.Link href="#link" className="link">
              Company
            </Nav.Link>
            <Nav.Link href="#link" className="demo">
              <button className="demo-btn">
                <span className="demo-btn-text">Model Demos</span>
                <span className="demo-btn-span"></span>
              </button>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="signup flex-col-jc-ai-center">
              SIGN UP
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="login">
              <button className="login-btn">
                <span className="login-btn-text">LOG IN</span>
                <span className="login-btn-span"></span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
