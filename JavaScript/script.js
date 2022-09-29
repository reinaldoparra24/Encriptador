function encriptar() {
    let newText = input.value.replace(/a|e|i|o|u/g,function(ocorrencia){
            return encripta[ocorrencia];
        });
    output.value = newText;
    swal("Texto encriptado","","success");
}

function desencriptar() {
    let newText = input.value.replace(/ai|enter|imes|ober|ufat/g,function(ocorrencia){
            return desencripta[ocorrencia];
        });
    output.value = newText;
    swal("Texto desencriptado","","success");
}

function copiar() {
    input.select();
    navigator.clipboard.writeText(output.value);
    swal("Texto copiado","","success");
    
}

function pegar() {
    let newText = input.value.replace(/a|e|i|o|u/g,function(ocorrencia){
        return encripta[ocorrencia];
    });
    input.value = newText;
    swal("Texto pegado","","success");
}

function limpiar() {
    input.value = "";
    output.value = "";
}

let input = document.getElementById("input");
let output = document.getElementById("output");
let botonencriptar = document.getElementById("encriptador");
let botondesencriptar = document.getElementById("desencriptador");
let botonCopiar = document.getElementById("copiar");
let botonPegar = document.getElementById("pegar");
let showText = document.getElementById("ptext");
let encripta = {a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"};
let desencripta = {ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u"};
let aviso = document.getElementById("aviso");
let botonLimpiar = document.getElementById("limpiar");
botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
botonPegar.onclick = pegar;
botonLimpiar.onclick = limpiar;

input.addEventListener('beforeinput', function(event) {
    if(/[^a-z\s.,?!;]/.test(event.data)) {
        event.preventDefault();
        aviso.style.color = "red";
        aviso.style.fontWeight = "bold";
        aviso.scrollIntoView(true);
    } else {
        aviso.style.color = "rgb(87, 87, 87)";
        aviso.style.fontWeight = "normal";
    }
});

document.addEventListener("keydown", function(e) {
    if(e.key == "Enter") {
        e.preventDefault();
    }
});