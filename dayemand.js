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













