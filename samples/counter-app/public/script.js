let counterValue = 0;

const counterElement = document.getElementById('counter');

function incrementCounter() {
  counterValue++;
  counterElement.textContent = counterValue;
}
