function forEach(arr,fn){
	for(var i = 0; i < arr.length; i++){
		fn(arr[i]);
	}
	return arr;
}

function getTransformedArray(arr,fn){
	var result_array = [];
	forEach(arr, function(el){ result_array.push(fn(el)); });
	return result_array;
}
 function increment(num){ return num + 1 } // just returns incremented number
  console.log(getTransformedArray( [1, 7, 20], increment )); // -> [ 2, 8, 21 ]
