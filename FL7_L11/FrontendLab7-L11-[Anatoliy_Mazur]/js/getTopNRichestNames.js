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

function getTopNRichestNames(num, obj_arr){
	var obj_letter = {
		K: 1e3,
		M: 1e6,
		B: 1e9
	};
	var new_obj_arr = obj_arr.map(function(obj){
		var new_obj = {};
		new_obj.name = obj.name;
		new_obj.income = parseInt(obj.income)*obj_letter[obj.income.slice(-1)];
		return new_obj;
	})
	new_obj_arr.sort(function(a, b) {
  		return b.income - a.income;
	});
	console.log()
	return pluckByAttribute(new_obj_arr, "name").slice(0,num);
}
  var people = [
    {name: 'Bara', income: '1B'},
  	    {name: 'Dara', income: '5B'},
  	    {name: 'Kara', income: '1M'},
  	    {name: 'Zara', income: '2K'}
  ];
console.log(getTopNRichestNames(2, people)); // -> [ 'Dara', 'Bara' ]
console.log(getTopNRichestNames(100, people)); // -> [ 'Dara', 'Bara', ‘Kara’, ‘Zara’ ]
