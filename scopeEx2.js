const value = "hello";

function myFunction(){
	const value = "bye";
	const anothervalue = "world";

	function functionInside(){

		console.log("functionInside: "+value+"anothervalue: "+anothervalue);
	}

	functionInside();
}

 myFunction();

console.log("global scope: " + value+ "another value : "+ anothervalue);
