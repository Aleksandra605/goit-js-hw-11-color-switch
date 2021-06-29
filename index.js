const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    console.log('works');
    randomColor(colors)
  }, 1000);
  if(timerId) {
    startBtn.setAttribute('disabled', "disabled");
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  console.log('setInterval stopped!');
});

function randomColor(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  body.style.backgroundColor = array[randomNum];
}
