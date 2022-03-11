import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";

import "./CustomNavbar.css";
import WatchLogo from "./logo.svg";
import SearchIcon from "./search.svg";

export default class CustomNavbar extends React.Component {
    render() {
        return(
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/"><img src={WatchLogo} alt='Watch TV+' className="main-logo"/></Navbar.Brand>
                    <Nav.Link href='/search'><img src={SearchIcon} alt="Search"/></Nav.Link>
                </Container>
            </Navbar>
        );
    }
}