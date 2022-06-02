var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if(currentNumber < 0){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else if(currentNumber >= 0){
        document.getElementById('currentNumber').style.color = 'black';
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if(currentNumber <= 0) {
        document.getElementById('currentNumber').style.color = 'red';
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        // document.getElementById('subtrair').disable = true;
        // alert("Proibido número negativo");
    }
}


