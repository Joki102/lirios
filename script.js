/* Emojis incluidos */
const emojis = ["🦋", "✨", "🤍", "🌸", "⭐", "💫", "🌷", "💐", "🌹", "🌻"];

/* Crear muchos emojis que caen */
function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");

    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = "-50px";

    emoji.style.fontSize = (18 + Math.random() * 30) + "px";
    emoji.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 7000);
}

setInterval(createEmoji, 120);

/******** BOTÓN DE MÚSICA ********/
function playSong() {
    const song = document.getElementById("song");
    song.play();
}

/******** MENSAJES BONITOS ********/
function showMessage() {
    const mensajes = [
        "Eres más especial de lo que imaginas🫶", 
        "Tu sonrisa ilumina cualquier lugar ✨", 
        "Mereces todo lo bonito del mundo 🌸", 
        "Gracias por existir🫶", 
        "Eres una obra de arte, única y hermosa ⭐", 
        "El mundo es mejor contigo en él 🦋", 
        "Que tu día sea tan bonito como estas flores 💛", 
        "Aquí tienes un abrazo envuelto en pétalos 🌼💛", 
        "Hoy te mando luz, calma y sonrisas ✨", 
        "Si pudieras oler esta página, olería a alegría 💐", 
        "Cada pétalo lleva un abrazo escondido para ti 🌼.", 
        "Si pudiera regalarte el cielo, lo haría. Hoy te regalo estas flores 🌻.", 
        "Que cada día florezca en tu vida algo hermoso 🌷.", 
        "Espero que estas flores te recuerden lo especial que eres 💛.”", 
        "Eres luz, eres magia y mereces todo lo bonito 🌟.", 
        "Tu alma es como un campo de flores: llena de vida y de colores ✨.", 
        "En cada flor va escondido un ‘te quiero’ 💛.", 
        "Eres lo mejor que me pudo haber pasado 🌹❤️."
    ];

    alert(mensajes[Math.floor(Math.random() * mensajes.length)]);
}
function openPopup() {

    // Mostrar el popup
    document.getElementById("popup").style.display = "flex";

    // Reproducir música automáticamente al dar clic en el texto
    const audio = document.getElementById("song");
    audio.play().catch(() => {});
}


function closePopup() {
    document.getElementById("popup").style.display = "none";
}

