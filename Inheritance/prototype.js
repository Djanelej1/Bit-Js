// Employeer and Managers


function Person (name, surname) {
    this.name= name;
    this.surname = surname;
   }
   
   Person.prototype.fullname = function(){
       return `$(this.name) $(this.surname)`;
   }
   Employee.prototype = Object.create(Person.prototype);
   Employee.prototype.constructor = Employee; 
   
   function Employee (name, surname, job, salary){
       Person.call(this, name, surname);
       this.job = job;
       this.salary = salary; 
   }
   
   
   Employee.prototype.getData = function(){
       return Employee.fullname();
   }
   Employee.prototype.getSalary = function(){
       return this.salary;
   }
   Employee.prototype.increaseSalary = function (){
       return this.salary + (this.salary * 0.1); 
   }
   
   var person = new Person("Petar ", "Petrovic", );
   var employee = new Employee("Petar ", "Petrovic","radnik" ,2500);
   console.log(person);
   console.log(employee, employee.increaseSalary());
   
   
   Developer.prototype = Object.create(Employee.prototype);
   Developer.prototype.constructor = Developer; 
   
   function Developer (name, surname, job,salary,specialization){
       Employee.call(this, name, surname, job, salary);
       this.specialization = specialization;
   }
   
   Developer.prototype.getSpecialization = function(){
       return this.specialization.value;
   }
   
   Manager.prototype = Object.create(Employee.prototype);
   Manager.prototype.constructor = Manager;
   
   function Manager (name, surname, job, salary, department){
       Manager.call(this, name, surname, job, salary);
       this.department = department; 
   }
   
   Manager.prototype.getDepartment = function(){
       return this.department.value; 
   }
   
   Manager.prototype.changeDepartment = function(str){
       if (str == "yes"){
           return "this manager has changed department"
       } else {return "this manager has not changed departement"}
   }
   
   var developer = new Developer ("Janko", "Jankovic", "developer", 3000, "Databases");
   var manager = new Manager ("Jovan", "Jovanovic", "manager", 2851, "PR");
   
   console.log(developer.increaseSalary());
   console.log(manager.increaseSalary());
   
//Applications

function Application(name, licence, star){
    this.name = name; 
    this.licence = licence;
    this.star = star; 

}
Application.prototype.getData = function(){
    return this.name +", " + this.licence + ", " +  this.star; 
}

Application.prototype.isCCLicence = function(){
    if (this.technologies == "CC"){
        return "this is CC";
    }else { return "it's not CC"}
}

Application.prototype.like = function(){
    return this.star +1;
}

Application.prototype.showStars = function(){
    return this.star.value;
}

WebApp.prototype = Object.create(Application.prototype);
WebApp.prototype.constructor = WebApp; 
function WebApp(name, licence, star, url, technologies){
    WebApp.call(this,name, licence, star)
    this.url = url; 
    this.technologies = technologies;
}

WebApp.prototype.getData = function(){
    return Application.prototype.getData() +","+ this.url + "," + this.technologies;
}

WebApp.prototype.reactBased = function(){
    if (this.technologies == "React"){
        return "this is React based";
    }else { return "it's not React based"}
}

MobileApp.prototype = Object.create(Application.prototype);
MobileApp.prototype.constructor = MobileApp; 
function MobileApp(name, licence, star, platforms){
    MobileApp.call(this, name, licence, star)
    this.platforms = platforms;
}

MobileApp.prototype.getData = function(){
    return Application.prototype.getData() +  " ," + this.platforms;
}
MobileApp.prototype.forAndroid = function(){
    if (this.platforms == "Android"){
        return "this is Android";
    }else { return "it's not Android"}
}


var app = new Application("Mobi", "CC", 5);
var webApp = new WebApp("StarWars", "CC", 14, "www.nesto.com", "React");
var mobileApp = new MobileApp("MobiClick","BB", 7, "Android");

console.log(mobileApp.showStars());
console.log(webApp.like());


