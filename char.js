let n=5
let st=""
for (let i=1; i<=n; i++){
    for (let j=0; j<n-i+1; j++){
        st += String.fromCharCode(j+65)
    }
    st=st+"\n"
}
console.log(st)



let n=5
let st=""
for (let i=1; i<=n; i++){
    for (let j=0; j<i; j++){
        st += String.fromCharCode(j+65)
    }
    st=st+"\n"
}
console.log(st)




var n=5
let st=""
var i=1
while(i<=n){
    var j=0
    while(j<n-i+1){
        st+=String.fromCharCode(j+65)
        j++
    }
    st=st+"\n"
    i++

}
console.log(st)
