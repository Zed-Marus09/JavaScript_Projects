// How to accept user input
// EASY WAY with a window Prompt

// let username = window.prompt('Whats your name: ');
// console.log(username);

let username;

document.getElementById("btnSubmit").onclick = function () {
    username = document.getElementById("username").value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = "Hello " + username;
}