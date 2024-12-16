const titleText = "Il mio sito";  // Il testo che vuoi visualizzare
const mainTitle = document.querySelector(".main-title");  // Seleziona l'elemento h1 con la classe "main-title"
let index = 0;

function typewriter() {
    if (index < titleText.length) {
        mainTitle.textContent += titleText.charAt(index);  // Aggiungi una lettera alla volta
        index++;
        setTimeout(typewriter, 100);  // Chiama la funzione ricorsivamente con un delay
    } else {
        changeColor();  // Una volta che la scritta è completa, cambia colore
    }
}

function changeColor() {
    const colors = ["#ff4b1f", "#ff9068", "#1e90ff", "#32cd32", "#ffd700"];
    let colorIndex = 0;

    setInterval(() => {
        mainTitle.style.color = colors[colorIndex];  // Cambia il colore del testo
        colorIndex = (colorIndex + 1) % colors.length;  // Passa al colore successivo
    }, 500);  // Cambia colore ogni 500ms
}

// Riferimenti agli elementi
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

// Controlla se gli elementi sono stati trovati
if (hamburger && sideMenu) {
    // Aggiungi evento di click per mostrare/nascondere il menu
    hamburger.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        console.log("Menu laterale toggled."); // Messaggio di debug
    });
} else {
    console.error("Impossibile trovare gli elementi hamburger o sideMenu.");
}

typewriter();
