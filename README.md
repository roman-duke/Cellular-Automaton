# Conway's Game of Life
Javascript implementation of Conway's game of life.

## Description
[Conway's game of life](https://youtu.be/C2vgICfQawE?si=-FDHxM4MHNyHrgMr) is a cellular automaton devised by British mathematician John Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.

Rules are as follows:
* Any live cell with fewer than two live neighbours dies, as if by underpopulation.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overpopulation.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Usage
To start a live server, run the following in terminal:
`npm run dev`

Fill in the required squares in the grid and click on start to observe the process.

## Current problems
The grid isn't scalable, so changing the window size does not mean having a bigger grid area. 

>_The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking_ ~ **Albert Einstein**