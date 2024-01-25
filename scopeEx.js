const value = "hello";

function myfunction() {

	console.log("myfunction: "+value);
}

function otherfunction() {
	const value = "bye";
	console.log("otherfunction: "+value);
}

myfunction();
otherfunction();

console.log("global scope: "+value);
