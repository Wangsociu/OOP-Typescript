class ID {
    public name: string;

    constructor (name:string){
        this.name = name
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

let _ID = new ID('CHICHI');
_ID.displayInfo();