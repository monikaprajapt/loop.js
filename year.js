var a=require("readline-sync")
var birth_year=a.questionInt("enter the birth year:")
var current_year=a.questionInt("enter the current year")
i=birth_year
current_age=0
while(i<=current_year){
    current_age=current_age+1
    i=i+1
// console.log(current_age)
}
console.log(current_age)

