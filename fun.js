var two = function(){
	return 2;
}

var caller = function(t){
	return t();
}


caller(two);

var t = function(){

	return two;

}
