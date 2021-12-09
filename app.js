import { characters } from './data.js';
console.log(characters);
const audio = document.getElementById('audio');

// const dogSound = document.getElementById('dog-sound');
// dogSound.addEventListener('click', () => {
//     audio.src = 'assets/sounds/dog.wav';
//     audio.play();
// });

// const santaSound = document.getElementById('santa-sound');
// santaSound.addEventListener('click', () => {
//     audio.src = 'assets/sounds/santa.wav';
//     audio.play();
// });

// const simpsonSound = document.getElementById('simpson-sound'); simpsonSound.addEventListener('click', () => {
//     audio.src = 'assets/sounds/simpson.mp3';
//     audio.play();
// });

const template = document.getElementById('template');
const characterList = document.getElementById('characterList');



for (let character of characters) {
    const copy = template.content.cloneNode(true);
    const header = copy.querySelector('h2');
    const image = copy.querySelector('img');
    const button = copy.querySelector('button');
    header.textContent = character.name;
    image.src = character.image;
    button.addEventListener('click', () => {
        audio.src = character.audio;
        audio.play();
    });


    characterList.appendChild(copy);
}