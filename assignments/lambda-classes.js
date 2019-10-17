// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location
    }
    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(insAttr) {
        super(insAttr);
        this.speciality = insAttr.specialty;
        this.favLanguage;
        this.catchPhrase
    }
    demo() {
        return `Today we are learning about ${subject}.`;
    }
    grade() {
        return `${student.name} receives a perfect scor on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects
    }
    // listsSubjects() { //placeholder for now

    // };
    PRAssignment() {
        return `${student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

