var a=require("readline-sync")
var n=a.questionInt("enter the number")
const i=1

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}



var a=require("readline-sync")
var n=a.questionInt("enter the number")
const i=1
for (let i=1; i<=n; i++){
    console.log(i)
}


var a=require("readline-sync")
var n=a.questionInt("enter the number")
let sum=0
const i=1
for (let i=1; i<=n; i++){
    sum=sum+i
console.log(sum)
}
console.log(sum)




var a=require("readline-sync")
var n=a.questionInt("enter the number")
let sum=0
const i=1
for (let i=n; i>=1; i--){
    sum=sum+i
console.log(sum)
}
console.log(sum)



for(var n=9; n>0; n--){
    console.log(n)
}




const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
for (let i=name.length-1;i>=0;i--) {
   string=string+name[i]
}
console.log(string)
if (store===string) {
   console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")
}



var n=require("readline-sync");
const num=n.questionInt("enter number: ");
var i=2
while (i<num){
    if(num%i==0){
        console.log(num,"not prime number")
        break
    }
    i= i+1

}
console.log(num,"prime number")


 

console.log(num,"prime number")
else{
    console.log(num,"praim number");
}  

for (var i=0;i<10;){
    console.log(i)
}


