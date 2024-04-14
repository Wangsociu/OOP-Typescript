class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    // Getter cho thuộc tính _balance
    get balance(): number {
        return this._balance;
    }

    // Setter cho thuộc tính _balance
    set balance(newBalance: number) {
        if (newBalance >= 0) {
            this._balance = newBalance;
        } else {
            console.log("Invalid balance. Balance must be non-negative.");
        }
    }

    deposit(amount: number) {
        this.balance += amount;
        console.log(`Deposited ${amount} dollars.`);
    }

    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} dollars.`);
        } else {
            console.log("Insufficient funds.");
        }
    }
}

let account = new BankAccount(1000);
console.log(account.balance); // Output: 1000
account.deposit(500); // Output: Deposited 500 dollars.
console.log(account.balance); // Output: 1500
account.withdraw(2000); // Output: Insufficient funds.
console.log(account.balance); // Output: 1500
account.balance = -100; // Output: Invalid balance. Balance must be non-negative.
console.log(account.balance); // Output: 1500
