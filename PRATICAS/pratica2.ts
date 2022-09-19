class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayName(){
        console.log(this.name);
    }
}
const person = new Person("Jane");
person.displayName()