
// Find nodes
let myInterval = setInterval(countUpFunction, 1000);
let switchVariable = 1;
let count = 0;  
const counter = document.getElementById('counter');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const heartBtn = document.getElementById('heart');
const pauseBtn = document.getElementById('pause');
const restartBtn = document.getElementById('restart');
const likesList = document.querySelector('ul');
const commentText = document.getElementById('comment-input');
const submit = document.getElementById('submit');

// Non-triggered functions and add-ins

function countUpFunction() { //~COUNTER
    ++count;
    counter.innerText = count;
}
countUpFunction();


// triggered functions


// use triggers to assign functionality to nodes

minusBtn.addEventListener('click', () => //~ BUTTONS
--count);

plusBtn.addEventListener('click', () =>
++count);

heartBtn.addEventListener('click', () => { 
    let createLi = document.createElement('li');
    likesList.appendChild(createLi);
    let createText = document.createTextNode(`You liked ${count}.`);
    createLi.appendChild(createText);
});

pauseBtn.addEventListener('click', () => {
    if (!!switchVariable === true) {
        myInterval = clearInterval(myInterval); //TODO soff heartbtn
        pauseBtn.innerText = "resume"
        switchVariable = 0;
    } else {
        myInterval = setInterval(countUpFunction, 1000);
        pauseBtn.innerText = "pause"
        switchVariable = 1;
    };
});

restartBtn.addEventListener('click', () => {
    count = 0;
    counter.innerText = '0';
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let createLi = document.createElement('li');
    likesList.appendChild(createLi);
    let createText = document.createTextNode(`${commentText.value}`);
    createLi.appendChild(createText);
})

