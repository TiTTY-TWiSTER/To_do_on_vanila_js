export default function change_task(li){
    li.addEventListener('click', function(event){

        var li_value = event.target.innerText 
        
        if(event.target.tagName == 'LI'){            

            var input_change = document.createElement('input')
                input_change['type'] = 'text'
                input_change.style.width = '80%'

            input_change.value = li_value

            li.innerText = ""

            li.append(input_change)

            var check_icon = document.createElement('i')
                check_icon.classList = 'fa fa-check'

            li.append(check_icon)

            input_change.focus()
        }else{
            if(event.target.classList.contains('fa-check')){
                var new_value = event.target.parentNode.querySelector('input').value
                //console.log(event.target.parentNode.querySelector('input').value)
                event.target.parentNode.innerHTML = `
                <input class="form-check-input me-2" type="checkbox">${new_value}<i class="fas fa-times text-primary"></i>
                `  
                         
            }else{
                if(event.target.classList.contains('fa-times')){
                    this.remove()
                }      
                
            }
             
        }
        
    })
}

