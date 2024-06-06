let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');

//{
//	min: 1,
//	max: 3,
//	char_req: 'C'
//}
//Data: 1-3 a: absde

//Part 1
const parse_pass_policy = (data) => {
	let data_arr = data.split(" ");
	let res = {};
	res.char_req = data_arr[1];
	let temp = data_arr[0].split("-");
	res.min = parseInt(temp[0]);
	res.max = parseInt(temp[1]);
	return res;
}

const is_pass_valid = (policy, pass) => {
	let num_of_policy_char = pass.split("").filter((c) => c === policy.char_req).length;
	return num_of_policy_char <= policy.max && num_of_policy_char >= policy.min;
}
let count = 0;
data.split("\n").map((w) => {
	if(w !== ""){
		let w_arr = w.split(": ");
		let pass = w_arr[1];
		let policy = parse_pass_policy(w_arr[0]);
		if(is_pass_valid(policy, pass)){
			count++;
			console.log("pass policy: " + w_arr[0] + "\npass: " + pass);
		}
	}
});
console.log(count);
