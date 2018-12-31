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

const noItemsLeft = 'Характеристик не осталось';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFeature(elementId, values) {
    if (values.length) {
        const index = getRandomInt(0, values.length - 1);
        document.getElementById(elementId).textContent = values[index];
        values.splice(index, 1);
    } else {
        const element = document.getElementById(elementId);
        element.textContent = noItemsLeft;
        element.classList.add('error');
    }
}

function clearFeature(elementId) {
    document.getElementById(elementId).textContent = '';
}

document.getElementById('getRole').addEventListener('click', () => {
    generateFeature('profession', professions);
    generateFeature('genderAge', genderAge);
    generateFeature('quality', qualities);
    generateFeature('hobby', hobbies);
    generateFeature('health', health);
    generateFeature('additional', additionals);
    document.getElementById('getRole').classList.add('hidden');
    document.getElementById('clear').classList.remove('hidden');
    Array.from(document.getElementsByClassName('feature')).forEach(e => {
        e.classList.remove('hidden');
    });
});

document.getElementById('clear').addEventListener('click', () => {
    clearFeature('profession');
    clearFeature('genderAge');
    clearFeature('quality');
    clearFeature('hobby');
    clearFeature('health');
    clearFeature('additional');
    document.getElementById('clear').classList.add('hidden');
    document.getElementById('getRole').classList.remove('hidden');
    Array.from(document.getElementsByClassName('feature')).forEach(e => {
        e.classList.add('hidden');
    });
});

