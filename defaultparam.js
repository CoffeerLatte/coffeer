function calcDefaultValue(a = "", b=a==1 ? 2:3){
	console.log(a,b);
}
calcDefaultValue(1);
calcDefaultValue(2);
