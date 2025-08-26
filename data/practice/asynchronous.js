//callback function

/*function pizza(callback){
    setTimeout(()=>{
        callback('🍕');
    },2000);
}
function eat(item){
    console.log(`eat this ${item}`);
}
pizza(eat);
console.log('have this untill your pizza is ready');
*/

//promises
/*
function promise(){
    return new Promise((resolve,reject)=>{
        reject('undefined');
    })
}
const obj=promise();
obj.then((data)=>{
    console.log(`the weather is ${data}`);
}).catch((err)=>{
    console.log(`the weather is ${err}`);
})
    */
//async await
function add(a,b){
    return new Promise((response,reject)=>{
        console.log("entered add");
    if(a+b>=0)
    response(a+b)
    else
    reject("sum is less than zero")
    })
}

function mul(a){
    console.log("entered mul");
    return new Promise((response,reject)=>{
    response(a*5)
    })
}
function disp(a){
    console.log(`result is ${a}`);
}
async function res(){
    const data=await add(4,5);
    const result=await mul(data);
    disp(result);
} 
res();
