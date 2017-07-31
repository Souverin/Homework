function largest(){
	return Math.max.apply(null,arguments);
}
console.log(largest(2, 0.1, -5, 100, 3) );// 100
module.exports = largest;