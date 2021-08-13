const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// Math.random() 사용을 위해 일단 기준이 되는 집합은 array로 생성하고 시작하는구나.
    // 아니지. 애초에 집합에서 랜덤하게 뽑아오는 작업이었으니, 당연히 array가 존재해야하는게 맞지. ok.
// document.createElement("tag");
// bgImage.src + backtic + ${}
// document.body.appendChild(bgImage); --- prepend(bgImage)