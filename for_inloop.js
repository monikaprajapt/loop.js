const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

for ( let key in student ) {
    console.log(`${key}=${student[key]}`);
}




const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}
for ( let i in salaries) {
    let salar = "$" + salaries[i];
    console.log(`${i} : ${salar}`);
}




const string = 'monika';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}




const arr = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr) {
    console.log(arr);
}


const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}



deffrence betbeen for in for of loop 

const mov=["m",6,"g"]
for(var i of mov){
    console.log(i)
}



for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    console.log(i)
}


itreting over loop set

const letters = new Set(["a","b","c"]);

for (const x of letters) {
    console.log(x)
}



const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  for (const x of fruits) {
    console.log(x)
  }



var cars = ["Maruti", "Mercedes", "BMW"];
for (var car in cars){
   console.log(cars[car])
}




const campus_list=["Bangalore","Dharamshala","Pune","Bangalore_another"]
for(let campus in campus_list){
   console.log(campus)
}