import react, { useState, useEffect } from "react";
import ItemList from "../ListaDeProductos/ItemList";
import "./TesPromesa.css";

export default function TestPromesas() {
    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
    const [arrayDeProductos, setArrayDeProductos] = useState([]);

    const productosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('server caido');
            resolve();
        }, 2000)
    });

    useEffect(() => {
        productosEnStock
            .then(res => {
                setLlegoLaPromesa(true);
                setArrayDeProductos(res);

            })
            .catch(err => {
                console.log(err);
            });
    })
    return (
        <>
            {(llegoLaPromesa) ?
                <>
                    <ItemList />
                </>
                :
                <>
                    <div className="promesa">
                        <h3> ACTUALIZANDO INFORMACION</h3>
                    </div>
                </>
            }
        </>
    )
}
