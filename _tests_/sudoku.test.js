
import { Grid } from '../src/scripts';


describe('Grid', () => {
  test ('creates an Object with 9 rows', () => {
    var suduko = new Grid();
    expect(suduko.row0).toEqual([]);
  });
});