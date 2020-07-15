//car =>make model vin 
//get description 
/*class Person {
constructor(name='Anonymous') {
    this.name=name;
}
getgreetings() {
    return `Hi buddy, I am ${this.name}!`;
}
}

const me = new Person('rishi raj');
console.log(me.getgreetings());

//if nothing there  as argument test is printed in the console 
const me1 = new Person();
console.log(me1.getgreetings());*/


//challenge

class Person{
    
    constructor(name='ssr',age='0'){
        this.name=name;
        this.age=age;
    }
    getAge(){
        return `${this.name} is ${this.age} years old`;
    }
}
const Persondetails = new Person('rishi raj',21);
console.log(Persondetails.getAge());

const Persondetails1 = new Person();
console.log(Persondetails1.getAge());