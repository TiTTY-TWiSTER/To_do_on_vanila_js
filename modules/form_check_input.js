import li_elem from './create_li_task.js'

export default function(obj){

    for(let i=0; i < obj.length; i++){

        if(obj[i].completed == true){        
        
            document.querySelector('.list-group').append(li_elem(obj[i], true))
    
            document.getElementById(`${obj[i].id}`).remove()
        }
    }
    
    document.querySelectorAll('.form-check-input').forEach(item => {
        
        item.addEventListener('click', event => {
            const elem = event.target

            var local_store = JSON.parse(localStorage.getItem('to_do'))

            var arr = local_store.map(el => el.title)

            if(elem.checked){
                document.querySelector('.list-group').append(elem.parentNode)

                if(arr.indexOf(`${event.target.parentNode.innerText}`) != -1){
                    
                    let new_obj = local_store[arr.indexOf(`${event.target.parentNode.innerText}`)]
                        new_obj.completed = true
                    
                    localStorage.setItem('to_do', JSON.stringify(local_store))
                    
                }
            }else{
                document.querySelector('.list-group').prepend(elem.parentNode)

                if(arr.indexOf(`${event.target.parentNode.innerText}`) != -1){
                    
                    let new_obj = local_store[arr.indexOf(`${event.target.parentNode.innerText}`)]
                        new_obj.completed = false
                    
                    localStorage.setItem('to_do', JSON.stringify(local_store))
                    
                }
            }
        })
    })
}