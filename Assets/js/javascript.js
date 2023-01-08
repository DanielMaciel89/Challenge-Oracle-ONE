function criptografia() {
  var textoCodificado = document.getElementsByName("ler")[0].value;
  var codificado;

  for (let i = 0; i < textoCodificado.length; i++) {
    if (codificado == undefined) {
      codificado = "";
    }
    if (textoCodificado[i] == "e") {
      codificado += "enter";
    }
    if (textoCodificado[i] == "i") {
      codificado += "imes";
    }
    if (textoCodificado[i] == "a") {
      codificado += "ai";
    }
    if (textoCodificado[i] == "o") {
      codificado += "ober";
    }
    if (textoCodificado[i] == "u") {
      codificado += "ufat";
    }
    if (
      textoCodificado[i] !== "e" &&
      textoCodificado[i] !== "i" &&
      textoCodificado[i] !== "a" &&
      textoCodificado[i] !== "o" &&
      textoCodificado[i] !== "u"
    ) {
      codificado += textoCodificado[i];
    }
  }
  console.log(codificado);
  document.getElementsByClassName("txtdigitado")[0].innerHTML =
    "" + codificado + "";
  oculta();
  btncopiar();
}
function descriptografia() {
  var descodificado = document.getElementsByName("ler")[0].value;

  var i = 0;
  while (descodificado.length > i) {
    if (descodificado.includes("ai")) {
      descodificado = descodificado.replace("ai", "a");
    }
    if (descodificado.includes("ober")) {
      descodificado = descodificado.replace("ober", "o");
    }
    if (descodificado.includes("imes")) {
      descodificado = descodificado.replace("imes", "i");
    }
    if (descodificado.includes("ufat")) {
      descodificado = descodificado.replace("ufat", "u");
    }
    if (descodificado.includes("enter")) {
      descodificado = descodificado.replace("enter", "e");
    }
    i++;
  }
  document.getElementsByClassName("txtdigitado")[0].innerHTML =
    "" + descodificado + "";
  oculta();
  btncopiar();
}
function oculta() {
  var obj = (document.getElementById("imglupa").style.display = "none");
  var objs = (document.getElementById("teste").className =
    "txtdigitado                                                     txtdigitados");
  var p = (document.getElementById("p").style.display = "none");
}
function btncopiar() {
  var btncopiar = (document.getElementById("copiar").style.display = "initial");
}

function copiar() {
  var copia = document.querySelector(".btncopiar");
  var texto = document.getElementsByClassName("txtdigitado")[0].textContent;
  navigator.clipboard.writeText(texto).then(() => {});
}
