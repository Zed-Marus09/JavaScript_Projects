let life = 3;
let score = 0;
let number;
let countCorrect = 0;
let guessNum;

// Creating Random Numbers
function generateRandomNumber() {
    guessNum = Math.floor(Math.random() * 10) + 1;
    console.log(guessNum);
}
generateRandomNumber();

document.getElementById('btnSubmit').onclick = function () {
    number = parseInt(document.getElementById('txtNumber').value);
    document.getElementById('number').innerHTML = "The Number";
  
    // Check if the number input is less than 1 and greater than 10
    if (number < 1 || number > 10) {
        window.alert('Number should be from 1-10');
    } else {
        // Check if the life is > 0 
        if (life > 0) {
            // Check if the input is the same as the random number
            if (number === guessNum) {
                score += 1;
                countCorrect += 1;
                document.getElementById('number').innerHTML = guessNum.toString();
                document.getElementById('check').innerHTML = "You are correct";
                document.getElementById('check').style.color = '#5cb85c';
                document.getElementById('score-value').innerHTML = score.toString();
    
                // Check if there are 3 consecutive correct answers
                if (countCorrect === 3) {
                    life += 1;
                    // Then update the life count
                    document.getElementById('life').innerHTML = life.toString();
                    // Reset the consecutive correct count
                    countCorrect = 0;
                }
    
                // Set another random number
                generateRandomNumber();
            } else {
                life -= 1;
                // Then update the life count
                document.getElementById('life-value').innerHTML = life.toString();
                document.getElementById('check').innerHTML = "Try again";
                document.getElementById('check').style.color = 'red';
                // Reset the consecutive correct count
                countCorrect = 0;
            }
        } else {
            window.alert('You ran out of lives. Try again!');
            // Reload the page
            location.reload();
        }
    }

    // Reset the input field
    document.getElementById('txtNumber').value = '';
}
