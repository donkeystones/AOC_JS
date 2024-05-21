let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');

//Rock (X,A) 1
//Paper (Y,B) 2 
//Scissor (Z,C) 3

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

let total = 0;

data.split("\n").map((d) => {
	let shape = 0;
	let match = 0;
	if(d !== ""){
		let darr = d.split(" ");
		shape = get_shape_score(darr[0]);
		match = get_match_outcome(darr[0], darr[1]);
		total += shape + match;
	}
});

console.log(total);
