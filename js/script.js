// const countButtom = document.querySelector('.form__submit-button');
// const counterValue = document.querySelector('.counter__result')
// const age = document.getElementById('age');
// const height = document.getElementById('height');
// const weight = document.getElementById('weight');
// const man = document.getElementById('gender-male');
// const woman = document.getElementById('gender-female');
// const activityMinimal = document.getElementById('activity-minimal');
// const activityLow = document.getElementById('activity-low');
// const activityMedium = document.getElementById('activity-medium');
// const activityHigh = document.getElementById('activity-high');
// const activityMaximal = document.getElementById('activity-maximal');
// const caloriesNorm = document.getElementById('calories-norm');
// const caloriesMinimal = document.getElementById('calories-minimal');
// const caloriesMax = document.getElementById('calories-maximal');
// const resetButton = document.querySelector('.form__reset-button');
// const form = document.querySelector('.counter__form')
// let physicalActivity = 0;
// let specialNumber = 0;
// let sum = 0;

// const chosenActivity = () => {
//     if (activityLow.checked) {
//         activityMinimal.checked = false;
//         activityLow.checked = true;

//         physicalActivity = 1.375;

//     } else if (activityMedium.checked) {
//         activityMinimal.checked = false;
//         activityMedium.checked = true;

//         physicalActivity = 1.55;

//     } else if (activityHigh.checked) {
//         activityMinimal.checked = false;
//         activityHigh.checked = true;

//         physicalActivity = 1.725

//     } else if (activityMaximal.checked) {
//         activityMinimal.checked = false;
//         activityMaximal.checked = true;

//         physicalActivity = 1.9;
//     } else {
//         physicalActivity = 1.2;
//     };


//     return physicalActivity;
// };


// const onCountButton = (evt) => {
//     evt.preventDefault();
//     counterValue.classList.remove('counter__result--hidden');
//     showValues();
// };

// const countButtonActive = (ageNumber, heightNumber, weightNumber) => {
//     ageNumber = age.value;
//     heightNumber = height.value;
//     weightNumber = weight.value;

//     if (ageNumber > 0 && heightNumber > 0 && weightNumber > 0) {
//         countButtom.disabled = false;
//     } else {
//         countButtom.disabled = true; 
//     };
// };

// const makeResetButtonActive = (ageNumber, heightNumber, weightNumber) => {
//     ageNumber = age.value;
//     heightNumber = height.value;
//     weightNumber = weight.value;

    
//     if (ageNumber > 0 || heightNumber > 0 || weightNumber > 0) {
//         resetButton.disabled = false;
//     }
// };

// const onResetButtonClick = (evt) => {
//     evt.preventDefault();
//     form.reset();
//     countButtom.disabled = true;
//     counterValue.classList.add('counter__result--hidden');
//     resetButton.disabled = true;
// };


// // const getManOrWomenValue = () => {
// //     man.checked = false;

// //     if (woman.checked) {
// //         man.checked = false;
// //         woman.checked = true;
// //         specialNumber = -161;
// //     } else if ( man.checked === man.checked ) {
// //         man.checked = true;
// //         woman.checked = false;
// //         specialNumber = 5;
// //     };

// //     return specialNumber;
// // };

// const formula = (ageNumber, heightNumber, weightNumber) => {
//     ageNumber = age.value;
//     heightNumber = height.value;
//     weightNumber = weight.value;

//     sum = 10 * weightNumber;

//     sum = sum + 6.25 * heightNumber;

//     sum = sum - 5 * ageNumber;

//     sum = sum + getManOrWomenValue();

//     sum = sum * chosenActivity();


//     return sum;
// };

// const showValues = (gotCalories) => {
//     gotCalories = formula();

//     caloriesNorm.textContent = Math.round(gotCalories);

//     caloriesMinimal.textContent = Math.round(gotCalories - gotCalories / 100 * 15);

//     caloriesMax.textContent = Math.round(gotCalories + gotCalories / 100 * 15);
// };



// document.addEventListener('input', countButtonActive);

// document.addEventListener('input', makeResetButtonActive);

// countButtom.addEventListener('click', onCountButton);

// resetButton.addEventListener('click', onResetButtonClick);

import {onCountButton} from './count-button.js';
import {onResetButtonClick} from './reset-button.js';

onCountButton();
onResetButtonClick();