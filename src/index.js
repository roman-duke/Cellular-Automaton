import Grid from './grid.js';
import Game from './game.js';
import '../style.css';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let grid = new Grid(1400, 1400, 140);
grid.draw(ctx);
grid.click(canvas, ctx);

let game = new Game(grid);
let timerId = setTimeout(() => null, 0)

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const info = document.getElementById('info');
const reset = document.getElementById('reset');

start.addEventListener('click', (event) =>{
  event.target.style.display = 'none';
  stop.style.display = 'inline-block';
  setTimeout(function gameLoop() {
    grid.update(ctx, game.rule_check());
    timerId = setTimeout(gameLoop, 200);
  }, 0);
})

stop.addEventListener('click', (event) => {
  event.target.style.display = 'none';
  start.style.display = 'inline-block';

  clearTimeout(timerId);
})

reset.addEventListener('click', (event) => {
  grid.clear(ctx, game.rule_check());
})