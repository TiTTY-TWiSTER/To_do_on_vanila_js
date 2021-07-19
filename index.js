import base_task from './modules/base_tasks.js'

var arr_to_do = new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => {return res.json()}).then(data => {resolve(data)})
}).then(list => {

    base_task(list)

    
})
