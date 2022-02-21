var a=require("readline-sync")
var num=a.questionInt("enter the number")
var i=1
while(i<=num){
    if(num>0){
        console.log("positive number")
    }
    else if(num<0){
        console.log("negutive number")
    }
    else{
        console.log("zero")
    }
    i=i+1
}

