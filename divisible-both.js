var user=require("readline-sync");
var user=user.questionInt("enter the num");
if (user%5===0 && user%15===0){
    console.log("divisible by both")
}else{
    console.log("not divisible")
}