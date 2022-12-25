//e --> enter
//o --> ober
//a --> ai
//u --> ufat


function encriptar() {
    var texto = document.getElementById("input-original").value.toLowerCase();
    
    //i es para que afecte mayusculas y minusculas
    //g toda linea u oracion
    //m es para que afecte a multiples lineas o parrafo
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    
    document.getElementById("resultado").innerHTML=txtcifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    
}

function desencriptar() {
    var texto = document.getElementById("input-original").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    
    document.getElementById("resultado").innerHTML=txtcifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    
}

function copy() {
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand('copy');
    alert("¡Se copió!");
}
