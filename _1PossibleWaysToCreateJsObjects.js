//https://github.com/sudheerj/javascript-interview-questions#what-are-the-possible-ways-to-create-objects-in-javascript

//with new
const object = new Object();
 
// output {} 

const object1CreateEmpty = Object.create({});
// output {} 

const objectCreateNull = Object.create(null);
 
// [Object: null prototype] {}

function Person (name){
    this.name = name;
    this.age = 26;
}

const rohit = new Person("rohit");
console.log(rohit);
//Person { name: 'rohit', age: 26 }

class PersonClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const rohitClass = new PersonClass("rohit",26)
console.log(rohitClass);

// A Singleton is an object which can only be instantiated one
// time.
// Repeated calls to its constructor 
//return the same instance and this way one can 
//ensure that they don't accidentally create multiple 
//instances.

var singleton = new (function () {
    this.name = "rohit";
    this.age = 26;
  })();

console.log(singleton);