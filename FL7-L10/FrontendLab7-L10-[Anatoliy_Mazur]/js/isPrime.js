function isPrime(a){
	var bol = true;
	for(var k = a-1; k >1; k--)
	{
		if(a%k===0) {
			bol = false;
			break;
		}
	}
	return bol;
}
console.log(isPrime(97));