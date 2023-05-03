import {showValues} from './formula.js';

const countButtom = document.querySelector('.form__submit-button');
const counterValue = document.querySelector('.counter__result')
const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');

const onCountButton = (evt) => {
    evt.preventDefault();
    counterValue.classList.remove('counter__result--hidden');
    showValues();
};

const countButtonActive = (ageNumber, heightNumber, weightNumber) => {
    ageNumber = age.value;
    heightNumber = height.value;
    weightNumber = weight.value;

    if (ageNumber > 0 && heightNumber > 0 && weightNumber > 0) {
        countButtom.disabled = false;
    } else {
        countButtom.disabled = true; 
    };
};

document.addEventListener('input', countButtonActive);
countButtom.addEventListener('click', onCountButton);

export {onCountButton}