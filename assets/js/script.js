/**
 *  
 * Autor: Germán Riveros Sepúlveda. 
 * 
 */
const container = document.querySelector('.skills__techs');
const movingDivs = document.querySelectorAll('.moving-div');

function initializeDivs() {
    movingDivs.forEach(div => {
        div.dataset.x = Math.random() * (container.clientWidth - div.clientWidth);
        div.dataset.y = Math.random() * (container.clientHeight - div.clientHeight);
        div.dataset.dx = (Math.random() - 0.5) * 4; // Velocidad horizontal
        div.dataset.dy = (Math.random() - 0.5) * 4; // Velocidad vertical
    });
}

// Función para actualizar la posición de los divs
function updatePosition() {
    movingDivs.forEach(div => {
        let x = parseFloat(div.dataset.x);
        let y = parseFloat(div.dataset.y);
        let dx = parseFloat(div.dataset.dx);
        let dy = parseFloat(div.dataset.dy);

        x += dx;
        y += dy;

        // Rebotar en las paredes
        if (x <= 0 || x >= container.clientWidth - div.clientWidth) {
            dx = -dx;
        }
        if (y <= 0 || y >= container.clientHeight - div.clientHeight) {
            dy = -dy;
        }

        div.dataset.x = x;
        div.dataset.y = y;
        div.dataset.dx = dx;
        div.dataset.dy = dy;

        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
    });

    requestAnimationFrame(updatePosition);
}

// Inicializar y actualizar posiciones al cargar
initializeDivs();
updatePosition();

// Re-inicializar las posiciones y velocidades en el redimensionamiento
window.addEventListener('resize', () => {
    initializeDivs();
});