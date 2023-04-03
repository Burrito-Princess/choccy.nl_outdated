let row = 0;
let colomn = 0;

let matrix = [ //width is 5, lenght is 4
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    ]

function calc(id){
    console.log("Im here at calc!");

    row = Math.floor(id/matrix[0].length);
    colomn = id % matrix[0].length;

    matrix[row][colomn] = 1;
    console.log("This is the colomn: " + colomn);
    console.log("this is the Row: " + row);
    console.log(matrix);
    console.log(matrix[row][colomn])
}