const heading = document.querySelector('h1');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

let stage = 0;
let noClicks = 0;
let noLocked = false;

yesButton.addEventListener('click', () => {
    if (noLocked) return;

    if (stage === 0) {
        heading.textContent = "Well, I wanted to ask if you are gay? well are you?";
        stage = 1;
    } else if (stage === 1) {
        // Move to page 2
        page1.style.display = "none";
        page2.style.display = "flex"; // or "block" depending on layout
    }
});

noButton.addEventListener('click', () => {
    if (stage === 0) {
        heading.textContent = "Bro just click yes lol";
        return;
    }

    if (stage === 1) {
        noClicks++;

        heading.textContent = "Bro just click yes again lol";

        let currentPadding = parseInt(window.getComputedStyle(yesButton).paddingLeft) || 20;
        yesButton.style.padding = `${currentPadding + 50}px`;

        if (noClicks >= 5) {
            noButton.style.display = "none";
        }
    }
});
