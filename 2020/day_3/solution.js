let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');
let data_arr = data.split("\n");
let x = 0;
let trees = 0;
for(let y = 0; y < data_arr.length; y++){
	if(data_arr[y+1] !== undefined){
		x+= 3
		if(x >= data_arr[y].length) x -= data_arr[y].length;
		if(data_arr[y+1][x] === "#") trees++;
	}
}
console.log(trees);
