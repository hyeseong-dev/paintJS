const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");


canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(event) {
    painting = false;
}

function startPaint() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;


}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPaint); //mousedown은 클릭 했을 때 발생하는 이벤트
    canvas.addEventListener("mouseup", stopPainting); //mousedown은 클릭 했을 때 발생하는 이벤트
    canvas.addEventListener("mouseleave", stopPainting); // 브러쉬가 캔버스를 벗어났을 때 paint을 false로 처리함

}

Array.from(colors).forEach(potato =>
    potato.addEventListener('click', handleColorClick)
);