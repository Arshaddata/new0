
let fn='Arshad'
let ln='Qureshi'
console.log(`welcome ${fn} `)
console.log("welcome ${fn} ")

let arr=['bike','car','truck'];

arr.push(0)
arr.splice(1,0,'a','b','c')
arr.unshift('hj')

console.log(arr)
arr.shift()
console.log(arr)
arr.splice(2,1)
console.log(arr)
arr.pop()
console.log(arr)


// console.log(arr.indexOf(1))
console.log(arr.includes('a'))

for(let value of arr){
    console.log(value)
}