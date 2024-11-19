function startClock() {
    const clockElement = document.getElementById('clock');
    let secondsElapsed = 0;

    setInterval(() => {
        secondsElapsed++;
        const minutes = Math.floor(secondsElapsed / 60);
        const seconds = secondsElapsed % 60;

        clockElement.textContent = `Temps: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

// Activem el rellotge quan es carregui la pàgina
window.onload = startClock;


// validar contraseña
function validatePassword() {
    const pass1 = document.getElementById('password1').value;
    const pass2 = document.getElementById('password2').value;

    if (pass1.length < 8) {
        alert('La contrasenya ha de tenir almenys 8 caràcters.');
        return;
    }

    if (pass1 !== pass2) {
        alert('Les contrasenyes no coincideixen.');
        return;
    }

    alert('Contrasenya validada correctament!');
}

function togglePasswordVisibility(inputId, button) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = button.querySelector('.eye-icon');
    
    // Comprova l'estat actual i canvia
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '👁️'; // Ull obert
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '🙈'; // Mico tancant els ulls
    }
}

const starContainer = document.querySelector('.stars');
const numberOfStars = 150; // Quantitat d'estrelles

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    // Posició aleatòria
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    // Mida aleatòria
    const size = Math.random() * 3 + 1; // Entre 1px i 4px
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    // Durada aleatòria per a l'animació
    star.style.animationDuration = Math.random() * 5 + 5 + 's'; // Entre 5s i 10s
    star.style.animationDelay = Math.random() * 5 + 's'; // Retard inicial
    starContainer.appendChild(star);
}


function showImage(src, title, text) {
    const previewContainer = document.getElementById('image-preview');
    const previewImg = document.getElementById('preview-img');
    const previewTitle = document.getElementById('preview-title');
    const previewText = document.getElementById('preview-text');

    previewImg.src = src;
    previewTitle.textContent = title;
    previewText.textContent = text;

    previewContainer.style.display = 'block';
}

function highlightSection(section) {
    // Afegim la classe "highlighted" per canviar l'estil
    section.classList.add('highlighted');

    // Mostrem el text ocult
    const hiddenText = section.querySelector('.hidden-text');
    hiddenText.classList.add('visible');
}

function resetSection(section) {
    // Eliminem la classe "highlighted" per tornar a l'estil inicial
    section.classList.remove('highlighted');

    // Amaguem el text ocult
    const hiddenText = section.querySelector('.hidden-text');
    hiddenText.classList.remove('visible');
}