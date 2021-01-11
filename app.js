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


/* 
Suppose I get a response from server and want to details of a person 
*/
let response= {};
// Now the response can also be empty like above

// doing directly will break the code since the response is empty
console.log(response.person.phones.work.skype); // Cannot read property 'phones' of undefined

// so a safe code is doing this
if(response.person && response.person.phones && response.person.phones.work){
    console.log(response.person.phones.work.skype);
}
// to avoid the conditions and make the code "safe" and simple we can also use optional chaining here: 

console.log(response?.person?.phones?.work?.skype); // undefined but doesn't break the code
//lets put correct response
 response={
    person:{
        phones:{
            home:'+232323',
            work:{
                skype:'a@b.c',
                call:'+2323'
            }
        },
        name:'Arindam'
    }
}
console.log(response?.person?.phones?.work?.skype); // a@b.c 
