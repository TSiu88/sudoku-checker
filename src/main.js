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
    grid.row0 = grid.addtorow(string);
    console.log(grid.row0);
    console.log(grid.checkrow(grid.row0));
})
})