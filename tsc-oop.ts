{
  //
  class Person {
    //person_name: string;
    //person_age: number;
    //isActive: boolean;

    // parameter properties
    constructor(
      public person_name: string,
      public person_age: number,
      public isActive: boolean
    ) {
      //this.person_name = person_name;
      //this.person_age = person_age;
      //this.isActive = isActive;
    }

    status() {
      console.log(
        `${this.person_name} is ${this.isActive ? "Online" : "Offline"}`
      );
    }
  }
  //
  const irfan = new Person("Irfanul Amin", 20, true);
  const imdad = new Person("Imdadul Amin", 14, false);

  irfan.status();
  imdad.status();

  // In-heritance

  class PersonWithLaptop extends Person {
    constructor(
      public person_name: string,
      public person_age: number,
      public isActive: boolean,
      public laptop_model: string
    ) {
      super(person_name, person_age, isActive);
      this.laptop_model = laptop_model;
    }

    laptopModel() {
      console.log(`${this.person_name} have ${this.laptop_model} laptop`);
    }
  }

  const john = new PersonWithLaptop("John", 24, false, "XYZ");

  john.laptopModel();
  john.status();

  // In-heritance

  class PersonWithMobile extends Person {
    constructor(
      public person_name: string,
      public person_age: number,
      public isActive: boolean,
      public phone_model: string
    ) {
      super(person_name, person_age, isActive);
      this.phone_model = phone_model;
    }
    mobileModel() {
      console.log(`${this.person_name} have ${this.phone_model} phone`);
    }
  }

  const max = new PersonWithMobile("MAX", 19, true, "IPHONE 11");

  max.mobileModel();
  max.status();
}

{
  // Instance

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound(): void {
      console.log(`${this.name} the ${this.species} makes a sound.`);
    }
  }

  // Child Dog class
  class Dog extends Animal {
    constructor(name: string) {
      super(name, "Dog");
    }

    makeBark(): void {
      console.log(`${this.name} barks: Woof! Woof!`);
    }
  }

  // Child Cat class
  class Cat extends Animal {
    constructor(name: string) {
      super(name, "Cat");
    }

    makeMew(): void {
      console.log(`${this.name} meows: Meow! Meow!`);
    }
  }

  const dog = new Dog("Buddy");
  dog.makeSound();
  dog.makeBark();

  const cat = new Cat("Kitty");
  cat.makeSound();
  cat.makeMew();

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      console.log("It's a dog");
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMew();
      console.log("It's a cat");
    }
  };
}

{
  class BankAccount {
    public name: string; // Public property for the account holder's name
    private _balance: number; // Private property to store the account balance
    readonly id: string; // Readonly property for the unique account ID

    constructor(name: string, initialBalance: number) {
      this.name = name;
      this._balance = initialBalance;
      this.id = this.generateUniqueId();
    }

    // Function to add balance
    addBalance(amount: number): void {
      if (amount <= 0) {
        console.log("Amount must be greater than zero.");
        return;
      }
      this._balance += amount;
      console.log(`Balance successfully added. New balance: $${this._balance}`);
    }

    // Function to see balance
    seeBalance(): void {
      console.log(`Current balance: $${this._balance}`);
    }

    // Function to withdraw balance
    withdrawBalance(amount: number): void {
      if (amount <= 0) {
        console.log("Amount must be greater than zero.");
        return;
      }
      if (amount > this._balance) {
        console.log("Insufficient balance.");
        return;
      }
      this._balance -= amount;
      console.log(
        `Withdrawal successful. Remaining balance: $${this._balance}`
      );
    }

    // Private method to generate a unique ID
    private generateUniqueId(): string {
      return `ID-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    }
  }

  // Example usage
  const account = new BankAccount("John Doe", 1000);
  console.log(`Account created for ${account.name} with ID: ${account.id}`);

  account.seeBalance(); // Check initial balance
  account.addBalance(500); // Add $500
  account.withdrawBalance(300); // Withdraw $300
  account.withdrawBalance(1500); // Attempt to withdraw more than the balance
  account.seeBalance(); // Final balance
}

{
  // getter and setter
  class BankAccount {
    private readonly _id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this._id = id;
      this.name = name;
      this._balance = balance;
    }

    get id(): number {
      return this._id;
    }

    get balance(): number {
      return this._balance;
    }

    set addbalance(amount: number) {
      this._balance = this._balance + amount;
    }
  }
}

{
  // Static
  class Counter {
    static value: number = 0;

    static increment(): void {
      Counter.value++;
    }

    static decrement(): void {
      Counter.value--;
    }
  }
}

{
  // Polymorphism
  class Animal {
    makeSound() {
      console.log("Some generic animal sound");
    }
  }

  class Dog extends Animal {
    makeSound() {
      console.log("Bark");
    }
  }

  class Cat extends Animal {
    makeSound() {
      console.log("Meow");
    }
  }

  const animals = [new Dog(), new Cat(), new Animal()];
  animals.forEach((animal) => animal.makeSound());
}

{
  // interface
  interface TVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements TVehicle {
    startEngine(): void {
      console.log("Car is Starting.");
    }
    stopEngine(): void {
      console.log("Car is Stoping.");
    }
    move(): void {
      console.log("Car is Moving.");
    }
    test(): void {
      console.log("Testing.");
    }
  }

  const Toyata = new Car();
  Toyata.startEngine();
  Toyata.stopEngine();
  Toyata.move();
  Toyata.test();
}
{
  abstract class Vehicle {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    // You can add common functionality here, which will be shared by all vehicles
    fuelEfficiency(): void {
      console.log("Fuel efficiency check.");
    }
  }

  class Car extends Vehicle {
    startEngine(): void {
      console.log("Car is Starting.");
    }

    stopEngine(): void {
      console.log("Car is Stopping.");
    }

    move(): void {
      console.log("Car is Moving.");
    }

    test(): void {
      console.log("Testing Car functionality.");
    }
  }

  const toyota = new Car();
  toyota.startEngine(); // Output: Car is Starting.
  toyota.stopEngine(); // Output: Car is Stopping.
  toyota.move(); // Output: Car is Moving.
  toyota.test(); // Output: Testing Car
}

{
  // encapsulation
  class Car {
    private engineStatus: string = "Off"; // private property

    startEngine(): void {
      this.engineStatus = "On";
      console.log("Engine started.");
    }

    stopEngine(): void {
      this.engineStatus = "Off";
      console.log("Engine stopped.");
    }

    // Getter for private property
    getEngineStatus(): string {
      return this.engineStatus;
    }
  }

  const car = new Car();
  car.startEngine(); // Output: Engine started.
  console.log(car.getEngineStatus()); // Output: On
  car.stopEngine(); // Output: Engine stopped.
}
