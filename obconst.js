function animal(type, name, sound){
this.type = type;
this.name = name;
this.sound = sound;
this.say = function(){
	console.log(this.sound);
};

// const gubun = "동물";

// var gubun = "동물";
this.구분 = "동물";
}

	const dog = new animal("개","멍멍이","멍멍");
	const cat = new animal("고양이", "나비", "냐옹");

dog.say();
cat.say();

console.log(dog.구분);
