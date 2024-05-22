let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');

let total_fully_overlap_pairs = 0;

const get_high_and_low = (pair) => {
	let hlarr = pair.split("-");
	return [parseInt(hlarr[0]), parseInt(hlarr[1])];
}

const get_full_overlaps = (pairs) => {
	let total = 0;
	pairs.forEach((pair) => {
		if(pair !== ""){
			let pair_arr = pair.split(","); 
	
			let pair_a = pair_arr[0];
			let pair_b = pair_arr[1];
	
			let pair_a_hl = get_high_and_low(pair_a);
			let pair_b_hl = get_high_and_low(pair_b);
	
			if((pair_a_hl[0] <= pair_b_hl[0] && 
			    pair_a_hl[1] >= pair_b_hl[1]) ||
			   (pair_b_hl[0] <= pair_a_hl[0] &&
			    pair_b_hl[1] >= pair_a_hl[1]))
				total++;
		}
	});
	return total;
}
total_fully_overlap_pairs = get_full_overlaps(data.split("\n"));
console.log(total_fully_overlap_pairs);
