//for example: S, M, L, XL

const SMS="S";

switch(SMS){
    case "S":
        console.log("You have purchased a 100MB internet package");
        break;
    case "M":
        console.log("You have purchased a 300MB internet package");
        break;
    case "L":
        console.log("You have purchased a 500MB internet package");
        break;
    case "XL":
        console.log("You have purchased a 1GB internet package");
        break;
    default:
        console.log("The internet package for your request is not available");
}