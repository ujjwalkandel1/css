 function Person(name){
    this.name = name
 }

 Person.prototype.greet = function(){
    console.log(`Hello, My name is ${this.name}`);
 }

 let hitesh = new Person("ujjwal");
 hitesh.greet();