const value = "hello";

function myFunction(){

	const value = "bye";

	if(true){
		const value = "world";
		console.log("block scope: "+value);
	}

	console.log("Function scope: "+value);
}

myFunction();

console.log("global scope: "+value);
