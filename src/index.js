
require('normalize.css/normalize.css');
require('./styles/index.scss');

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById('start');

  startButton.onclick = () => {
    console.log('starting demo');
  }
});
