// prvi zadatak
var broj = 8;
var result = "";

switch (broj) {
    case 1:
        result = "Ponedeljak";
        break; 
    case 2:
        result = "Utorak";
        break;
    case 3:
        result = "Sreda";
        break;
    case 4:
        result = "Cetvrtak";
        break;
    case 5:
        result = "Petak";
        break;
    case 6:
        result = "Subota";
        break;
    case 7:
        result = "Utorak";
        break;
    default:
        result = "Zadati broj mora biti izmedju 1 i 7"
}
console.log (result);

//drugi zadatak
var broj = 8;
var result = "";

switch (broj) {
    case 1:
        result = "Ponedeljak";
        break; 
    case 2:
        result = "Utorak";
        break;
    case 3:
        result = "Sreda";
        break;
    case 4:
        result = "Cetvrtak";
        break;
    case 5:
        result = "Petak";
        break;
    case 6:
        result = "Subota";
        break;
    case 7:
        result = "Utorak";
        break;
    default:
        result = "Zadati broj mora biti izmedju 1 i 7"}
        console.log (result);

//treci zadatak
var broj =7;
switch (broj) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: 
        result = " it's weekday";
        break;   
    case 6:
    case 7:
        result = "It's weekend";
        break;
    default:
        result = "Zadati broj mora biti izmedju 1 i 7"}
        console.log (result);
 //cetvrti zadatak
 var broj =7;
switch (broj) {
    case 1:
        result = " Januar";
        break; 
    case 2:
        result = "Februar";
        break;
    case 3:
        result = "Mart";
        break;
    case 4:
        result = "April";
        break;
    case 5:
        result = "Maj";
        break;
    case 6:
        result = "Jun";
        break;
    case 7:
        result = "Jul";
        break;
    case 8:
        result ="Avgust";
        break;
    case 9:
        result ="Septembar";
        break;
    case 10:
        result ="Oktobar";
        break;
    case 11:
            result ="Novembar";
            break;
    case 12:
        result ="Decembar"
        break;
    default:
        result = "Zadati broj mora biti izmedju 1 i 12"}
        console.log (result);

//Peti zadatak
var broj = 11;
var result  =""; 
switch (broj){
    case 1:
    case 2:
    case 12:
        result = "It's winter";
    break;
    case 3:
    case 4:
    case 5:
        result = "it's spring";
    break;
    case 6:
    case 7:
    case 8:
        result = "It's summer"
    break;
    case 9:
    case 10:
    case 11:
        result = "It's autumn";
    break;
    default:
        result ="Zadati broj mora biti izmedju 1 i 12";

}
console.log (result);

//sesti zadatatk
var ocena = "A";
result ="";
switch (ocena){
    case "A":
        result ="Good job";
        break;
    case "B":
            result ="Pretty good";
            break;
    case "C":
                result ="Passed";
                break;
    case "D":
                result ="Not so good";
                break;  
    case "F":
                result ="Failed";
                break;
    default :
     result = "unknown grade"
    
}
 console.log (result);

 //sedmi zadatak
 var city = "Ljubljana";
 var country ="";
 switch (city){
    case "Beograd":
    case "Smederevo":
    case "Novi Sad":
        result ="Srbija"
        break;

    case "Amsterdam":
    case "Hag":
    case "Roterdam":
        result ="Holandija";
        break;

    case "Prag":
    case "Brno":
    case "Ostrava":
        result ="Ceska";
        break;
    
    case "Berlin":
    case "Lajpcig":
    case "Bon":
        result ="Nemacka";
        break;

    case "Zadar":
    case "Zagreb":
    case "Split":
        result ="Hrvatska";
        break;
    
        default: 
        result ="Please choose a different city";
 } console.log (result);

 // osmi zadatak

 var broj1 =36;
 var broj2 =0;
 var operacija = "/";
 var result;

 switch (operacija) {
    case "+":
        result = broj1 +broj2;
        
        break;
    case "-":
        result = broj1-broj2;
        break;
    case  ((broj1==0 || broj2==0) && "*" && "/"):
            result = 0 ;
            break;
    case "*":
    case (broj1!=0 && broj2!=0):    
        result = broj1 *broj2;
        break;
    case "/" :
    case (broj1!=0 && broj2!=0):
        result = broj1/broj2;
        break;
    
    default :
      console.log ("izaberite drugi broj");
        
 }
 console.log (result);
