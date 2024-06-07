let fs = require("fs");

var data = fs.readFileSync('./input.txt','utf8');
let data_arr = data.split("\n");

const findTrees = (xi,yi,data_ar) => {
	let sum = 0;
	let x = xi;
	for(let y = yi; y < data_ar.length; y++){
		if(data_arr[y+1] !== undefined){
			x+= 3
			if(x >= data_arr[y].length) x -= data_arr[y].length;
			if(data_arr[y+1][x] === "#") sum++;
		}
	}
	return sum;
}

console.log(findTrees(0,0,data_arr));


//Part 2
const findTreesP2 = (xi,yi, data_ar) => {
	let sum = 0;
	let x = xi;
	for(let y = yi; y < data_ar.length; y += yi){
		if(data_arr[y+1] !== undefined){
			x+= xi
			if(x >= data_arr[y].length) x -= data_arr[y].length;
			if(data_arr[y+1][x] === "#") sum++;
		}
	}
	return sum;

}

let slopesX = [1,3,5,7,1];
let slopesY = [1,1,1,1,2];

let treesP2 = 1;

for(let i = 0; i < slopesX.length; i++){
	treesP2 *= findTreesP2(slopesX[i], slopesY[i], data_arr);
}
console.log(treesP2);
