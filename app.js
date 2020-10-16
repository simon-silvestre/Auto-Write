const text = "salut je m'appel simon et ce message est auto écrit par mon ordinateur"

index = 0;

function autowrite() {
    document.querySelector('p').textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(autowrite, 100);