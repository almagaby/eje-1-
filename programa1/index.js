const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("btn-saludo");

const eventoSaludar = ()=>{
    let textoMensaje = "Hola desde Js con Dom";
    mensaje.innerText = textoMensaje;
}

boton.addEventListener("click", eventoSaludar);