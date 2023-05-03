const resetButton = document.querySelector('.form__reset-button');
const counterValue = document.querySelector('.counter__result')
const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const form = document.querySelector('.counter__form')
const countButtom = document.querySelector('.form__submit-button');

const makeResetButtonActive = (ageNumber, heightNumber, weightNumber) => {
    ageNumber = age.value;
    heightNumber = height.value;
    weightNumber = weight.value;

    
    if (ageNumber > 0 || heightNumber > 0 || weightNumber > 0) {
        resetButton.disabled = false;
    }
};

const onResetButtonClick = (evt) => {
    evt.preventDefault();
    form.reset();
    countButtom.disabled = true;
    counterValue.classList.add('counter__result--hidden');
    resetButton.disabled = true;
};

document.addEventListener('input', makeResetButtonActive);
resetButton.addEventListener('click', onResetButtonClick);

export {onResetButtonClick}