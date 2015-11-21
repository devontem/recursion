// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

	var node = document.body;
	var nodes = node.childNodes;
	var collection = [];

	// checking body for classNames
	if (node.attributes.class.value.indexOf(className) >= 0){
		collection.push(node);
	}


	// function to search through an array of nodes
	var search = function(arr){
		for (var i = 0 ; i < arr.length; i++){

			// checks if node has children, then recursively checks children
			if (arr[i].hasChildNodes()){
				search(arr[i].childNodes);

			}

			//checks if node has the desired class name
			if (arr[i].attributes != undefined && arr[i].attributes.class != undefined){
				if (arr[i].attributes.class.value.indexOf(className) >= 0){
					collection.push(arr[i]);
				}
			}
		}
	};

	search(nodes);
	return collection;
}

 
