const canvas = new fabric.Canvas('canvas', {
    isDrawingMode: true,
    width: 800,
    height: 500
});

// Color Tool
document.getElementById('colorPicker').addEventListener('change', (e) => {
    canvas.freeDrawingBrush.color = e.target.value;
});

// Brush Size Tool
document.getElementById('brushSize').addEventListener('input', (e) => {
    canvas.freeDrawingBrush.width = parseInt(e.target.value, 10);
});

// Clear Tool
function clearBoard() {
    canvas.clear();
    canvas.backgroundColor = '#fff';
}

// Save Tool
function saveDrawing() {
    const dataURL = canvas.toDataURL({ format: 'png' });
    const link = document.createElement('a');
    link.download = 'guess-my-drawing.png';
    link.href = dataURL;
    link.click();
}
