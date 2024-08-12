function preDefault(){
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("img-encriptado");
}





function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("img-encriptado");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "Genial !!";
    imagen.src = "img/encriptado.gif";
  } else {
    imagen.src = "img/oupus.png";
    document.getElementById("texto");
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
    swal({
      title: "Debes ingresar un texto",
      icon: "warning",
      button: "Aceptar"
    });

  }
}
/*
function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("desencriptar.png");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    imagen.src = "img/oupus.png";
  } else {
    imagen.src = ".img/desencriptar.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}
/* Boton de Copiar El contenido del Text Area Encriptar*/

document.addEventListener("DOMContentLoaded", function() {
  const copiarBtn = document.getElementById('copyBtn');
  const textoArea = document.getElementById('texto');
  

  function actualizarEstadoBoton() {
      if (textoArea.value.trim() === '') {
          copiarBtn.disabled = true;
         } else {
          copiarBtn.disabled = false;
                }
  }

  textoArea.addEventListener('input', actualizarEstadoBoton);

  copiarBtn.addEventListener('click', function() {
      if (textoArea.value.trim() === '') {
        
      } else {
          textoArea.select();
          document.execCommand('copy');
          alert("Texto copiado al portapapeles!");
      }
  });

  // Inicializa el estado del botón
  actualizarEstadoBoton();
});

/*Boton Limpiar = contenido del TextArea Encriptar*/

document.addEventListener("DOMContentLoaded", function () {
  const limpiarBtn = document.getElementById('limpiarBtn');
  const textoArea = document.getElementById('texto');
    limpiarBtn.addEventListener('click', function () {
    textoArea.value = '';
    
  });
  preDefault();
});