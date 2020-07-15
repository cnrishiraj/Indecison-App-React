class Person{
    
    constructor(name='ssr',age='0'){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        return `Hi buddy, I am ${this.name}`;
    }
    getAge(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {

    constructor(name,age,branch){
    super(name,age);
    this.branch=branch;
}
hasbranch(){
    return !!this.branch;
}
getAge(){
    let ageanddetails = super.getAge();
    if(this.hasbranch()){
        ageanddetails += ` Their major is ${this.branch}`;
    }
    return ageanddetails;
}
}

class Location extends Person{
 
    constructor(name,age,location1){
        super(name,age);
        this.location1=location1;
 }
    getDescription(){
        let description = super.getDescription();
        if(this.location1){
            description += ` I am from ${this.location1}`;
        }
        return description;
    }
}

const Persondetails = new Location('rishi raj',21,'Hyderabad');
console.log(Persondetails.getDescription());

const Persondetails1 = new Location();
console.log(Persondetails1.getDescription());