// * The program creates a row of length 9 from given grid
//   * Example Input: 5, 3, 2, 1, 4, 6, 7, 8, 9
//   * Example Output: [5, 3, 2, 1, 4, 6, 7, 8, 9]


export function Grid(){
  this.row0 = [];
  this.row1 = [];
  this.row2 = [];
  this.row3 = [];
  this.row4 = [];
  this.row5 = [];
  this.row6 = [];
  this.row7 = [];
  this.row8 = [];

}

Grid.prototype.addToRow = function(string){
  return string.split(" ");
}

Grid.prototype.checkArray = function(array) {
  var temp = array.slice(0);
  temp.sort(function(a, b){return a - b});
  var checknumber = 1;
  for(var i=0; i<temp.length; i ++) {
    if (parseInt(temp[i]) ==checknumber){
      checknumber ++;
      if (i == 8) {
        return true;
      }
    }
    else {
      return false;
    }
  }
}

Grid.prototype.checkColumn = function(index){
  var newColumnArray = [];
  for (var i = 0; i<9; i ++){
    newColumnArray.push(this["row"+i][index]);
  }

  console.log(newColumnArray);

  return this.checkArray(newColumnArray);
}