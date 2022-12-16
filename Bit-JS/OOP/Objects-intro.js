//Create an object that represents your favourite coffee. Please include coffee name,
//strength, flavour, milk, sugar, … everything you like!

function napraviObj() {
    return coffee = {
        name: "turkish coffee",
        strenght: "strong",
        flavour: "pure coffee",
        milk: "no",
        sugar: "yes"
    }
};
console.log(napraviObj());

//Create an object that represents your favourite movie. Please include title, actors,
//director, genre, popularity.

var favoriteMovie = {
    title: " The Shawshank Redemption",
    actors: {
        firstActor: "Tim Robbins",
        secondActor: "Morgan Freeman",
    },
    director: "Frank Darabont",
    genre: "Drama",
    popularity: 97
};
console.log(favoriteMovie);

//Write a function that creates an object that represents a project. Each project is
//described by: description, programming language, git repository, boolean status that
//says if the project is in development or not. Add a method that prints out the project&#39;s
//repository, a method that checks if the project is written in JavaScript as well as a
//method that checks if the project is in development or not.

function projects(description, programingLang, gitRepository, isDevelopment) {
    this.descrip = description;
    this.progrLang = programingLang;
    this.git = gitRepository;
    this.develop = isDevelopment;
    this.printanje = function printOut() {
        console.log("Git repository is " + this.git);
    };
    this.checkLang = function isJS(programingLang) {
        if (programingLang == "JavaSript") {
            console.log("Programming language is JavaScript")
        } console.log("programming Language is not JavaScript");
    };
    this.developStage = function isDevelop(develop) {
        if (develop == true) {
            console.log("Project is in development");
        } console.log("project is not in development");
    };

}

var project1 = new projects("AplikacijaTel", "JavaSript", "ApliRepository", true);
console.log(project1);
var project2 = new projects("AplikacijaCar", "PHP", "CarApp", false);

projects.printanje = function printOut() {
    console.log("Git repository is " + project1.git);
}

projects.checkLang = function isJS(param) {
    if (param == "JavaSript") {
        console.log("Programming language is JavaScript")
    } console.log("programming Language is not JavaScript");
}

projects.developStage = function isDevelop(param) {
    if (param == true) {
        console.log("Project is in development");
    } console.log("project is not in development");
}

projects.checkLang();
console.log(project1);


// ovako treba uraditi //
function makeProject() {
    return  {
        description: "AplikacijaTel",
        programingLang: "JavaSript",
        gitRepository: "ApliRepository",
        isDevelopment: true,
        printanje: function printOut() {
            console.log("Git repository is " + project1.gitRepository)
        },
        checkLang: function isJS(param) {
            if (param == project1.programingLang) {
                console.log("Programming language is JavaScript")
            } else { console.log("programming Language is not JavaScript"); }
        },
        developStage: function isDevelop(param) {
            if (param == project1.isDevelopment) {
                console.log("Project is in development");
            } else { console.log("project is not in development") };
        }
    }
}
var project1 = makeProject();


console.log(project1.checkLang("JavaScript"));
//Write a function that creates an object that represents a culinary recipe. Each recipe is
//described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
//preparing time, preparing instruction.
//○ Add a method that prints out all the ingredients necessary for the meal
//preparation.
//○ Add a method that checks if a meal can be prepared in under 15 minutes.
//○ Add a method that changes the type of cuisine to the given value.
//○ Add a method that delete a given ingredient from the list of ingredients.

function recepies(pname, pCusineT, pComplexity, pIngredList, pPreparingTime, pPreparingInst) {
    this.name = pname;
    this.typeOfCusine = pCusineT;
    this.complexity = pComplexity;
    this.listOfIngrediens = pIngredList;
    this.preparingTime = pPreparingTime;
    this.preparingInstructions = pPreparingInst

}

var recepy1 = new recepies("Moussaka", "mediterian", 3, ["potato", "salt", "pepper", "onion", "minced meat", "eggs", "water"], 70,
    ["Peel the potatoes, cut them into slices 2-3 mm thick and put them in a bowl. Add 2 tablespoons of oil and a tablespoon of salt, and mix everything well.",
        "At this point, the oven can already be turned on to heat up to 225°C", "In another container, mix the minced meat with a teaspoon of pepper, a teaspoon of salt and finely chopped onion. Mix everything, then add 4 tablespoons of oil and 8 tablespoons of water. Mix well again.",
        "And finally, the last dish - beat 4 eggs, pour in a cup of milk and a tablespoon of flour, and mix everything well - preferably with a mixer.",
        "A fireproof container of approx. Grease a 35x25cm dish with margarine or olive oil, and cover the bottom and sides of the dish with potato slices",
        "Now comes the turn of meat, then the turn of potatoes, then again the turn of meat, then the turn of potatoes.Pour the beaten egg mixture over this structure.",
        "Bake the moussaka for about 40 minutes at 225°C until it is nicely browned, sizzling and fragrant, that is, until it starts to form bubbles  on the surface."])

function IngPrints() {
    console.log("Lista sastojaka " + recepy1.listOfIngrediens);
}

function lessTime(param, min) {
    if (param > min) {
        return ("The meal can not be prepared in " + min + "min");
    } return ("the meal can be prepared in less that " + min + "min");
}

var timePrepare = lessTime(recepy1.preparingTime, 15);
console.log(timePrepare)

function changeType(name, param) {
    return name = param;
}
var newName = changeType(recepy1.name, "turkish");
console.log(newName);

function deleteItem(list, param) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] == param) {
            delete list[i];
        }
    } return list;
}

var lista = deleteItem(recepy1.listOfIngrediens, "salt");
console.log(lista);

//ovako treba uraditi
function makeRecepies() {
    return recepy1 = {
        name: "Moussaka",
        typeOfCusine: "mediterian",
        complexity: 3,
        listOfIngrediens: ["potato", "salt", "pepper", "onion", "minced meat", "eggs", "water"],
        preparingTime: 70,
        preparingInstructions: ["Peel the potatoes, cut them into slices 2-3 mm thick and put them in a bowl. Add 2 tablespoons of oil and a tablespoon of salt, and mix everything well.",
            "At this point, the oven can already be turned on to heat up to 225°C", "In another container, mix the minced meat with a teaspoon of pepper, a teaspoon of salt and finely chopped onion. Mix everything, then add 4 tablespoons of oil and 8 tablespoons of water. Mix well again.",
            "And finally, the last dish - beat 4 eggs, pour in a cup of milk and a tablespoon of flour, and mix everything well - preferably with a mixer.",
            "A fireproof container of approx. Grease a 35x25cm dish with margarine or olive oil, and cover the bottom and sides of the dish with potato slices",
            "Now comes the turn of meat, then the turn of potatoes, then again the turn of meat, then the turn of potatoes.Pour the beaten egg mixture over this structure.",
            "Bake the moussaka for about 40 minutes at 225°C until it is nicely browned, sizzling and fragrant, that is, until it starts to form bubbles  on the surface."],
        printanje: function IngPrints() {
            console.log("Lista sastojaka " + recepy1.listOfIngrediens);
        },
        time: function lessTime(param, min) {
            if (param > min) {
                return ("The meal can not be prepared in " + min + "min");
            } return ("the meal can be prepared in less that " + min + "min");
        },
        changeName: function changeType(name, param) {
            return name = param;
        },
        deleteItem: function deleteItem(list, param) {
            for (var i = 0; i < list.length; i++) {
                if (list[i] == param) {
                    delete list[i];
                }
            } return list;
        }
    }
};


console.log(makeRecepies().time(makeRecepies().preparingTime), 15); 