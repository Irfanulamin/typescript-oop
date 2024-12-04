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
}
