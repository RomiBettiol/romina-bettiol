import react, {useState} from "react";
import Item from "./Item";

export default function MasMenos({tope}){

    const [cantidad, setCantidad]  = useState(0);

    function sumar(){
        
        if(cantidad < tope ) setCantidad(cantidad + 1);
    }

    function restar(){
        
        if(cantidad > 0) setCantidad(cantidad - 1)
    }
    
    function onAdd(){
        if(Item.stock > 0) setCantidad(cantidad + 1)
    }

    return(
        <>
            <button className="carrito" onClick={() => onAdd()}>AGREGAR AL CARRITO</button>
            <div className="cantidadDiv">
                <span><button onClick={()=>restar()} className="signo">-</button></span>
                <p className="cant">{cantidad}</p>
                <span><button onClick={()=>sumar()} className="signo">+</button></span>
            </div>   
        </>
    )

}

