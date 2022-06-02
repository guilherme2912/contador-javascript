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
    if(currentNumber < 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
       
    } else {
        document.getElementById('currentNumber').style.color = 'red';
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        // document.getElementById('subtrair').disable = true;
        // alert("Proibido número negativo");
    }
}

function adicionar() {
    if(currentNumber < 0){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else if(currentNumber >= 0){
        document.getElementById('currentNumber').style.color = 'black';
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}



