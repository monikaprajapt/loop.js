){
    i=i*num
num=num-1    
    console.log("factorial",i)
}




// // // reverse number

var a=require("readline-sync")
var num=a.questionInt("enter the number")
var rev=0
while (num>0){
    rev=(rev*10)+(num%10)
    num=Math.floor(num/10)
    console.log("revers",rev)
}





// // 1 se 100 tak prime number

for(n=1; n<=100; n++){
    var notprime=false;
    for(i=2; i<=n; i++){
        if(n%i==0 && i!=n){
            var notprime=true;
        }
    }
    if(notprime==false){
        console.log(n)
    }
}






var a=require("readline-sync")
var num=a.questionInt("enter the number")
for (i=1; i<=num; i++){
    if (num%i===0){
        console.log(i)
    }    
}



// factorial Number
var a=require("readline-sync")
var num=a.questionInt("enter the number")
for(i=1; num>=0; i--){
    i=i*num
    console.log("factorial",i)
}
i=1
while(num>=0











// //    prime number



var a=require("readline-sync")
var num=a.questionInt("enter the number")
var b=0
for(i=2; i<num; i++){
    if (num%2==0){
        b=1;
        break;
    }
}
if (b==0){
    console.log("prime number")
}
else{8
    console.log("not prime number")
}


var a=require("readline-sync")
var num=a.questionInt("enter the number")
var x=0
var y=1
var z=0
while (z<=num){
    console.log(z)
    x=y
    y=z
    z=x+y
}



for(i=0; i<=5;i++){
    if(i%2==0){
        console.log("-",i**2,end="")        
    }
    else{
        console.log("+",i**2,end="")
    }
}








 

