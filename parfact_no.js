var a=require("readline-sync")
var b=a.questionInt("enter the number")
var sum=0
var i=1
var d=b
while(i<b){
    if(b%i==0){
        sum=sum+i   
    }
    i=i+1
}
if (d==sum){
    console.log("perfact number")
}
else{
    console.log("not perfact")
}



var a=require("readline-sync")
var b=a.questionInt("enter the number")
var orig=b
var sum=0
while(b>0){
    sum=sum+(b%10)*(b%10)*(b%10)
    b=Math.floor(b/10)    
}
if (orig==sum){
    console.log("hai")
}
else{
    console.log("not")
}


