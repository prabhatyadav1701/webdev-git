function add(a,b){
    return a+b
}

function sub(a,b){
    if(!(a>b)) throw new Error('num a must be gre then b')
    return a-b
}

function multiply(a,b){
     return a*b
}

add(2,5)
add(10,23)
add(40,42)

multiply(2,3)
multiply(20,35)

