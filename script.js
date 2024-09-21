const initialPhrases = [
    "Hola Lu",
    "Se que no hablamos mucho, pero la verdad es que últimamente he estado pensando mucho en ti",
    "Quería darte un detalle para sacarte una sonrisa y recordarte lo especial que eres.",
    
    
];

const flowerMessages = [
  "Eres una persona increíble",
  "Aunque no lo creas estoy muy feliz de haber podido coincidir contigo",
  "No se porque, pero desde que te vi siento que eres de esas personas que se encuntran una vez en la vida, y me transmmites unas vibras tan tranquilas y positivas",
 "Y me doy cuenta de eso cada vez que te veo sonreir"
 ];

let currentPhraseIndex = 0;
let currentMessageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const phraseContainer = document.getElementById('phrase-container');
    const currentPhrase = document.getElementById('current-phrase');
    const nextButton = document.getElementById('next-button');
    const flowerContainer = document.getElementById('flower-container');
    const messageContainer = document.getElementById('message-container');

    function showNextPhrase() {
        if (currentPhraseIndex < initialPhrases.length) {
            currentPhrase.textContent = initialPhrases[currentPhraseIndex];
            currentPhraseIndex++;
        } else {
            phraseContainer.style.display = 'none';
            flowerContainer.style.display = 'block';
            showMessage("Selecciona una flor");
            addFlowerClickListeners();
        }
    }

    nextButton.addEventListener('click', showNextPhrase);

    showNextPhrase();

    function showMessage(message) {
        messageContainer.textContent = message;
        messageContainer.style.display = 'block';
    }

    function addFlowerClickListeners() {
        const flowers = document.querySelectorAll('.flower');
        flowers.forEach(flower => {
            flower.addEventListener('click', showNextMessage);
            flower.addEventListener('touchstart', function(e) {
                e.preventDefault();
                showNextMessage();
            });
        });
    }

    function showNextMessage() {
        if (currentMessageIndex < flowerMessages.length) {
            showMessage(flowerMessages[currentMessageIndex]);
            currentMessageIndex++;
        } else {
            showMessage("Me encantaría poder salir contigo y tener la oportunidad de conocernos ¿Qué dices?");
        }
    }
});