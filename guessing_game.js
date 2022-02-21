var c=require("readline-sync")
var a=5
var i=0
while(i<5){
    var b=c.questionInt("enter the number")
    if (a==b){
        console.log("winer")
        break
    }
    else{
        console.log("you loos")
    }
}


var a=require("readline-sync")
var b=a.questionInt("enter the number")
c=["zero","one","two","three","four","five","six","seven","eight","nine"]
var i=0
n=[]
while(i<c.length){
    v=c[i]
    n[i]=b[i]
console.log(n)
}

