class Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    sound(): void {
        console.log("Animal makes a sound");
    }
}


class Cat extends Animal {
    breed : string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed 
    }

    sound(): void {
        console.log("Meow! Moew");
    }

    bark(): void {
        console.log(`${this.name} the ${this.breed} is barking. `);
    }
}

let myCat = new Cat("Tailung","mướp");

myCat.sound();
myCat.bark();