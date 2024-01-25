var value = "hello";

function myFunction(){

	var value = "bye";

	if(true){
		var value = "world";
		console.log("block scope: "+value);
	}

	console.log("Function scope: "+value);
}

myFunction();

console.log("global scope: "+value);
