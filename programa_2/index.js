document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("calculadora");

    formulario.addEventListener("submit", (evt) => {
        evt.preventDefault();

        // Obtener los valores de los inputs
        const numero1 = parseFloat(document.getElementsByName("numero1")[0].value);
        const numero2 = parseFloat(document.getElementsByName("numero2")[0].value);

        // Validar que los valores sean números válidos
        if (isNaN(numero1) || isNaN(numero2)) {
            Swal.fire("Por favor, ingresa números válidos en ambos campos.");
            return;
        }

        // Resultado de la suma
        const resultado = numero1 + numero2;

        // Resultado en un alert
        alert(`El resultado de la suma es: ${resultado}`);

        // Limpiar los inputs
        formulario.reset();
    });
});