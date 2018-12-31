'use strict';

const professions = [
    'Агроном',
    'Актёр',
    'Медсестра',
];

const genderAge = [

];

const qualities = [

];

const hobbies = [

];

const health = [

];

const additionals = [

];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('profession').textContent = professions[getRandomInt(0, professions.length - 1)];


