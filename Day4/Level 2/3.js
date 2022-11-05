/*Check if a day is weekend day or a working day. Your script will take day as an input. 
     What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/


let day = "sATurday"
let res = day.toLowerCase();


switch(res){
    case "monday":
    case "tuesday":   
    case "wednesday":
    case "thursday":
    case "friday":
    console.log("Weekday")
    break;
    
    case "saturday":
    case "sunday":
    console.log("Weekend")
    break;        
}
