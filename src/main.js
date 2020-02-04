import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Grid } from './scripts';

// * The program creates a row of length 9 from given grid
//   * Example Input: 5, 3, 2, 1, 4, 6, 7, 8, 9
//   * Example Output: [5, 3, 2, 1, 4, 6, 7, 8, 9]

// var rowArray = [5, 3, 2, 1, 4, 6, 7, 8]


$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    var grid = new Grid();
    var string = "5 3 2 1 4 6 8 8 9";
    grid.row0 = grid.addToRow(string);
    var string1 = "2 3 2 1 4 6 8 8 9";
    grid.row1 = grid.addToRow(string1);
    var string2 = "1 3 2 1 4 6 8 8 9";
    grid.row2 = grid.addToRow(string2);
    var string3 = "4 3 2 1 4 6 8 8 9";
    grid.row3 = grid.addToRow(string3);
    var string4 = "3 3 2 1 4 6 8 8 9";
    grid.row4 = grid.addToRow(string4);
    var string5 = "6 3 2 1 4 6 8 8 9";
    grid.row5 = grid.addToRow(string5);
    var string6 = "7 3 2 1 4 6 8 8 9";
    grid.row6 = grid.addToRow(string6);
    var string7 = "8 3 2 1 4 6 8 8 9";
    grid.row7 = grid.addToRow(string7);
    var string8 = "9 3 2 1 4 6 8 8 9";
    grid.row8 = grid.addToRow(string8);

    console.log(grid.row0);
    console.log("row", grid.checkArray(grid.row0));
    console.log("col", grid.checkColumn(0));
  });
});