let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');


const priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

//Fetch common item from compartments
const fcifc = (rucksack) => {
	let middle = Math.ceil(rucksack.length / 2);

	let first = rucksack.slice(0,middle)
	let second = rucksack.slice(middle)

	return first.filter(item => second.includes(item));
}

const get_priority = (char) => {
	return priority.indexOf(char) + 1;
}

let total_sum_part_1 = 0;
data.split("\n").map(rs => {
	if(rs !== "")
		total_sum_part_1 += get_priority(fcifc(rs.split(""))[0]);
});

console.log(total_sum_part_1);
