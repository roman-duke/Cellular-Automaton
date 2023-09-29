export default class Game {
  constructor(array) {
    this.array = array.grid;
    this.grid = array.grid_copy;
  }

  min_grid_check(list, i, k) {
    let count_1 = 0;
    for (let step=-1; step<=1; step++) {
      for (let a=-1; a<=1; a++) {
        if ((i+step >= 0 && i+step <= this.array.length) && (k+a >= 0 && this.array.length)) {
          if ((step != 0 || a != 0) && list[i+step][k+a] == 1) {
            count_1 += 1;
          } 
          
          else if ((step != 0 || a != 0) && list[i+step][k+a]%5 == 0) {
            this.grid[i+step][k+a] += 5;
          }
        }
      }
    }
    return count_1;
  }

  rule_check() {
    for (let i=0; i<this.grid.length; i++) {
      for (let k=0; k<this.grid.length; k++) {
        let cell = this.array[i][k];
        if (cell == 1) {
          let neighbour = this.min_grid_check(this.array, i, k);
          if (neighbour != 2 && neighbour != 3) {
            this.grid[i][k] = 0;
          } else {
          }
        }
      }
    }
    return this.grid;
  }
}