// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj){
	// if null or undefined, exit function	
	if (obj === null){
		return String(null);
	} else if (obj === undefined){
		return '{}'
	}
	// testing for each primitive types
	else if (obj.constructor === String){
		return '"' + obj + '"';
	}
	else if (obj.constructor === Array){
		var arr = [];
		obj.forEach(function(val){
			arr.push(stringifyJSON(val));
		});
		return '['+ arr.join(',') + ']';
	} 
	else if (obj.constructor === Boolean || obj.constructor === Number){
		return String(obj);
	}
	// testing for objects
	else if (obj.constructor === Object){
		var arr = [];
		for (var key in obj){

			// returns empty object if value is a function or undefined
			if (obj[key] != null && key != null){
				if (obj[key].constructor === Function || obj[key] === undefined){
					return '{}';
				}
			}

			arr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
		}
		return '{' + arr.join(",") + '}'
	}
}

    