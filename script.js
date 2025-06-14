//complete this code
class Person {
 	constructor(name , age){
		this.name = name ;
		this.age = age;
	}
	get Name(){
		return this.name;
	}
	set Age(Newage){
		this.age =30;
	}
}

class Student extends Person {
  	study(){
		console.log(`${student.name} is studying`);
	}
}

class Teacher extends Person {

	teach(){
		console.log(`${teacher.name} is studying`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
