import react, {useState} from "react";

export default function MasMenos({tope}){

    const [cantidad, setCantidad]  = useState(0);

    function sumar(){
        
        if(cantidad < tope ) setCantidad(cantidad + 1);
    }

    function restar(){
        
        if(cantidad > 0) setCantidad(cantidad - 1)
    }

    return(
        <>
        <br />
            <div className="cantidadDiv">
                <span><button onClick={()=>restar()} className="signo">-</button></span>
                <p className="cant">{cantidad}</p>
                <span><button onClick={()=>sumar()} className="signo">+</button></span>
            </div>   
        <br />
        <br />
        </>
    )

}

