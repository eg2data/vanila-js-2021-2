const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

const TODO_KEY = "addTodo";

let addTodo = [];

function saveAddTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(addTodo));
}

function handleTodoDelete(event) {
    const li = event.target.parentElement;
    // console.log(li.innerText);
    // console.log(typeof li.id);
    li.remove();
    addTodo = addTodo.filter((item) => item.id !== parseInt(li.id));
    saveAddTodo();
}

function paintTodo(newTodoObj) {
    // console.log("i will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
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
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    // console.log(newTodo, todoInput.value);
    addTodo.push(newTodoObj);
    paintTodo(newTodoObj);
    saveAddTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);
if(savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    addTodo = parsedTodo;
    parsedTodo.forEach(paintTodo);
}




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

// array.forEach();
//      event와 비슷한, item argument

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }
// parsedTodo.forEach(sayHello);

// parsedTodo.forEach((item) => console.log("this is the turn of", item));  -- arrow function
// 그런데 우리는, arrow function마저 안써도 됐다. paintTodo만 불러오면 됐다. 이 부분에 대한 이해를 해보자(#7.5)

// old array가 초기화 되지 않고 모두 저장될 수 있도록 하는 (let, add = parsed 활용)(#7.5)

// 지우고 싶을 때, Date.now()를 고유값으로 하여 마치 index처럼 활용한다. 이를 위해 obj 생성하여 array에 넣은 것. 와우. (#7.6)

// array.filter(sexyfilter ) - true인 것만 남긴다.
// function sexyFilter(item) {    item!!!!!!!
//     return item !== 3;         return!!!!!
// }
// [1,2,3].filter(sexyFilter);

// const arr = [1,2,3,4];
// arr.filter(item => item > 2);

// const arr = ["banana", "apple", "sugar"];
// function sexyFilter(food) {
//     return food !== "banana"    내가 제외하고 싶은 조건을 여기에 표현해주는거지!
// }
// arr.filter(sexyFilter);

// const arr = [123, 1234, 123, 12, 35, 3555, 35];
// function sexyFilter(under) {
//     return under >  1000;
// }
// arr.filter(sexyFilter);

// type이 다르면 다른 데이터. 따라서 의도대로 동작 안될 수 있다 (parseInt(li.id));
// saveAddTodo(); 다시 불러오면서 마무리하는 것을 잊어선 안되겠지. 


// To do list가 어려웠던거네. 이건 반복하자. 다만, 반복은 클론코딩과 병행하도록 하자. 짧은 시간만 투자하기.
// 오늘 무조건 클론코딩 시작도 한다 (8/16)