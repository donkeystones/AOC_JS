let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');

let data_arr = data.split("\n\n");
let valid_fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
let sum = 0;
for(let i = 0; i < data_arr.length; i++){
	let valid = true;
	console.log(data_arr[i]);
	console.log("----------------------------------------");
	valid_fields.map(field => {
		if(!data_arr[i].includes(field)) valid = false;
	});
	if (valid) sum++;
}

console.log(sum);
