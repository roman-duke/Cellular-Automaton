export default class Grid {
  constructor(width, height, size) {
    this.size = size;
    this.width = width;
    this.height = height;
    this.cell_size = this.width/this.size;
    this.grid = [];

    for (let i=0; i<this.width; i++) {
      let min_grid = [];
      for (let k=0; k<this.height; k++) {
        min_grid.push(0);
      }
      this.grid.push(min_grid);
    }

    this.grid_copy = JSON.parse(JSON.stringify(this.grid));
  }

  draw(ctx) {
    ctx.strokeRect(0, 0, this.width, this.height);
    let [x, y] = [0, 0];

    //Create parallel vertical lines
    for (let k=0; k<this.size; k++) {
      
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
      x += this.cell_size;
    }

    //Create parallel horizontal lines
    for (let i=0; i<this.size; i++) {
      
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      y += this.cell_size;
    }

    ctx.stroke();
  }

  click(canv, ctx) {
      canv.addEventListener('click', (event) => {
      //get grid cell from the position of click
      let grid_col_no = ~~((event.clientX - (document.body.clientWidth - canv.width) /2 )/this.cell_size);
      let grid_row_no = ~~((event.clientY + window.scrollY - 110) / this.cell_size);
      let cell_data = this.grid[grid_row_no][grid_col_no];

      //get the top left pos. of the cell
      let left = grid_col_no * this.cell_size;
      let top = grid_row_no * this.cell_size;

      if (cell_data == 1) {
        this.grid[grid_row_no][grid_col_no] = this.grid_copy[grid_row_no][grid_col_no] = 0;
        ctx.clearRect(left, top, this.width/this.size, this.height/this.size);
        ctx.strokeRect(left, top, this.width/this.size, this.height/this.size);
      } else {
        this.grid[grid_row_no][grid_col_no] = this.grid_copy[grid_row_no][grid_col_no] = 1;
        ctx.fillRect(left + 1, top + 1, this.width/this.size - 1, this.height/this.size - 1);
      }
    })
  }

  update(ctx, update_grid) {
    for (let row=0; row<update_grid.length; row++) {
      for (let col=0; col<update_grid.length; col++) {
        //clear cell if the cell value is 0
        if ((update_grid[row][col] !=15) && (update_grid[row][col] != this.grid[row][col])) {
          this.grid[row][col] = update_grid[row][col] = 0;

          let left = this.cell_size * col;
          let top = this.cell_size * row;

          ctx.clearRect(left, top, this.width/this.size, this.height/this.size);
          ctx.strokeRect(left, top, this.width/this.size, this.height/this.size);
          // alert("death");
        }

        //else color cell if the cell value is 1
        else if (update_grid[row][col] == 15) {
          update_grid[row][col] = this.grid[row][col] = 1;
          let left = this.cell_size * col;
          let top = this.cell_size * row;
          ctx.fillRect(left + 1, top + 1, this.width/this.size - 1, this.height/this.size - 1);
          // alert("birth");
        }
      }
    }
  }

  clear(ctx, update_grid) {
    for (let row=0; row<update_grid.length; row++) {
      for (let col=0; col<update_grid.length; col++) {
        //clear cell if the cell value is 0
          this.grid[row][col] = update_grid[row][col] = 0;

          let left = this.cell_size * col;
          let top = this.cell_size * row;

          ctx.clearRect(left, top, this.width/this.size, this.height/this.size);
          ctx.strokeRect(left, top, this.width/this.size, this.height/this.size);
          // alert("death");
        }
    }
  }
}