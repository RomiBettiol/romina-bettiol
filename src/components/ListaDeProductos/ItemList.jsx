import react, {useState} from "react";
import Item from "./Item";
import "./ItemList.css";

export default function ItemList(){

    const [arrayDeProductos, setArrayDeProductos] = useState([{nombre: 'Remera velia', codigo: 'Código - #02563', stock: 0, precio: '$985,29'},
                                                              {nombre: 'Pantalon campi', codigo: 'Código - #75662', stock: 1, precio: '$1235,99'},
                                                              {nombre: 'Buzo tokio', codigo: 'Código - #98752', stock: 10, precio: '$895,00'},
                                                              {nombre: 'Vesitdo carmela', codigo: 'Código - #15896', stock: 15, precio: '$758,00'},]); 
    return(
        <>
            <section className="seccionProductos">
                {
                    arrayDeProductos.map(item => <Item item={item}/>)
                }
            </section>
        </>
    )
}


