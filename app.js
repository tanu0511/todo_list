let input = document.querySelector('.entered_list');
let addBtn = document.querySelector('.add_list');
let task = document.querySelector('.task');

//add btn disabled

input.addEventListener('keyup',()=>{
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})
//add new item to list

addBtn.addEventListener('click', () =>{
    if(input.value.trim() !=0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
         <p> ${input.value} </p><div class="item_btn">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
                 `
            task.appendChild(newItem);
            input.value = '';
    }
    else{
        alert('Please enter a task')
    }
})
input.addEventListener('keyup', () => {
    if(input.value.trim() !==0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})

//delete item from list
task.addEventListener('click',(e) =>{ 
    if(e.target.classList.contains('fa-xmark'))
    {
        e.target.parentElement.parentElement.remove();
    }
})

//mark items as completed
task.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square'))
    {
        e.target.parentElement.parentElement.classList.
        toggle('completed');
    }
})

// tasks.addEventListener('click', (e) => {
//     if(e.target.classList.contains('fa-xmark')){
//         e.target.parentElement.parentElement.remove();
//     }
// })