let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');

let total_fully_overlap_pairs = 0;

const get_high_and_low = (pair) => {
	let hlarr = pair.split("-");
	return [parseInt(hlarr[0]), parseInt(hlarr[1])];
}

const get_full_overlaps = (pairs) => {
	pairs.forEach((pair) => {
		let pair_arr = pair.split(",")[0]; 
		let pair_a = pair_arr[0];
		let pair_b = pair_arr[1];

		let pair_a_hl = get_high_and_low(pair_a);
		let pair_a_hl = get_high_and_low(pair_a)
	});
}



console.log(total_fully_overlap_pairs);
