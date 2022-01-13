import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (

    <>
      <NavBar />
      <ItemListContainer greeting = "Bienvenido a la página" />
    </>

  );
}

export default App;
