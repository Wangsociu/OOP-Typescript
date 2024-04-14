class ID {
   // public name: string;
    protected age: number;

    constructor (age:number) {
      // this.name = name;
        this.age = age;
    }
}

class _ID extends ID {
    private IQ: number;

    constructor(age: number, IQ: number) {
        super(age);
        this.IQ = IQ;
    }

    public displayInfo() {
        console.log(`>> Check: ${this.age} ${this.IQ}`);
    }
}
let __ID = new _ID(19,150);

__ID.displayInfo();
//console.log(__ID.age)  error -> protected