var arreglo;

setTimeout(function(){
    arreglo = [1,2,3,4,5,6,7,8,9];
},1000)


setTimeout(function(){
    arreglo.forEach(function(valor,index){
        console.log(index+") "+valor);
    })
},2000)
