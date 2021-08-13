const quotes = [
    {   
        quote: "매일의 습관이 곧 나다.",
        author: "eg2data",
    },
    {   
        quote: "순간을 견디면, 그 또한 지나간다.",
        author: "eg2data",
    },
    {   
        quote: "몸은 거짓말을 하지 않는다.",
        author: "eg2data",
    },
    {   
        quote: "할 일을 미루면 성취도 함께 미뤄질 뿐.",
        author: "eg2data",
    },
    {   
        quote: "금연과 금주가 나를 바꿨다.",
        author: "eg2data",
    },
    {   
        quote: "성취와 성장을 반복하는 삶을 살지 않을 이유가 있는가?",
        author: "eg2data",
    },
    {   
        quote: "완전한 것은 없다. 사용하지 않으면 잊히기 마련.",
        author: "eg2data",
    },
    {   
        quote: "먼 미래를 담은 청사진, 이를 현실화하기 위한 굵직한 계획, 그 계획을 완성시킬 수 있는 유일한 길은 결국, 오늘, 지금.",
        author: "eg2data",
    },
    {   
        quote: "하고자 했던 일을 하지 않으면 그저 찝찝할 뿐. 상상했던 평안은 결코 오지 않는다. 해라.",
        author: "eg2data",
    },
    {   
        quote: "나의 전부, 내 모든 것, 이보람.",
        author: "eg2data",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

