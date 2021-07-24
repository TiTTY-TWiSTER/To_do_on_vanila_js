
import create_li_task from './create_li_task.js'
import check_input from './form_check_input.js'
export default function(arr){
    var arg_li = undefined

    document.querySelector('button[type="submit"]').addEventListener('click', function(e){
        e.preventDefault()

        var val_task = document.querySelector('#add_task').value.split(' ').join('')

        var new_task_obj = {}
        new_task_obj['title'] = val_task
        new_task_obj['id'] = arr.length - 1
        new_task_obj['completed'] = false

        arr.unshift(new_task_obj)

        var my_arr = new Array()
            my_arr.push(new_task_obj)

        if(localStorage.getItem('to_do') != undefined){
            var old_value = JSON.parse(localStorage.getItem('to_do'))
                old_value.push(new_task_obj)

            localStorage.setItem('to_do', JSON.stringify(old_value))
        }else{
            localStorage.setItem('to_do', JSON.stringify(my_arr))
        }
        

        document.querySelector('#add_task').value = ''

        document.querySelector('.list-group').prepend(create_li_task(new_task_obj))        

        arg_li =  create_li_task(new_task_obj)



        var last_to_do = JSON.parse(localStorage.getItem('to_do'))
        
        document.querySelector('.form-label').innerText = `Добавить заметку номер ${last_to_do.length + 10 + 1}`   
             
        check_input()
    })
    
}