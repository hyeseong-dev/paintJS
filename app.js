const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(event) {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseUp(event) {
    painting = false;
}

function onMouseDown(event) {
    stopPainting();
}



if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown); //mousedown은 클릭 했을 때 발생하는 이벤트
    canvas.addEventListener("mouseup", onMouseUp); //mousedown은 클릭 했을 때 발생하는 이벤트
    canvas.addEventListener("mouseleave", stopPainting); // 브러쉬가 캔버스를 벗어났을 때 paint을 false로 처리함

}