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

# Private vs Protected Access Specifiers

This document explains the differences between `private` and `protected` access specifiers in object-oriented programming with examples.

## Access Specifiers Overview

Access specifiers determine the visibility and accessibility of class members (properties and methods):

1. **`private`**: Members are only accessible within the class where they are declared.
2. **`protected`**: Members are accessible within the class where they are declared and in any derived (child) classes.

---

## `private` Access Specifier

### Description

- Members declared as `private` are accessible **only within the class** in which they are defined.
- They are **not accessible** in derived (child) classes or from outside the class.
- Used to ensure strong encapsulation and hide internal implementation details.

### Example

```cpp
class Base {
private:
    int privateVar;

public:
    void setPrivateVar(int val) {
        privateVar = val; // Accessible within the class
    }

    int getPrivateVar() {
        return privateVar; // Accessible within the class
    }
};

class Derived : public Base {
    void someFunction() {
        // privateVar is NOT accessible here
    }
};

int main() {
    Base obj;
    // obj.privateVar = 10; // Error: privateVar is private
    obj.setPrivateVar(10); // Access through public setter
    return 0;
}
```

---

## `protected` Access Specifier

### Description

- Members declared as `protected` are accessible **within the class** and in any **derived (child) classes**.
- They are not directly accessible from outside the class.
- Useful for creating extensible class hierarchies where derived classes need access to some base class members.

### Example

```cpp
class Base {
protected:
    int protectedVar;

public:
    void setProtectedVar(int val) {
        protectedVar = val; // Accessible within the class
    }
};

class Derived : public Base {
    void someFunction() {
        protectedVar = 20; // Accessible in derived class
    }
};

int main() {
    Base obj;
    // obj.protectedVar = 10; // Error: protectedVar is protected
    return 0;
}
```

---

## Key Differences

| Feature                          | `private`            | `protected`                      |
| -------------------------------- | -------------------- | -------------------------------- |
| Accessibility in Class           | Yes                  | Yes                              |
| Accessibility in Derived Classes | No                   | Yes                              |
| Accessibility Outside Class      | No                   | No                               |
| Primary Use Case                 | Strong encapsulation | Extensibility in class hierarchy |

---

## When to Use

- Use **`private`** for members that should remain completely hidden from derived classes and outside the class.
- Use **`protected`** for members that derived classes should have access to, but should remain hidden from external entities.

---

## Notes

- These concepts apply to many object-oriented programming languages, including C++, Java, and others.
- Accessibility rules might slightly vary between languages, so consult the documentation of the language you're using.

---

## Related Topics

- [Encapsulation](<https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)>)
- [Inheritance](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>)

# TypeScript OOP Concepts - Code Examples

This repository contains a series of examples demonstrating key Object-Oriented Programming (OOP) concepts in TypeScript.

Concepts Covered

## 1. Classes and Constructors

Basic class structure with constructor properties.
Example: Person class with name, age, and active status.

## 2. Inheritance

Using extends to inherit properties and methods from a base class.
Example: PersonWithLaptop and PersonWithMobile inherit from Person.

## 3. Encapsulation

Using private, public, and readonly access modifiers to restrict access to class properties.
Example: BankAccount class with private balance and public methods for transactions.

## 4. Getters and Setters

Using getter and setter methods to control access to private or protected properties.
Example: BankAccount with a getter for balance and setter for adding balance.

## 5. Static Methods

Using static methods and properties for values shared across all instances of the class.
Example: Counter class with static increment and decrement methods.

## 6. Polymorphism

Overriding methods in subclasses to provide specialized behavior.
Example: Dog and Cat subclasses overriding the makeSound method from Animal class.

## 7. Interfaces

Defining contracts that classes must adhere to using interfaces.
Example: TVehicle interface with methods for starting, stopping, and moving a vehicle.

## 8. Abstract Classes

Creating base classes that cannot be instantiated and must be extended by subclasses.
Example: Vehicle abstract class with common methods for derived classes.

## 9. Encapsulation

Restricting access to sensitive data with private methods and properties.
Example: Car class with private engineStatus property and public methods for controlling the engine.

# Notes 📝

# OOP Concepts - Summary Chart

| **Concept**       | **Short Statement**                                                                      | **Usage**                                                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Polymorphism**  | Ability to use a unified interface for different underlying forms.                       | Overriding methods in subclasses to provide specific behavior (e.g., `makeSound()` in `Dog` and `Cat` classes).                       |
| **Encapsulation** | Hiding the internal state and requiring all interaction to be performed through methods. | Using private properties and getter/setter methods to manage data (e.g., private `_balance` in `BankAccount`).                        |
| **Abstraction**   | Hiding complex implementation details and showing only essential features.               | Defining abstract methods in base classes and letting subclasses implement specific behavior (e.g., `Vehicle` with abstract methods). |
| **Inheritance**   | A class can inherit properties and methods from another class.                           | Creating base classes and extending them to share common functionality (e.g., `Person` class being extended by `PersonWithLaptop`).   |
