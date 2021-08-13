const clock = document.querySelector(".clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// devide and conquer'
// setInterval & timeout
// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);
// const date = new Date();
// date.getHours() - () 없으면 안되는구나!
// 최초에 getClock() 즉시호출 후 setInterval을 시작하니까, 최초 딜레이 없이 바로 시작.
// "1".padStart(2, "0"); -- "hello".padStart(20, "x");
// parseInt - String