class Student{
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.course = [];
    }
    enrollCourse(course){
        this.course.push(course); 
    }
    showCourses(){
        console.log(`${this.name}'s enrolled courses: ${this.course}`)
    }
}

class Admission{
    constructor(){
        this.students = [];
    }
    enrollStudent(student){
        this.students.push(student)
        console.log(`${student.name} has been enrolled`);
    }
    assignCourse(student,course){
        student.enrollCourse(course);
        console.log(`${student.name} has enrolled in ${course}`);
    }
    showEnrolledStudents(){
        console.log("Enrolled Students:");
        for (const student of this.students) {
            console.log(`- ${student.name} (${student.email})`);
        }
    }

}

const admissionOffice = new Admission();

const student1 = new Student("sandeep","sandeep@fb.com");
const student2 = new Student("rohit","rohit@fb.com");

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

admissionOffice.assignCourse(student1,'Full Stack Web Development');
admissionOffice.assignCourse(student2,'Data Science Masters');

student1.showCourses();
student2.showCourses();

admissionOffice.showEnrolledStudents()

