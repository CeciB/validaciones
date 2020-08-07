let formulario = document.querySelector("#registro");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
    
  let campos = formulario.querySelectorAll("input:not([type=submit])");
  let errores = formulario.querySelectorAll(".mensajeError");
  
  for (let error of errores) {
    formulario.removeChild(error);
  }
  
  for (let campo of campos) {
    let mensaje = document.createElement("p");
    mensaje.classList.add("mensajeError");
    
    if (campo.value == "") {
      mensaje.innerHTML = "Campo vacío.";
      return campo.after(mensaje);
    }

    if (campo.type == "tel") {
      let telefono = parseInt(campo.value);

      if (isNaN(telefono)){
        mensaje.innerHTML += " Esto no es un número de teléfono";
        return campo.after(mensaje);
      }

      if (campo.value.length <= 11 || campo.value.length >= 13){
        mensaje.innerHTML += " Esto no es un número de teléfono válido";
        return campo.after(mensaje);
      }
    }

  }
    
});