let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');
//Part 1
//Rock (A,X) 1
//Paper (B,Y) 2 
//Scissor (C,Z) 3

//Win = 8
//Draw = 3
//Lose = 0

const get_match_outcome = (you, opponent) => {
	if(you === "X" && opponent === "A") return 3;
	else if(you === "X" && opponent === "B") return 0;
	else if(you === "X" && opponent === "C") return 3;
	else if(you === "Y" && opponent === "A") return 8;
	else if(you === "Y" && opponent === "B") return 3;
	else if(you === "Y" && opponent === "C") return 0;
	else if(you === "Z" && opponent === "A") return 0;
	else if(you === "Z" && opponent === "B") return 8;
	else if(you === "Z" && opponent === "C") return 3;
	else return 0;
}

const get_shape_score = (your_shape) => {
	if(your_shape === "X") return 1;
	else if(your_shape === "Y") return 2;
	else return 3;
}

let total_part_1 = 0;
let total_part_2 = 0;

data.split("\n").map((d) => {
	let shape = 0;
	let match_part_1 = 0;
	if(d !== ""){
		let darr = d.split(" ");
		//Part 1
		shape = get_shape_score(darr[0]);
		match_part_1 = get_match_outcome(darr[0], darr[1]);
		total_part_1 += shape + match_part_1;
		//Part 2
		
	}
});

console.log(total_part_1);

//Part 2
//X = 0
//Y = 3
//Z = 8
const get_match_outcome_part_2 = (outcome) => {
	if(outcome === "X") return 0;
	else if(outcome === "Y") return 3;
	else return 8;
}

