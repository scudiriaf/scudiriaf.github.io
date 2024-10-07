let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let intervalId;

function moveRainbow() {
    let table = document.getElementById("rainbowTable");
    let lastColor = colors.pop();
    colors.unshift(lastColor);

    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].style.backgroundColor = colors[i];
    }
}

function startAutoMove() {
    if (!intervalId) {
        intervalId = setInterval(moveRainbow, 300);
    }
}

function stopAutoMove() {
    clearInterval(intervalId);
    intervalId = null;
}
