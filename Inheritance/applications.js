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
