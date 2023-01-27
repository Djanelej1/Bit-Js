// Employer and manager

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return this.name + "," + this.surname;
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getFullName() {
        return this.getFullName();
    }
    getSalary() {
        return this.salary;
    }
    increaseSalary() {
        return this.salary + (this.salary * 0.1)
    }
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecalization() {
        return this.specialization.value;
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getSpecalization() {
        return this.department;
    }
    changeDepartment(str) {
        if (str == "yes") {
            return "this manager has changed department"
        } else { return "this manager has not changed departement" }
    }
}

var person = new Person("Petar ", "Petrovic",);
var employee = new Employee("Petar ", "Petrovic", "radnik", 2500);
console.log(person);
console.log(employee, employee.increaseSalary());

var developer = new Developer("Janko", "Jankovic", "developer", 3000, "Databases");
var manager = new Manager("Jovan", "Jovanovic", "manager", 2851, "PR");

console.log(developer.increaseSalary());
console.log(manager.getSalary());


// Applications 
class Application {
    constructor(name, licence, star) {
        this.name = name;
        this.licence = licence;
        this.star = star;

    }
    getData() {
        return this.name +" " +this.licence+ " " +this.star; 
    }
    like() {
        return (this.star+1);
    }

    showStars() {
        return this.star;
    }

    isCCLicence() {
        if (this.technologies == "CC") {
            return "this is CC";
        } else { return "it's not CC" }
    }
}

class WebApp extends Application {
    constructor(name, licence, star, url, technologies) {
        super(name, licence, star);
        this.url = url;
        this.technologies = technologies;
    }
    getData() {
        return super.getData() ;
    }

    reactBased() {
        if (this.technologies == "React") {
            return "this is React based";
        } else { return "it's not React based" }
    }
    
}
class MobileApp extends Application {
    constructor(name, licence, star, platforms) {
        super(name, licence, star);
        this.platforms = platforms;
    }
    getData() {
        return super.getData();
    }
    forAndroid() {
        if (this.platforms == "Android") {
            return "this is Android";
        } else { return "it's not Android" }
    }
    
}

var app = new Application("Mobi", "CC", 5);
var webApp = new WebApp("StarWars", "CC", 14, "www.nesto.com", "React");
var mobileApp = new MobileApp("MobiClick","BB", 7, "Android");

console.log(mobileApp.showStars());
console.log(webApp.getData());
console.log(app.getData());



