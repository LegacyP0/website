document.getElementById('configForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const bgColor = document.getElementById('bg-color').value;
    const fontColor = document.getElementById('font-color').value;
    const gridLayout = document.getElementById('grid-layout').value;

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    document.querySelector('.grid').style.gridTemplateColumns = `repeat(${gridLayout}, 1fr)`;
});

