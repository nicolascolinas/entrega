const ItemDetail = ({Producto}) =>{
    return (
        <div className="contenedor-madre">
            <div>
                <img src={Producto.foto} alt="" className="w-50" />
            </div>
            <div className="descripcion">
                <h2>Nombre: {Producto.nombre}</h2>
                <h3>Descripcion: {Producto.descripcion}</h3>
            </div>
        </div>
    )
}
export default ItemDetail