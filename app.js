const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const add2= (n)=>{
    return n + 2;
}
const multi3 = (n)=>{
    return n * 3;
}
const add10=(n)=>{
    return n + 10;
}
const multi2=(n)=>{
    return n *2;
}
console.log(multi2(add10(multi3(add2(5))))) // --> 62

console.log(
    pipe(
        add2,
        multi3,
        add10,
        multi2
    )(5)) // --> 62

