class Animal{
	constructor(type, name, sound){
	this.type = type;
	this.name = name;
	this.sound = sound;
}
	say(){
	console.log(this.sound);
}
}


const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "냐옹이", "냐옹");

dog.say();
cat.say();
