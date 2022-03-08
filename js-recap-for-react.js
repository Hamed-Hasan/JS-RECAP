// // declare const and let 
// const instant = 'hello world'
// let update = 'let update'
// update = '2022'
// console.log(update)

// // basic conditions: >,<, ===, !==, <=, >= and multiple conditions
// let money = 100;
// if (money <= 200) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// // multiple conditions 
// if (instant === 'hell' || update === '202') {
//     console.log('wrong');
// } else if (instant === 'hello world' && update === '2022') {
//     console.log('right');
// } else {
//     console.log('another way');
// }

// // array declare
// // index, 
// // length, push,

// const pushArr = [322, 23, 6, 45, 32]
// pushArr[1] = 999
// console.log(pushArr);
// pushArr.push(11)
// pushArr.push(22)
// pushArr.push(33)
// const newNumbers = [...pushArr,999,'888']
// console.log(newNumbers)

// // for loop 
// for (let i = 0; i < pushArr.length; i++) {
//     const element = pushArr[i];
//     console.log(element)
// }

// // for of
// for (const iterator of pushArr) {
//     console.log(iterator);
// }

// // for in 
// for (const key in pushArr) {
//     const element = pushArr[key];
//     console.log(element)

// }

// // while loop 
// let i = 0;
// let text = "";

// while (pushArr[i]) {
//     text += pushArr[i];
//     i++;
// }
// console.log(text);

// // do loop 
// let d = 0;
// let tex = '';
// do {
//     tex += pushArr[d]
//     d++
// } while (pushArr[d]);
// console.log(text)

// // simple function
// function multiply(num1, num2) {
//     const result = num1 * num2
//     return result
// }
// console.log(multiply(3, 4))

// // Object
// // 3 ways to access property by name 
// const student = {
//     name: 'hamed',
//     age: 22,
//     hobbies: ['play', 'pray', 'fun', 'travel']
// }

// const myVar = 'age'
// console.log(student[myVar]) // way 1
// console.log(student.age) // way 2
// console.log(student['hobbies']) // way 3

// // template string
// const about = `my name ${student.name} my age ${student['age']} my hobbies ${student.hobbies[3] = 'world travel'}`
// console.log(about)

// // arrow function
// const getFiftyFive = () => 55
// const sumOnePara = num => num + 50
// const sumMultiple = (x, y, z) => (x + y + z) * 10
// const isEven = x => x % 2 == 0 // odd or even with arrow function
// const doMathBody = (x, y) => {
//     const multiply = x * y
//     return multiply
// }
// console.log(getFiftyFive())
// console.log(sumOnePara(10))
// console.log(sumMultiple(3, 3, 3))
// console.log(isEven(12))
// console.log(doMathBody(3, 4))

// // Object on array methods like Map, filter, find, forEach 
// const products = [
//     {name: 'laptop', prices: 30000, brands: 'lenovo', color: 'silver'},
//     {name: 'phone', prices: 10000, brands: 'iphone', color: 'silver'},
//     {name: 'watch laptop', prices: 15000, brands: 'casio', color: 'silver'},
//     {name: 'glasses n', prices: 4000, brands: 'ray', color: 'silver'},
//     {name: 'camera', prices: 35000, brands: 'canon', color: 'silver'},
// ]

// const useMap = products.map(product => product.name === 'laptop')
// console.log(useMap)
// products.map(product => console.log(product.brands))

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.brands))

// const checkFilter = products.filter(product => product.name.includes('laptop'))
// console.log(checkFilter)

// const checkF = products.filter(product => product.prices >= 10000)
// console.log('check price',checkF)

// const checkFind = products.find(product => product.name.includes('n'))
// console.log('find',checkFind)

// // array destructuring
// const numbers = [30,50]
// let x = numbers[0]
// let y = numbers[1]
// console.log(x,y);
// [x,y] = numbers
// console.log(numbers);

// // function declare array 
// function boxify(num1, num2) {
//     const result = [num1, num2]
//     return result
// }
// const [first, second] = boxify(10,20)
// console.log(first,second)

// const studen = {
//     name: 'Salib Khan',
//     age: 32,
//     movies: ['king khan', 'Dhakar Mastan']
// }

// const [firstMovie, secondMovie] = studen.movies
// console.log(firstMovie,secondMovie)

// // Object destracturing 
// const employee = {
//     ide: 'VS Code',
//     designation: 'developer',
//     machine: 'mac',
//     languages: ['html', 'css', 'js'],
//     specification: {
//         height: 66,
//         weight: 67,
//         address: 'kumarkhali',
//         drink: 'water', 
//         watch: {
//             color: 'black',
//             price: 500,
//             brand: 'garmin'
//         }
//     }
// }

// const {machine, ide, languages} = employee
// console.log(machine,ide, languages)
// const {color,price,brand} = employee?.specification?.watch
// console.log(brand,price,color)

// // json stringifyd 
// const stringify = JSON.stringify(employee)
// console.log(stringify)
// const parse = JSON.parse(stringify)
// console.log(parse)

// // Object key values 
// const keys = Object.keys(employee)
// const values = Object.values(employee)
// console.log(keys)
// console.log(values)

// // add or remove from an array
// const product = [
//     { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
//     { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
//     { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
//     { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
//     { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
// ];

// const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };
// const newProducts = [...product, newProduct]

// console.log(newProducts)

// // create a new array without one specific item 
// // remove phone means create a new array without the phone
// const remaining = product.filter(pro => pro.name !== 'phone')
// console.log(remaining)

// // truthy value or falsy values & shortcuts 
// // truthy value = 'world', 9, true, {}, []
// // falsey value = '', 0, false, null, undefined
// // check truthyValue 
// let truthyValue = 10;
// if(truthyValue){
//     truthyValue = truthyValue * 100
// }else{
//     truthyValue = 0
// }
// console.log(truthyValue)

// // checkFalsy value 
// let moneys = 50;
// if(!moneys){
//     moneys = moneys + 100
// }else{
//     moneys = 0
// }
// console.log(moneys)

// const taka = 500;
// let food;
// if(taka > 300){
//     food = 'briyani'
// }else{
//     food = 'rice'
// }
// console.log(food)

// // shortCuts conditions by teranary 
// let food1 = taka > 100 ? 'biryany' : 'water'
// console.log(food1)

// // shortCuts conditions by multiple teranary 
// let drink = (taka > 50 && moneys < 30) ? 'cooke' : 'water'
// console.log(drink)

// // number to string conversion
// const num1 = 500;
// const numStr = num1 + ''
// console.log(numStr);

// // string to number
// const num = '500'
// const strNum = +num
// console.log(num)

// // shortCuts conditions by function
// let isActive = true;
// const showUser = () => console.log('display user')
// const hideUser = () => console.log('hide user')
// // isActive ? showUser() : hideUser()
// // use && if the left side is true then right side will be executed
// isActive && showUser() 
// // use || if the left side is false then right side will be executed
// isActive || hideUser()
// // toggle Boolean 
// isActive == !isActive

// // send data localStorage and session storage

// const sendData = () => {
//     const productField = document.getElementById('product')
//     const product = productField.value

//     const productPrice = document.getElementById('price')
//     const price = productPrice.value

//     if(product && price){
//     localStorage.setItem(product, price)
//     sessionStorage.setItem(product, price)
//     }
//     productField.value = ''
//     productPrice.value = ''
// }

// // sorthand Object
// const x1 = 50;
// const y1 = 100;
// const obj = {x1, y1}
// console.log(obj)


// Six JavaScript Fundamentals that need to know

// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||
if (fatherName === 'Arnold' || season === 'rainy') {
    console.log('true')
} else if (fatherName === 'another') {
    console.log('false');
} else {
    console.log('nothing');
}

// 3. array declare
// index, 
// length, push, 
const numbers = [89, 35, 98, 12];
numbers[0] = 100;
numbers.push(100, 400, 300, 250)
const newNumbers = [...numbers, 99999]

console.log(newNumbers);
console.log(numbers);

// // for loop 
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element)
}

// for of
for (const iterator of numbers) {
    console.log(iterator);
}

// for in 
for (const key in numbers) {
    const element = numbers[key];
    console.log(element)

}

// while loop 
let i = 0;
let text = "";

while (numbers[i]) {
    text += numbers[i];
    i++;
}
console.log(text);

// do loop 
let d = 0;
let tex = '';
do {
    tex += numbers[d]
    d++
} while (numbers[d]);
console.log(text)

// 5. function 
function multiply(num1, num2) {
    const result = num1 * num2
    return result
}
console.log(multiply(3, 4));

// 6. Object
// 3 ways to access property by name 
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const myVariable = 'age';
console.log(student.age) // direct by property
console.log(student['movies']) // access via property name string 
console.log(student[myVariable]) // access via property name in a variable

// ES6 template string, arrow function, spread operator
const students = {
    name: 'shakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// 1. template string
const about = `My Name Is ${student.name} My Movies Is ${student.movies[0]}`
console.log(about);// 1. template string

// 2. arrow function
const getFiftyFive = () => 55
const addSixtyFive = num => num + 65
const isEven = x => x % 2 == 0
const addThree =  (x,y,z) => (x + y + z) * 10
const doMath = (num1, num2) => {
    const result = num1 + num2
    return result
}
console.log(getFiftyFive())
console.log(addSixtyFive(5))
console.log(isEven(20))
console.log(addThree(3,3,3))

// spread operator
const number = [89, 35, 98, 12];
const newNumber  = [...number]
const currentNumber = [...number, 6000]

number.push(99);
number.push(99);
number.push(99);

console.log(number)
console.log(newNumber)
console.log(currentNumber)

// Array methods map filter find forEach
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// map 
const brand = products.map(product => product.brand)
console.log(brand)

const price = products.map(product => product.price)
console.log(price)

// filter 
const cheap = products.filter(product => product.price <= 5000)
console.log(cheap)

// find 
const cheaps = products.find(product => product.name.includes('n'))
console.log(cheaps)

// Array and object Destructuring, optional chaining

// 1. array destructuring
const num = [32,33]
const x = num[0]
const y = num[1]

const [x1, y1] = [42,64]
const [x11, y11] = num

console.log(x11, y11)
console.log(x1, y1)
console.log(x, y)

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
const [first,second] = boxify(38,33)
console.log(first, second)

const studen = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'sharuk khan']
}
const [firsts, seconds] = studen.movies
console.log(firsts, seconds)

// object destructuring

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brands: 'garmin'
        }
    }
}

const {ide, languages} = employee
console.log(ide, languages)

const {address, drink} = employee.specification
console.log(address, drink);

// optional chaining
const {color, brands} = employee?.specification?.watch
console.log(color, brands);

// JSON, Fetch, keys, values, array add or remove using dots

const studentNew = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const stringifyd = JSON.stringify(studentNew)
console.log(stringifyd)

const parse = JSON.parse(stringifyd)
console.log(parse)

//2. fetch
// fetch('url')
    // .then(res => res.json())
    // .then(data => console.log(data));

// keys, values
    const keys = Object.keys(studentNew)
    const value = Object.values(studentNew)
    console.log(keys)
    console.log(value)

    // for 
const numb = [23, 54, 67, 87, 23, 78];
numb.forEach(num => console.log(num))
const divide = numb.map(num => num * 2)
console.log(numb)
console.log(divide)

// for of on array like object
// loop on an object using for in 

// add or remove from an array
const product = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };
// copy products array and then add newProduct
const newProducts = [...product, newProduct]
console.log(newProducts)
// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = product.filter(p => p.name !== 'phone')
console.log(remaining)

// truthy, false Ternary operator, shortcut and or

// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

// check truthy
let myVariables =  5;
if(myVariable){
    myVariables = myVariables * 1000
}else{
    myVariable = 0
}
console.log(myVariables)

let myMoney = 50;
// check negative or falsy anything
if(!myMoney){
    console.log('right')
}else{
    console.log('wrong')
}

const money = 500
let food;
if(money > 50){
    food = 'biryani'
}else{
    food = 'anything'
}
console.log(food)

// ternary 
let food1 = money > 200 ? 'cook' : 'water'
console.log(food1)

let drinks = (money > 100 && money > 50) ? 'best food' : 'bad food'
console.log(drinks)

// number to string conversion
const num1 = 500;
const numStr = num1 + ''
console.log(numStr)

// string to number
const input = '500';
const inputNum = +input
console.log(inputNum)

let isActive = true;
const showUser = () => console.log('displayUser')
const hideUser = () => console.log('hideUser')

isActive ? showUser() : hideUser()
// use && if the left side is true then right side will be executed
isActive && showUser()
// use || if the left side is false then right side will be executed
isActive || hideUser()

//toggle boolean 
isActive = !isActive