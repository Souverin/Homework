function smallest(){
	return Math.min.apply(null,arguments);
}
console.log (smallest(2, 0.1, -5, 100, 3) );// 100
module.exports = smallest;