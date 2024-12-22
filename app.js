let tasks = [];
const addTask = ()=>{
    const taskInput = document.getElementById('taskInput')
    const text = taskInput.value.trin()
    if(text){
        tasks.push({text:text,completed:false });
    }
    

   const updateTasksList = ()=> {
   const taskList = document.getElementById('taskList')
   taskList.innerHTML = "";
tasks.forEach(task,index=>{
    const listItems = document.createElement('li')
    listItems.innerHTML = "";
    <div class="taskItem">
        <div class="task">
            <input type="checkbox" class="checkbox" />
            <p>Finish this project</p>
        </div>
        <div class="icons"></div>
        </div>
});
listItem.addEventListener('change',()=> toggleTaskComplete())
taskList.append(listItems);
   };
};
document.getElementById('newTask').addEventListener('click',function(e){e.preventDefault()
    addTask();
})
