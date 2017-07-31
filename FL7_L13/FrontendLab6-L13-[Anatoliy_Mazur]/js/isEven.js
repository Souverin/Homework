function isEven(x){
	var delta = x>0 ? -2 : 2;
	if(Math.abs(x)<2){
		return x === 0;
	}
	else return isEven(x+delta);
}
module.exports = isEven;