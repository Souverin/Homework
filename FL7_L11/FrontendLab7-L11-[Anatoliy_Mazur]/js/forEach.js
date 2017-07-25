function forEach(arr,fn){
	for(var i = 0; i < arr.length; i++){
		fn(arr[i]);
	}
	return arr;
}
 forEach( [3, 5, 2], function(el){ console.log(el) } );