function animal(type, name, sound){
this.type = type;
this.name = name;
this.sound = sound;
}

animal.prototype.say = function (){
console.log(this.sound);
};
animal.prototype.sharedValue = 1;








	const dog = new animal("개","멍멍이","멍멍");
	const cat = new animal("고양이", "나비", "냐옹");

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);

animal.prototype.sharedValue = 2;
console.log(dog.sharedValue);
console.log(cat.sharedValue);
