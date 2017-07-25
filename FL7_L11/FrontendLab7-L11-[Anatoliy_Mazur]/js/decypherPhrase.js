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

function cypherPhrase(object, str) {
    return getTransformedArray(str, function(el) {
        return object[el] || el;
    }).join("");
}

function decypherPhrase(object, str){
	var temp;
	for(var prop in object){
		temp = prop;
		prop = object[prop];
		object[prop] = temp;
	}
	return cypherPhrase(object, str);
}
 var charactersMap = {a: 'o', c: 'd', t: 'g'}
  console.log(decypherPhrase( charactersMap, 'kiggy dog' )); // -> “kitty cat”