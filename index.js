console.log("hello world!")
a = 20;
console.log(a)
//number 
var b = 20;
console.log(b + 1)
name = prompt("enter the name ")
console.log("the name is :" + name)
arr = [10,20, 30, 40,50]
arr1 = [1, 2, 3, 4, 5]
res = []
for(i = 0; i < arr.length; i++){
res.push(arr[i] + arr1[i]);
}
console.log(res)

function maker(name, age){
    return{
        name : name,
        age : age,
    }
    }
let user1 = maker("danish", 20)
console.log(user1)

add = function(a, b){
    console.log(a + b)
}
add(10,20) 