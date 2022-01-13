import React from "react";
//import carrito from "../../imagenes/carrito.png"
//import "../../estilos/imagen.css";
import CartWidget from "./CartWidget";
import * as ReactBootstrap from "react-bootstrap";

export default function NavBar(){
    return(

        <>
                        <ReactBootstrap.Navbar bg="light" expand="lg">
                <ReactBootstrap.Container>
                    <ReactBootstrap.Navbar.Brand href="#home">PIRUME</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootstrap.Nav className="me-auto">
                        <ReactBootstrap.Nav.Link href="#home">HOME</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#link">NOSOTROS</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#link">PRODUCTOS</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#link">MI PERFIL</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#link"><CartWidget /></ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Container>
                </ReactBootstrap.Navbar>
        </>
    );

}

function ItemListContainer (){

}