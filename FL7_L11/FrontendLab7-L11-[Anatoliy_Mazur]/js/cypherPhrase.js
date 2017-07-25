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

var charactersMap = {a: "o", c: "d", t: "g"} ;

console.log(cypherPhrase( charactersMap, "kitty cat" ));