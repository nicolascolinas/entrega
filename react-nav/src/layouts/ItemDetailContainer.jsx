import { useEffect, useState } from "react"
import { getFetchOne } from "../Helpers/getFetch"
import ItemDetail from "../layouts/ItemDetail"


const ItemDetailContainer = () => {
    const [Producto, setProducto] = useState({})
    useEffect(() => {
        getFetchOne()
            .then((resp) => setProducto(resp))
            .catch(err => console.log(err))
    }, [])
    
return <ItemDetail Producto={Producto} />
}

export default ItemDetailContainer