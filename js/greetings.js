const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function handleLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}   

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit); 
} else {
    paintGreetings(savedUserName);
}

// localStorage.setItem("key", "value");
// localStorage.getItem("key");
// localStorage.removeItem("key");

// control flow로 어떻게 표현하나 싶었는데, eventlistener의 위치로 조정하는구나. 와우.
// 조종 후 저기가.. userName 아니고 savedUserName 이 됐어야하네. 아~~ 이런걸 놓치네.
    // 같은 것을 지칭해도 argument명이 달라질 수 있다(userName, savedUserName). 주의해야한다!

// 반복되면 함수로 빼는거다. 무조건.
    // greeting.innerText = `Hello ${userName}`;    
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting.innerText = `Hello ${savedUserName}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);

// 위에서 아래로 읽는다 했는데.. 함수는 예외인가? paintGreeting 호출 시 저 함수는 아래에 있음에도 콜 가능?
// login 끝나면 직접 한 번 작성해보자. 3개 파일 모두. ok. 속도에만 치우치지 말고. 한 파트 끝날 때마다 스스로 진행해보기.
    // 진행한 후에 4.7(super recap) 듣자