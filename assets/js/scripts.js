var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

// function increment() {
//     currentNumber = currentNumber + 1;
//     currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrement() {
//         currentNumber = currentNumber - 1;
//         currentNumberWrapper.innerHTML = currentNumber;
// }

function subtrair(){
    if(currentNumber <= 0) {
        document.getElementById('subtrair').disable = true;
        alert("Proibido número negativo");
    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function adicionar() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

