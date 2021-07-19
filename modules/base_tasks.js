// Модуль для отрисовки изначального списка задач полученных по API

import change_task from './change.js' // модуль для изменения содержимого
import add_task from './add_task.js'
import create_li_task from './create_li_task.js'

export default function base_task(arr){
    add_task(arr)    

    var last_to_do = JSON.parse(localStorage.getItem('to_do'))

    for(var i=0; i < arr.length; i++){
        create_li_task(arr[i])

        change_task(create_li_task(arr[i])) // Изменение содержимого элемента списка

        if(i < 10){
            document.querySelector('.list-group').append(create_li_task(arr[i]))
        }else{
            last_to_do.forEach(element => {
                document.querySelector('.list-group').prepend(create_li_task(element))      
            })
            return false
        }
    }
}

