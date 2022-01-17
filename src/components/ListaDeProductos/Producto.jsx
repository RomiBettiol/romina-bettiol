import React from "react";
import MasMenos from "./MasMenos";
import "./Producto.css";

export default function Producto ({item}){

    function onAdd(){
        //alert(item.nombre + ' ' + item.stock);

        
    }

    return(
        <>
            <div className="contenedorProductos">
                <p className="parrafoPrincipal">{item.nombre}</p>
                <p className="parrafoProducto">{item.codigo}</p>
                <p className="parrafoProducto">{item.stock}</p> 
                <p className="parrafoPrecio">{item.precio}</p>
                <button className="carrito" onClick={()=>onAdd()}>AGREGAR AL CARRITO</button>
                <div className="contador">
                    <MasMenos tope={item.stock} />
                </div>
            </div>
        </>
    )
}
