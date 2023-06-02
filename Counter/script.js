let counter;

document.getElementById('btnDec').onclick = function () {
    // Get the value from the label
    counter = parseInt(document.getElementById('count').innerHTML);
    // check if the value is zero 
    // if the value is zero prompt a message
    if (counter == 0) {
        window.alert('Number is already 0');
    } else {
        // counter = counter - 1;
        counter -= 1;
        // Set the value of counter to label
        document.getElementById('count').innerHTML = counter;
    }
}
 
document.getElementById('btnRes').onclick = function () {
    if (counter == 0) {
        window.alert('Number is already 0');
    } else {
        // Set the counter back to zero
        counter = 0;
        document.getElementById('count').innerHTML = counter;
    }
}

document.getElementById('btnInc').onclick = function () {
    counter = parseInt(document.getElementById('count').innerHTML);
    counter += 1;
    document.getElementById('count').innerHTML = counter;
}