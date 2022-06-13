// Code example using data- Attribute

const buttonEl = document.getElementById("my-button");

// const clickHandler = function () {
//   let count = parseInt(this.getAttribute("data-count"));
//   count++;

//   this.setAttribute("data-count", count);
//   this.textContent = `Clicks: ${count}`;
// };

// Code example using closure
const clickHandler = function () {
  let count = 0;

  return function () {
    count++;
    this.textContent = `Clicks: ${count}`;
  };
};

buttonEl.addEventListener("click", clickHandler());

// For multiple button event listeners
const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
