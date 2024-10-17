const content = document.querySelector(".content input");
const addTaskButton = document.getElementById("add-task");
const todoList = document.querySelector(".todoList");
addTaskButton.addEventListener("click", addTask)


function addTask(){
    if(content.value === ""){
        const error = document.getElementById("error");
        error.style.display = 'block';
        
    }else {
        error.style.display = "none";
        const todoContent = document.createElement("div");
        todoContent.classList.add("todo-content");
    // todoContent.style.display = "block";
        todoList.append(todoContent);
        console.log(todoContent);
       
        // create li inside thr todoContent
        const li = document.createElement("li");
        li.textContent = content.value;
        todoContent.append(li);
        content.value = ""
        
        // create a button for delete icons
        const deleteButton = document.createElement('button');
        deleteButton.classList.add("delete");
        todoContent.append(deleteButton);

        //create trash icon
        const trashIcon = document.createElement("i");
        trashIcon.classList.add("fa-solid", "fa-trash");
        deleteButton.append(trashIcon);  
        deleteButton.addEventListener('click', deleteTask);

        function  deleteTask(){
            todoContent.remove();
        }
    }   

    
}







