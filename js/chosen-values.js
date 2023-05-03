const man = document.getElementById('gender-male');
const woman = document.getElementById('gender-female');
const activityMinimal = document.getElementById('activity-minimal');
const activityLow = document.getElementById('activity-low');
const activityMedium = document.getElementById('activity-medium');
const activityHigh = document.getElementById('activity-high');
const activityMaximal = document.getElementById('activity-maximal');
let physicalActivity = 0;
let specialNumber = 0;


const chosenActivity = () => {
    if (activityLow.checked) {
        activityMinimal.checked = false;
        activityLow.checked = true;

        physicalActivity = 1.375;

    } else if (activityMedium.checked) {
        activityMinimal.checked = false;
        activityMedium.checked = true;

        physicalActivity = 1.55;

    } else if (activityHigh.checked) {
        activityMinimal.checked = false;
        activityHigh.checked = true;

        physicalActivity = 1.725

    } else if (activityMaximal.checked) {
        activityMinimal.checked = false;
        activityMaximal.checked = true;

        physicalActivity = 1.9;
    } else {
        physicalActivity = 1.2;
    };


    return physicalActivity;
};

const getManOrWomenValue = () => {
    man.checked = false;

    if (woman.checked) {
        man.checked = false;
        woman.checked = true;
        specialNumber = -161;
    } else if ( man.checked === man.checked ) {
        man.checked = true;
        woman.checked = false;
        specialNumber = 5;
    };

    return specialNumber;
};

export {chosenActivity, getManOrWomenValue};