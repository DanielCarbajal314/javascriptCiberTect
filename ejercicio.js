var descuentos = [
    {
        idProducto : 1,
        descuento : 0.1
    },
    {
        idProducto : 2,
        descuento : 0.5
    }
]

var compras = [
    {
        idProducto:1,
        cantidad: 10,
        precio: 1
    },
    {
        idProducto:2,
        cantidad: 10,
        precio: 10

    }
]

var total=0;

var subTotales = compras.map(function(compra){
    var descuento = encontrarDescuento(compra);
    return descuento * compra.precio * compra.cantidad;
})

console.log(subTotales);

subTotales.forEach(function(valor){
    total = total+ valor;

})

function encontrarDescuento(compra){
    var objetoDescuento = descuentos.find(function(descuento){
        return descuento.idProducto === compra.idProducto;
    });
    return objetoDescuento.descuento;
}

console.log(total);