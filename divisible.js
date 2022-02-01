var user=require("readline-sync");
var user=user.questionInt("enter the num");
if (user%2===0){
    console.log("divisible")
}else{
    console.log("not divisible")
}