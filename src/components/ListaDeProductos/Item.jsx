import React from "react";
import MasMenos from "./MasMenos";
import "./Item.css";

export default function Item ({item}){
    
    return(
        <>
            <div className="contenedorProductos">
                <p className="parrafoPrincipal">{item.nombre}</p>
                <p className="parrafoProducto">{item.codigo}</p>
                <p className="parrafoProducto">{item.stock}</p> 
                <p className="parrafoPrecio">{item.precio}</p>
                <div className="contador">
                    <MasMenos tope={item.stock} />
                </div>
            </div>
        </>
    )
}
