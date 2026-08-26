const circle = document.getElementById("circle");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

// circleの角度の取得
let rotateValue = circle.style.transform;
let rotateSum;

upBtn.addEventListener("click", () => {
    //時計回りに90°回転
    rotateSum =  rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});

downBtn.addEventListener("click", () => {
    //時計回りに90°回転
    rotateSum =  rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});