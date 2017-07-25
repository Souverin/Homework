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

function pluckByAttribute(arr, label){
	return getTransformedArray(arr, function(el){
		for(var prop in el){
			if (prop===label){
				return el[prop];
			}
		}
	});
}
var presidents = [ { name: 'George', surname: 'Kush' } ,
                               { name: 'Barako', surname: 'Obaame' } ];
  console.log(pluckByAttribute( presidents, 'name' )); // -> [‘George’, ‘Barako’]