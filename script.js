//complete this code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Getter for name
  get name() {
    return this.name;
  }

  // Getter for age
  get age() {
    return this.age;
  }

  // Setter for age
  set age(newAge) {
    this.age = newAge;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
