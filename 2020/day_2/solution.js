let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');

//{
//	min: 1,
//	max: 3,
//	char_req: 'C'
//}

//Part 1
const parse_pass_policy = (data) => {
	let data_arr = data.split(" ");

	let res = {};
	res.char_req = data_arr[1];
	let temp = data_arr.split("-");
	res.min = parseInt(temp[0]);
	res.max = parseInt(temp[1]);
}

const is_pass_valid = (policy, pass) => {
	
}
