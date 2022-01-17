import './App.css';
import React, {useState, useEffect} from "react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ListaDeProductos from './components/ListaDeProductos/ListaDeProductos';

function App() {
  return (

    <>
      <NavBar />
      <ItemListContainer greeting = "Bienvenido a la página" />
      <ListaDeProductos />
    </>

  );
}

export default App;
