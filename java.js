function asignarTexto(elemento,texto){
  let elementoHTML = document.querySelector(elemento); 
  elementoHTML.innerHTML = texto;
}

function encriptar() { 
  let textarea = document.getElementById('valorIngreso'); 
  let text = textarea.value.trim();  
  let lowercaseRegex = /^[a-z\s]+$/;

 
  if (text === "") {
      alert('¡Ooops! Debes ingresar un texto');
  } else if (!lowercaseRegex.test(text)) {
      alert("El campo solo debe contener letras minúsculas y espacios.");
  } else {     
      let textoUsuario = document.getElementById('valorIngreso').value;     
      let textoCifrado = textoUsuario
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");      
      asignarTexto('#valorRespuesta', textoCifrado);     
      document.getElementById("valorRespuesta").style.height = "80%";
      document.getElementById("valorRespuesta").style.margin = "0%";
      document.getElementById("valorImagen").style.display = "none";
  }
}

function desencriptar() {  
  let textarea = document.getElementById('valorIngreso'); 
  let text = textarea.value.trim();         
  let lowercaseRegex = /^[a-z\s]+$/;

 
  if (text === "") {
      alert('¡Ooops! Debes ingresar un texto');
  } else if (!lowercaseRegex.test(text)) {
      alert("El campo solo debe contener letras minúsculas y espacios.");
  } else {      
      let textoUsuario = document.getElementById('valorIngreso').value;     
      let textoCifrado = textoUsuario
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");         
      asignarTexto('#valorRespuesta', textoCifrado); 
      document.getElementById("valorRespuesta").style.height = "80%";
      document.getElementById("valorRespuesta").style.margin = "0%";
      document.getElementById("valorImagen").style.display = "none";
  }
}

function copiarTexto() { 
  let botonTexto = document.getElementById("valorRespuesta");  
  botonTexto.select();
  botonTexto.setSelectionRange(0,999999);
  navigator.clipboard.writeText(botonTexto.value);
}


