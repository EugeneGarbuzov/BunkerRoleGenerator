'use strict';

const professions = [
    'Агроном',
    'Актёр',
    'Медсестра',
];

const genderAge = [
    'М. 35-40',
    'М. 15-20',
    'М. 55-60',
];

const qualities = [
    'Агрессивный',
    'Активный',
    'Аморальный',
];

const hobbies = [
    'Боулинг',
    'Вязание',
    'Кулинария',
];

const health = [
    'Очень плохое зрение, но есть очки',
    'Провалы в памяти',
    'Возможное заражение вирусом Эбола',
];

const additionals = [
    'Знает семь языков',
    'Не умеет плавать',
    'Большая тяга к алкоголю',
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFeature(elementId, values) {
    document.getElementById(elementId).textContent = values[getRandomInt(0, values.length - 1)];
}

generateFeature('profession', professions);
generateFeature('genderAge', genderAge);
generateFeature('quality', qualities);
generateFeature('hobby', hobbies);
generateFeature('health', health);
generateFeature('additional', additionals);


