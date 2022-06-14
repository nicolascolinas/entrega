let productos = [
    {
        id: '1',
        nombre: 'Cafe Venezuela',
        descripcion: 'Granos de cacao',
        stock: '5',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'
    },
    {
        id: '2',
        nombre: 'Cafe Colombia',
        descripcion: 'Granos de cacao',
        stock: '5',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'
    },
    {
        id: '3',
        nombre: 'Cafe Portuges',
        descripcion: 'Granos de cacao',
        stock: '5',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'

    },
    {
        id: '4',
        nombre: 'Cafe Camerún ',
        descripcion: 'Granos de cacao',
        stock: '5',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'

    },
];

export const getFetch = () => {
    //acciones
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver(productos)
        }, 3000)
        //reject('no tengo nada para')

    })
}

//consulta de un producto
let Producto = { id: '1', nombre: 'Cafe Venezuela', descripcion: 'Granos de cacao', stock: '5', foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'}
export const getFetchOne = () => {
    //acciones
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver(Producto)
        }, 3000)
    })
}