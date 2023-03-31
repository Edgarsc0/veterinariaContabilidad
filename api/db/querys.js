const myQuerys={
    getProductos:"SELECT * FROM MProducto;",
    getProductoById:`SELECT * FROM MProducto WHERE idMProducto =?`,
    putProducto:"INSERT INTO MProducto() values(?,?,",
    getCategorias:"SELECT * FROM CCategoriaProducto;",
}

export default myQuerys;