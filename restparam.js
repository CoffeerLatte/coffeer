function f(x, y, ...a){
	return (x + y) * a.length;
}

console.log(f(1,2));
console.log(f(1, 2, "hello", true, 7));


function f(x,y)
{
	var a = Array.prototype.slice.call(arguments, 2);
	return (x+y)* a.length;
};

console.log(f(1 ,2, "hello", true, 7));

