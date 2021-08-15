const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

const addTodo = [];

function saveAddTodo() {
    localStorage.setItem("addTodo", JSON.stringify(addTodo));
}

function handleTodoDelete(event) {
    const li = event.target.parentElement;
    // console.log(li.innerText);
    li.remove();
}

function paintTodo(newTodo) {
    // console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", handleTodoDelete);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    // console.log(todoInput.value);
    todoInput.value = "";
    // console.log(newTodo, todoInput.value);
    addTodo.push(newTodo);
    paintTodo(newTodo);
    saveAddTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const saved


// newTodo - todoInput.value - "" 연결될 것 같지만 아니다. 말 그래도, 끊어져있음. 끝!
// appendChild를 사용하여 li 안에 span을 넣었음 와우
// 여려개의 delete button 중 무엇을 눌렀는지 알려면! 이게 좀 hard하네 (#7.2)
//      event.target.parentElement(=node)를 통해 접근 후
//          (이 때 .innerText의 내용이 다 달라서 구분 가능하덴다!)
//          (li.innerText + span.innerText 느낌으로 출력되더라.)
//      remove(); 활용 - list 형식이니까 걍 쓸 수 있나보다!
// localstorage에 array를 저장할 수 없다는 점! only text can be saved. 이 부분도 hard (#7.3)
//      JSON.stringify(Array) 활용 <=> JSON.parse(String)
//      localstorage에는 string만 저장되니까, 저장시에는 통째로 string으로 변환하고
//      활용을 위해서는 array가 좋으니까, 불러올 때는 array로 다시 변환한다는 소리인가보다.