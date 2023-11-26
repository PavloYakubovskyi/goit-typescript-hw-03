class Key {
  constructor(private signature: number = Math.floor(Math.random() * 10)) {}

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected tenants: Person[];
  protected key: Key;

  constructor(key: Key) {
    this.door = false;
    this.tenants = [];
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("This door is open");
    } else {
      console.log("Incorrect key. This door is still closed");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(key);

house.comeIn(person);

export {};
