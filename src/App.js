import './App.css';
import React, {useState, useEffect} from "react";
import NavBar from './components/NavBar/NavBar';
import ParteInicial from './components/ParteInicial/ParteInicial';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (

    <>
      <NavBar />
      <ParteInicial greeting = "Bienvenido a la página" />
      <ItemListContainer />
    </>

  );
}

export default App;
