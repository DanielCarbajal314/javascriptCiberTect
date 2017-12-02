var arreglo = [1,2,3,4,5,6,7,8,9];

var duplicado = arreglo.map(function(valor){
    return valor * 2;
});


var arregloFiltrado = arreglo.filter(function(valor){
    return valor>5;
})

arregloFiltrado.forEach(function(valor,index){
    console.log(index+") "+valor);
})

console.log("=======");

duplicado.forEach(function(valor,index){
    console.log(index+") "+valor);
})
