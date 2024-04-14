class ID {
    public name: string;
    private age: number;

    constructor (name:string,age:number) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`ID: ${this.name} ${this.age}`);
    }
}
let _ID = new ID('CHI',19);
//console.log(_ID.age); error -> private age
_ID.displayInfo();