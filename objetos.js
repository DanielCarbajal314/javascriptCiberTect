function Auto (){
    this.Modelo = "";
    this.Color = "";
    this.Encender = function(){
        console.log("Este auto "+
                    this.Modelo +
                    " de color "+
                    this.Color  + 
                    " ha encendido");
    }
    return this;
}

var miAuto = new Auto();
miAuto.Color = "azul";
miAuto.Modelo = "Spark GT";



var miAutoDinamico = {
    Color:"Rojo",
    Modelo : "Veloster"
}

var JSON_ComoCadena = JSON.stringify(miAutoDinamico);
var autoParseadoDesdeUnaCadena = JSON.parse(JSON_ComoCadena);
console.log(autoParseadoDesdeUnaCadena["Color"]);