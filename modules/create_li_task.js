import change_task from './change.js'

export default function(obj){
    var new_li = document.createElement('li')
        new_li.classList = 'list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2'
        new_li.innerText = obj.title
        new_li.style.cursor = 'pointer'

    var del_icon = document.createElement('i')
        del_icon.classList = 'fas fa-times text-primary'

    var checker = document.createElement('input')
        checker.classList = 'form-check-input me-2'
        checker['type'] = "checkbox"

    del_task(del_icon)

    new_li.append(del_icon)
    new_li.prepend(checker)

    change_task(new_li)

    return new_li
}

function del_task(item){
    item.addEventListener('click', function(e){

        JSON.parse(localStorage.getItem('to_do')).forEach((element,index) => {
            if(element.title == e.target.parentNode.innerText){
                var container = JSON.parse(localStorage.getItem('to_do'))
                    container.splice(index,1)
                localStorage.setItem('to_do', JSON.stringify(container))
            }else{
                console.log(111)
            }
        })

        e.target.parentNode.remove()
    })
}