const shipment = [1, 2, 3, 4, 5];
const startButton = document.getElementById('start');
const shipButton = document.getElementById('ship');
const endButton = document.getElementById('end');

function mvBoxRight(speed, px, stop, bx) {
  const screen = window.innerWidth;

  let c = 0;
  const interval = setInterval(() => {
    if (c === stop || c > screen - 100) clearInterval(interval);
    bx.style.transform = `translate(${c}px, 0)`;
    c += px;
  }, speed);
}

function createBox(id) {
  const div = document.createElement('div');

  div.id = id;
  div.innerHTML = `<p>box ${id}</p>`;
  div.className = 'h-12 w-fit px-5 flex items-center rounded bg-green-500';

  console.log(id);

  let belt = document.getElementById('belt');
  belt.appendChild(div);
  return id;
}

startButton.addEventListener('click', () => {
  const loop = document.getElementById('loop-one').value;
  eval(loop);
});

shipButton.addEventListener('click', () => {
  const loop2 = document.getElementById('loop-two').value;
  eval(loop2);
});

endButton.addEventListener('click', () => {
  const belt = document.getElementById('belt');
  belt.replaceChildren();
});
