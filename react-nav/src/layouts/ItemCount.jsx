import { useState } from "react"
function ItemCount({stock, initial}){
    const [ count, setCount  ] = useState((initial= 0))

    function agregar() {
        setCount(count + 1)
        if (count > (9)) {
            alert("alcanzaste el maximo de productos")
        }
    }
    function restar() {
        
        setCount(count - 1)
        if (count <= (0)) {
        alert('no podes comprar menos')
                  
        }
    }
    return (
        <div>
            <h2>la cantidad es = {count} </h2>
            <button onClick={agregar}>SUMAR</button>
            <button onClick={restar} id='botond'>RESTAR</button>
            <button onClick={()=> console.log(count)}>Agregar</button>
        </div>
    )
}

export default ItemCount