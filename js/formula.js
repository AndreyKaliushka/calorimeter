import {chosenActivity, getManOrWomenValue} from './chosen-values.js';

const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const caloriesNorm = document.getElementById('calories-norm');
const caloriesMin = document.getElementById('calories-minimal');
const caloriesMax = document.getElementById('calories-maximal');
let sum = 0;

const formula = (ageNumber, heightNumber, weightNumber) => {
    ageNumber = age.value;
    heightNumber = height.value;
    weightNumber = weight.value;

    sum = 10 * weightNumber;

    sum = sum + 6.25 * heightNumber;

    sum = sum - 5 * ageNumber;

    sum = sum + getManOrWomenValue();

    sum = sum * chosenActivity();


    return sum;
};

const showValues = (gotCalories) => {
    gotCalories = formula();

    caloriesNorm.textContent = Math.round(gotCalories).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1 `);

    caloriesMin.textContent = Math.round(gotCalories - gotCalories / 100 * 15).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1 `);

    caloriesMax.textContent = Math.round(gotCalories + gotCalories / 100 * 15).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1 `);
};

export {showValues};