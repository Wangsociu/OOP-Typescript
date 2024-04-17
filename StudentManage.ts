class Student {
    Name: string;
    Age: number;
    Gender: string;
    Major: string;

    constructor(Name: string, Age: number, Gender: string, Major: string) {
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Major = Major;
    }

    displayInfo(): void {
        console.log (`Name: ${this.Name}, Age: ${this.Age}, Gender: ${this.Gender}, Major: ${this.Major}`);
    }
}


class StudentManager {
    students: Student[]; 

    constructor() {
        this.students = [];
    }   

    addStudent(student:Student): void {
        this.students.push(student);
    }

    displayAllstudent(): void {
        console.log(">>> List of Student");
        this.students.forEach(student => {
            student.displayInfo();
        });
    }
}


let student1 = new Student("John Doe", 20, "Male", "Computer Science");
let student2 = new Student("Jane Smith", 21, "Female", "Engineering");
let student3 = new Student("Lung Thi Linh", 18, "Male", "Doctor");

let manager = new StudentManager();
manager.addStudent(student1);
manager.addStudent(student2);
manager.addStudent(student3);

manager.displayAllstudent();