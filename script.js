// Selecciona la tabla por su ID
const tabla = document.getElementById("tablero");

// Agrega un evento 'click' a cada celda de la tabla
tabla.addEventListener("click", function(event) {
    // Verifica si el elemento clicado es una celda (td)
    if (event.target.tagName === "TD") {
        // Encuentra el índice de la fila y columna
        const fila = event.target.parentNode.rowIndex;
        const columna = event.target.cellIndex;

        // Muestra la posición de la celda en la consola
        console.log(`Clic en la fila: ${fila + 1}, columna: ${columna + 1}`);
    }
});
