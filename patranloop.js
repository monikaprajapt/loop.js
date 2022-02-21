var a=""
for(i=5; i>=1; i--){
for(j=5; j>=i; j--){
    a=a+j
}
a+="\n"
}
console.log(a)

var a=""
for(i=1; i<=5; i++){
for(j=1; j<=i; j++){
    a=a+j
}
a+="\n"
}
console.log(a,"*")

var c=" "
for(var a=1; a<=100;  a=a+10){
    for(b=a; b<a+10;  b++){
        // console.log(b)
    c=c+b
    }
    c+="\n"
    // console.log(c)
}
console.log(c)


// number patran
var c=""                        1
for(i=1; i<=6; i++){            22
    for(j=1; j<=i; j++){        333
    c=c+i                       4444
    }                           55555
    c=c+"\n"
}
console.log(c)




var c=""
for(i=5; i>=1; i--){      12345
                             1234  
    for(j=1; j<=i; j++){  123 
    c=c+j                 12
                             1
    }
    c=c+"\n"
}
console.log(c)







var st=""
var k=1
for(i=1; i<=5;i++){
    for(j=1; j<=5-i; j++){
        st=st+" "

    }
    for(l=1; l<=k; l++){
        st=st+"*"

    }
    st=st+"\n"
    k=k+2
}
console.log(st)









var st=""
var k=7
for (i=1; i<=5; i++){
    for (j=1; j<=i; j++){
        st=st+" "
    }
    for (l=1; l<=k; l++){
        st=st+"*"
    }
    st=st+"\n"
    k=k-2

}
console.log(st)























var String=""
for (var i=0; i<=5; i++){
    for(var j=0; j<=i; j++){
        String=String+"*";

    }
    String+="\n"
    // console.log(String)
}
console.log(String)

//     *
//    **
//   ***
//  ****
// *****


let n=6;
var string="";
for (let i=1; i<=n; i++){
    for (j=1; j<=n-i; j++){
        string=string+" ";
    }
    for (k=0; k<i-1; k++){
        string=string+"*"
    }
    string=string+"\n"
}
console.log(string)



var a=5
var string=""
for (i=0; i<a; i++){
    for(j=0; j<i; j++){
        string=string+""
    }
    for (k=0; k<2*(i)-1; k++){
        string=string+"*"
    }
    string=string+"\n"
}
console.log(string)


var a=5
var string=""
for (i=1; i<=a; i++){
    for(j=0; j<i; j++){
        string=string+string.fromcharctore
    }
    string=string+"\n"
}
console.log(string)


var s=1
st=""
var i=1
while (i<=5){
    var j=1
    while(j<=5-i){
        st=st+""
         j=j+1
    }
    var k=1
    while(k<=s){
        st=st+"*"
        k=k+1 
    }
    st=st+"/n"
    s=s+2

}
console.log(st)









var a=require("readline-sync")
var b=a.questionInt("enter the number")
var st=""
var i=1
while(i<=b){
    var j=b

}
while(j>=i){
    st=st+"*"
}



 
