class Animal {
    Makesound() {
        console.log('Animal make a sound !! ');
    }
}

class dog extends Animal {
    Makesound() {
        console.log('Wof wof');
    }

}

class cat extends Animal {
    Makesound() {
        console.log('Meow moew');
    }
}

let animal : Animal;
animal = new dog();
animal.Makesound()

animal = new cat();
animal.Makesound();