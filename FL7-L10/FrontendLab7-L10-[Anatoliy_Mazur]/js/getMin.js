function getMin(){
	var min = arguments[0];
	for(let i = 1; i < arguments.length; i++){
		min = min > arguments[i]?arguments[i]:min;
	}
	return min;
}
console.log(getMin(3,-3,2,5,-1));