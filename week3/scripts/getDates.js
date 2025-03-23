// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", function () {
  
    // Insertar el año actual en el footer
    const currentYearElement = document.getElementById("currentYear");
    currentYearElement.textContent = new Date().getFullYear();

    // Mostrar la fecha de la última modificación
    const lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

    // Obtener el botón de modo oscuro y el elemento body
    const modeButton = document.querySelector("#mode");
    const body = document.querySelector("body");

   
    // Contador de visitas de la página
    const visitsElement = document.getElementById("visits");
    if (visitsElement) {
        // Obtener el número de visitas desde localStorage
        let visits = localStorage.getItem("pageVisits");
        if (!visits) {
            visits = 0; // Inicializar si no existe
        }

        // Incrementar el contador y almacenarlo en localStorage
        visits++;
        localStorage.setItem("pageVisits", visits);

        // Actualizar el contenido del contador en la página
        visitsElement.textContent = `Page Visits: ${visits}`;
    }
});
