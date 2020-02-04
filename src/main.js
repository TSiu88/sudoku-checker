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
    // var string = "7 5 9 4 6 2 8 1 3";
    // grid.row0 = grid.addToRow(string);
    // var string1 = "4 6 3 5 1 8 2 9 7";
    // grid.row1 = grid.addToRow(string1);
    // var string2 = "1 2 8 9 7 3 6 4 5";
    // grid.row2 = grid.addToRow(string2);
    // var string3 = "6 9 7 1 8 4 5 3 2";
    // grid.row3 = grid.addToRow(string3);
    // var string4 = "5 8 4 2 3 6 9 7 1";
    // grid.row4 = grid.addToRow(string4);
    // var string5 = "2 3 1 7 9 5 4 8 6";
    // grid.row5 = grid.addToRow(string5);
    // var string6 = "3 4 5 8 2 1 7 6 9";
    // grid.row6 = grid.addToRow(string6);
    // var string7 = "9 1 2 6 4 7 3 5 8";
    // grid.row7 = grid.addToRow(string7);
    // var string8 = "8 7 6 3 5 9 1 2 4";
    // grid.row8 = grid.addToRow(string8);

    // console.log(grid.row0);
    // console.log("row", grid.checkArray(grid.row0));
    // console.log("col", grid.checkColumn(0));
    // console.log("total result", grid.checkResult());

    var tempString = "";

    $('input[class="row0"]').each(function () {
      console.log($(this).val());
      tempString += $(this).val() + " ";
    });

    console.log("string", tempString);
    grid.row0 = grid.addToRow(tempString.toString());
    console.log(grid.row0);

    $('input[class="row1"]').each(function () {
      console.log($(this).val());
  });
  });
});