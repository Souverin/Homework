var sp = ' ';
var sh = '#';
var i = 0;
while(i<8){
	if (i%2===0){
		console.log(`${sh}${sh}${sh}${sh}`);
	}
	else{
		console.log(`${sp}${sh}${sh}${sh}${sh}`);
	}
	i++;
}