const c = (feet) => {
    const result = [];
    for (const item of feet) {
        result.push(item / 3.281);
    };
    return result;
}
const footArray = [22, 33, 14, 2, 5];
console.log(c(footArray));

const footInput = document.getElementById('footinput');
const footMeters = document.getElementById('footmeters');
const footCentimeters = document.getElementById('footcentimeters');
const inchInput = document.getElementById('inchinput');
const inchMeters = document.getElementById('inchmeters');
const inchCentimeters = document.getElementById('inchcentimeters');
footInput.oninput = () => {
    if (footInput.value.trim()) {
        document.querySelectorAll('.footstuff').forEach(element => {
            element.style.visibility = 'visible';
        });
    } else {
        document.querySelectorAll('.footstuff').forEach(element => {
            element.style.visibility = 'hidden';
        });
        footMeters.textContent = '';
        footCentimeters.textContent = '';
    }
    footMeters.textContent = footInput.value.replace(/\d+(\.\d+)?/g, (number) => (number / 3.281).toFixed(2));
    footCentimeters.textContent = footInput.value.replace(/\d+(\.\d+)?/g, (number) => (number * 30.48).toFixed(2));
}

inchInput.oninput = () => {
    if (inchInput.value.trim()) {
        document.querySelectorAll('.inchstuff').forEach(element => {
            element.style.visibility = 'visible';
        });
    } else {
        document.querySelectorAll('.inchstuff').forEach(element => {
            element.style.visibility = 'hidden';
        });
        inchMeters.textContent = '';
        inchCentimeters.textContent = '';
    }
    inchMeters.textContent = inchInput.value.replace(/\d+(\.\d+)?/g, (number) => (number / 39.37).toFixed(2));
    inchCentimeters.textContent = inchInput.value.replace(/\d+(\.\d+)?/g, (number) => (number * 2.54).toFixed(2));
}