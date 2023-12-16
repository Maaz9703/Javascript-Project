// const number1 = 100;
// const number2 = 60;
// let val;

// // simple math with number

// val = number1 + number2;
// val = number1 - number2;
// val = number1 / number2;
// val = number1 * number2;
// val = number1 % number2;

// // math object 

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-2);
// val = Math.pow(7,2);
// val = Math.floor(Math.random() * 20 + 1)

// console.log(val);





// const firstName = 'maaz'
// const lastName = 'ali'
// const age = 36;
// let val = firstName + ' ' + lastName;

// val = 'maaz '
// val  += 'ali'

// val = 'hello my name is ' + firstName + " and my age is " + age;

// val = firstName.toUpperCase()
// val = lastName.toLowerCase()

// val = firstName.indexOf('z')
// val = firstName.lastIndexOf('z')
// val = firstName.charAt('2')
// val = firstName.charAt(firstName.length - 1)
// val = firstName.substring(0, 2)
// val = firstName.slice(0, 2)
// val = firstName.slice(-3)
// console.log(val);


// const name = 'maaz';
// const city = ' okara';
// const job = 'web developer';
// const age = 36;

// let html;

// html = `
//     <ul>
//     <li>name : ${name}</li>
//     <li>age : ${age}</li>
//     <li>city : ${city}</li>
//     <li>job : ${job}</li>
//     </ul>
// `
// document.body.innerHTML= html;


// const numbers = [56,76,98,32,65,54,34]
// const mixed = [56, 'maaz', null, true, undefined, {a: 1, b: 2}]


// // console.log(mixed)
// // console.log(mixed.length)

// let val;

// val = Array.isArray(mixed)

// // val = numbers.sort(function (x,y) {
// //     return y-x;
// // })
// function under50(num) {
//     return num < 50;
// }
// function over50(num) {
//     return num > 50;
// }

// val = numbers.find(under50)
// val = numbers.find(over50)


// console.log(numbers)
// console.log(val)
// let val;

// const today = new Date();
// let birthday = new Date('2-20-2000 11:25:00' );
// let birthday2 = new Date('september 1 1981' );
// val = birthday2;
// val = today.getMonth()
// val = today.getDay()
// val = today.getFullYear()
// console.log(val);
// console.log(typeof val);

// if (typeof id !== 'undefined') {
//     console.log(`this id is `)
// } else {
//     console.log('no id')
// }

// function greet(firstName, lastName) {
//     return 'hello ' + firstName + ' ' + lastName;
// }
// console.log(greet('maaz','ali'))


// function square(x=4) {
//     return x*x;
// }
// console.log(square())

// (function (name) {
//     console.log('HELLO THIS IS MY AREA ' + name);
// })('maaz ali mola');

// for loop

// for (let i = 0; i < 10; i++) {
//     if (i ===2) {
//         console.log(`2 is my faourite number`)
//         continue;
//     }
//     if (i ===5 ) {
//         console.log(`5 stop the loop please`)
//         break;
//     }
//     console.log('number'+ [i])
    
// }


// let i = 0;
// while (i < 10) {
//     console.log('this is a while loop' + i )
//     i++;
// }

// let i = 7;
// do{
//     console.log('number' + i)
//     i++
// }
// while(i < 10)

// const cars = ['cherry', 'toyota', 'honda', 'hondai']

// for (let i = 0; i< cars.length; i++) {
//   console.log(cars[i])
//     }

// cars.forEach(car => {
//     console.log(car)
// });

// const users =
// [
//     {id:1,name:'maaz'},
//     {id:2,name:'ali'},
//     {id:3,name:'Abdullah'}
// ]
// users.map(function (user) {
//     console.log(user.id,user.name)
// })
// const users = {
//     firstName: 'john',
//     lastName : "ali",
//     age: 23
// }

// for( let x in users){
//     console.log(`${x}: ${users[x]}`)
// }


// const input = prompt();
// window.alert(input);

// if(confirm('are you sure')){
//     console.log('Yes')
// }
// else{
//     console.log('no')
// }

// let val;

// // val = window.outerHeight;
// // val = window.outerWidth;

// // console.log(val)

// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// console.log(val)

// var a= 1;
// let b= 2;
// const c= 3;

// function test() {
//     var a= 4;
// let b= 5;
// const c= 6;
// console.log('function scope :',a,b,c)
// }
// test()

// if (true) {
//     var a= 13;
// let b= 7;
// const c= 8;
// console.log('is Scope :' ,a,b,c)
// }

// console.log('global scope :' ,a,b,c)

// define ui var
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// load all event listner

loadEventListeners();

// function on all event listeners
function loadEventListeners() {
    // add task form
    form.addEventListener('submit', addTask)
    taskList.addEventListener('click', removeTask)
    clearBtn.addEventListener('click',clearTasks)
    filter.addEventListener('keyup',filterTasks)
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task')
    }

    // create "li" element in list

    const li = document.createElement('li')
    li.className = 'collection-item'
    // create text node and append into the li 
    li.appendChild(document.createTextNode(taskInput.value))
    // create new linn=k element 
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove">X</i>';
    console.log(link)
    li.appendChild(link)

    taskList.appendChild(li)

    taskInput.value = '';


    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('are you sure ?')) { 
        e.target.parentElement.parentElement.remove();
    }
    }
}

function clearTasks() {
    // taskList.innerHTML= '';
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}

function filterTasks(e) {
    // const text = e.target.value.toLowerCase();
    // console.log(text)
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(task) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
    // e.preventDefault();
}