// let currentIndex = 1;

// const parentEl = document.getElementById("todos");

    

// window.onload = () =>{
//     let savedTodos;

//     try{
//     savedTodos = JSON.parse(localStorage.getItem("todos"));
//     if(!Array.isArray(savedTodos)) savedTodos = [];
//     }
//     catch(e){
//         savedTodos = []
//     }

//     savedTodos.forEach((todo)=>{
//         const newEl = createTodoComponent(todo.title);
//         parentEl.appendChild(newEl);
//         id++;
//     })
// }



// function addTodo(){
//     const input = document.getElementById("input");
//     const value = input.value;

//     if(value.trim()){
//         const newTodo = createTodoComponent(value);
//         parentEl.appendChild(newTodo);
//         currentIndex++;
//         input.value = "";
//         saveToLocalStorage();
//     }
//     else{
//         alert("Enter some todo before you hit the Add button!!");
//     }
// }


// function  createTodoComponent(input){
//     const newDiv = document.createElement("div");
//     newDiv.className = "todo-item";

//     const newInput = createInputComponent(input);
//     const newEdit  = createEditComponent(newInput);
//     const newDel = createDeleteComponent(newDiv);

//     newDiv.appendChild(newInput);
//     newDiv.appendChild(newEdit);
//     newDiv.appendChild(newDel);

//     return newDiv;
// }



// function createInputComponent(input){
//     const inputEl = document.createElement("input");

//     inputEl.type = "text";
//     inputEl.value = input;
//     input.readOnly = true;
//     input.id = "todo-" + currentIndex;

//     return inputEl;
// }

// function createEditComponent(inputEl){
//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";

//    editBtn.onclick = ()=>{
//     if(inputEl.readOnly){
//         inputEl.readOnly = false;
//         inputEl.classList.add('editing');
//         editBtn.textContent = "Save";
//         inputEl.focus();
//     }
//     else{
//         inputEl.readOnly = true;
//         inputEl.classList.remove('editing');
//         editBtn.textContent = "Edit";
//         saveToLocalStorage();
//     }
//    }

//    return editBtn;
// }

// function createDeleteComponent(newDiv){
//     const delBtn = document.createElement("button");
//     delBtn.textContent = "Delete";

//     delBtn.onclick = ()=>{
//         parentEl.removeChild(newDiv);
//         saveToLocalStorage();
//     }

//     return delBtn;
// }


// function saveToLocalStorage(){
//     const inputs = document.querySelectorAll("#todos input[type = 'text']");
//     const todos = Array.from(inputs).map((input)=>({
//         title : input.value
//     }))

//     localStorage.setItem("todos" , JSON.stringify(todos));
// }

let currentIndex = 1;
const parentEl = document.getElementById("todos");

function addTodo(){

    const input = document.getElementById("input");
    const value = input.value;

    if(value.trim()){
        const newTodo = createTodoComponent(value);
        parentEl.appendChild(newTodo);
        currentIndex++;
        input.value = "";
        saveToLocalStorage();
    }
    else{
        alert("Please Enter any todo before u hit the Add button!!");
    }
}


function createTodoComponent(input){
    const newDiv = document.createElement("div");
    newDiv.className = "todo-item";

    const inputEl = createInputComponent(input);
    const editBtn = createEditComponent(inputEl);
    const Delbtn = createDeleteComponent(newDiv);

    newDiv.appendChild(inputEl);
    newDiv.appendChild(editBtn);
    newDiv.appendChild(Delbtn);

    return newDiv;
}


function createInputComponent(input){
    const inText = document.createElement("input");

    inText.type = "text";
    inText.value = input;
    inText.readOnly = true;
    inText.id = "todo-" + currentIndex;

    return inText;
}



function createEditComponent(inText){
    const ebtn = document.createElement("button");
    ebtn.textContent = "Edit";

    ebtn.onclick = ()=>{
        if(inText.readOnly){
            ebtn.textContent = "Save";
            inText.readOnly = false;
            inText.classList.add("editing");
            inText.focus();
        }
        else{
            inText.readOnly = true;
            ebtn.textContent = "Edit";
            inText.classList.remove("editing");
            saveToLocalStorage();
        }
    }

    return ebtn;
}

function createDeleteComponent(newDiv){
    const del = document.createElement("button");
    del.textContent = "Delete";

    del.onclick = ()=>{
        parentEl.removeChild(newDiv);
        saveToLocalStorage();
    }

    return del;
}


function saveToLocalStorage(){
    const inputs = document.querySelectorAll("#todos input[type = 'text']");
    const todos = Array.from(inputs).map((input)=>( {
        title : input.value}
    
    ));

    localStorage.setItem("todos" , JSON.stringify(todos));
}


window.onload = ()=>{
    let savedTodos;
    try{
        savedTodos = JSON.parse(localStorage.getItem("todos"));
        if(!Array.isArray(savedTodos)) savedTodos = [];
        
    }
    catch(e){
        savedTodos = [];
    }

    savedTodos.forEach(todo => {
        const newEl = createTodoComponent(todo.title);
        parentEl.appendChild(newEl);
        currentIndex++;

    })
}