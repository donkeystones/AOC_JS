let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');

let data_arr = data.split("\n").map((item) => {return parseInt(item)});
let part1 = 0;
//-1 to skip the NaN at the end
for(let i = 0; i < data_arr.length-1; i++) {
	let sum = 2020;
	sum -= data_arr[i];

	for(let j = i+1; j < data_arr.length-1; j++){
		if(sum === data_arr[j]){
			part1 = data_arr[j] * data_arr[i];
			break;
		}
	}
}

console.log(part1)
