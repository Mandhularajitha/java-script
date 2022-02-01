
// var user=require("readline-sync")
// console.log(1=="1")   //true type theskuntade
// console.log(1==="1")   //false type convert chayadu

//if else If this number is less than 10 then print "number is less than 10". If it is greater than 10 and less than 20 then print "number is less than 20". Else if it is greater than 20 then print "greater tha

var user=require("readline-sync")
var user=user.questionInt("enter the age")
if (user<10){
    console.log("number is less than 10")
}else if(user>10 && user<20){
    console.log("number is less than 20")
}
else
{
console.log("grater than 20")
}