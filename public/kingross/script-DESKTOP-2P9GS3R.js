const container = document.getElementById("container");
let id = 0;
var matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let x = 0;
let y = 0;
let pos = 0;
let size = matrix.length * matrix[0].length;
let con = document.getElementById("container");

//start squares
let u = 0; //up
let d = 0; //down
let l = 0; // left
let r = 0; // right
let s = 0; //active location
let t = 0; //total

let id_array = [];
var n_array = [];
var colour = "blue";

//set canvas size 
con.style.width = matrix[0].length * 50 + "px";
con.style.height = matrix.length * 50 + "px";
//build blocks

function color(c){
  colour = c;
}

begin();

function begin(){
  id = 0;
  for (let i = 0; i < size; i++) {
    id++;
    let div = document.createElement("div");
    div.id = id;
    
    id_array.push(div);
    var array = document.getElementsByClassName("square");
    div.addEventListener("click", function(){
      change(this.id, array);
    });
    div.className = "square";
    container.appendChild(div);
    if (y == matrix[0].length) {
      x++;
      y = 0;
    }
};
}

let baa = 0;

function square(){
  id = 0;
  // console.log(n_array + " " + c_array);
  x = 0;
  y = 0;
  for (let i = 0; i < size; i++) {
    id++;
    let div = document.createElement("div");
    div.id = id;
    id_array.push(div);
    var array = document.getElementsByClassName("square");
    div.addEventListener("click", function(){
      change(this.id, array);
    });
    div.className = "square";
    container.appendChild(div);
    if (y == matrix[0].length) {
      x++;
      y = 0;
    };
    // console.log("this is the matrix " + matrix[x][y]);
    document.getElementById(id).style.backgroundColor = matrix[x][y];
    y++;
    pos++;
  };
  
}

let increments = 0;
let plc = 0;

function increase(){
  plc = (matrix.length - 1) + increments;
  // console.log(plc);
  console.log("increase");
  let matn = 0;
  for (let o = 0; o < matrix.length; o++){
    matrix[matn].push(0); 
    matn++;
  };
  let divn = 0;
  let element;
  for(let i = 0; i < size; i++){
    divn++;
    element = document.getElementById(divn);
    element.remove();
  };
  matrix.push(matrix[1]);
  size = matrix.length * matrix[0].length;
  con.style.width = matrix[0].length * 50 + "px";
  con.style.height = matrix.length * 50 + "px";
  increments++;
  square();
}

let c_array = []

let c_matrix = matrix;
let q = 0;

let num = 0;
// for (let f = 0; f < matrix.length; f++){
//   q++;
//   for (let g = 0; g < matrix[q].length; g++){

//   }
// }
let row;
  let colomn;
  let place = 0;
function change(id, array){
  console.log(id - 1);
  if(array[id - 1].style.backgroundColor == "" ){
    array[id - 1].style.backgroundColor = colour;
    
  }else{
    array[id - 1].style.backgroundColor = "";

  };
  
  id = place;
  row = id / matrix[0].length;
  colomn = id % (row - 1);
  console.log("matrix before " + matrix[row][colomn]);
  matrix[row][colomn] = colour;
  console.log("matrix after " + matrix[row][colomn]);
  console.log(colomn);
  console.log(row);
  console.log(matrix[row][colomn]);
};