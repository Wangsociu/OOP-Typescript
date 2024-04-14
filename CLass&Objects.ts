class car {
    make: string;
    model: string;

    constructor (make:string, model:string) {
        this.make = make ;
        this.model = model ;
    }

    displayInfo() {
        console.log(`Car: ${this.make}  ${this.model}`);
    }
}

let myCar = new car('TOYOYA','COROLLA')
console.log(myCar.make);
console.log(myCar.model);
myCar.displayInfo();