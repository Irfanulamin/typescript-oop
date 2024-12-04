# typescript-oop

**"Learning TypeScript OOP with hands-on practice! Check out my GitHub repository for projects and examples."**

Would you like to tweak it further? Also, feel free to share your repo link if you want to include it. 😊

```
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

```

This TypeScript example demonstrates OOP concepts using a Person class with parameter properties for cleaner code. The class includes a status method to display a person's online/offline status. Check it out!
