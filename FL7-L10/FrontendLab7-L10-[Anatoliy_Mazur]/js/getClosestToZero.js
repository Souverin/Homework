function getClosestToZero(){
	var ClosestToZero = arguments[0];
	for(let i = 1; i < arguments.length; i++){
		ClosestToZero = Math.abs(ClosestToZero) > Math.abs(arguments[i])?arguments[i]:ClosestToZero;
	}
	return ClosestToZero;
}
console.log(getClosestToZero(3,-3,2,5,-1));