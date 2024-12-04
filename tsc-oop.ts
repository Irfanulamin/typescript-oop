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
