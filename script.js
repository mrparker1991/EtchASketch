/* Java for Etch a Sketch */

const boxHeight = 400;
const boxWidth = 700;
const container = document.getElementById('container');
const draw = document.createElement('div');
  draw.setAttribute('id','draw');

const change = document.getElementById('grid');
  change.addEventListener('click', createBoxes);
const colorButton = document.createElement('button');
  colorButton.setAttribute('id','color');
  colorButton.addEventListener('click', colorChange);
  colorButton.textContent = 'Color';
const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', reset);
const buttons = document.getElementById('buttons');
buttons.appendChild(colorButton);

function createBoxes(rows) {
  rows = prompt('How many rows?');
  let divHeight = boxHeight/rows;
  let divWidth = boxWidth/rows;
  let boxes = rows*rows;
  if (rows > 0 && rows <= 150) {
    const divs = draw.querySelectorAll('div');
    divs.forEach((div) => {
      div.remove();
    });
    for (i=0; i < boxes; i++) {
      let divE = document.createElement('div');
      divE.setAttribute('class','etch');
      divE.setAttribute("style", `width: ${divWidth}px; height: ${divHeight}px;`)
      divE.style.background = 'white';
      draw.appendChild(divE);
    }
    container.appendChild(draw);
  } else {
    alert('Please enter a number between 1 and 200.');
    createBoxes();
  }
  const divs = draw.querySelectorAll('div');
  if (colorButton.textContent == 'Color') {
    blackListen();
  } else {
    colorListen();
  }
}

function toStart() {
  rows = 16;
  let divHeight = boxHeight/rows;
  let divWidth = boxWidth/rows;
  let boxes = rows*rows;
  for (i=0; i < boxes; i++) {
    let divE = document.createElement('div');
    divE.setAttribute('class','etch');
    divE.setAttribute("style", `width: ${divWidth}px; height: ${divHeight}px;`)
    divE.style.background = 'white';
    draw.appendChild(divE);
  container.appendChild(draw);
  const divs = draw.querySelectorAll('div');
  blackListen();
  }
}

function reset() {
  const divs = draw.querySelectorAll('div');
  divs.forEach((div) => {
    div.style.background = 'white';
  });
  if (colorButton.textContent == 'Color') {
    blackListen();
  } else {
    colorListen();
  }
}

function colorChange() {
  if (colorButton.textContent == 'Color') {
    colorListen();
    colorButton.textContent = 'Black';
  } else {
  blackListen();
  colorButton.textContent = 'Color';
  }
}

function blackListen() {
  const divs = draw.querySelectorAll('div');
  divs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.background = 'black';
    });
  });
}

function colorListen() {
  const divs = draw.querySelectorAll('div');
  divs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.background = `rgb(${Math.floor(Math.random()*255)},
      ${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    });
  });
}

toStart();