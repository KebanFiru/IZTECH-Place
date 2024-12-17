const MainCanvas = document.getElementById("MainPanel");
const ColorPicker = document.getElementById("ColorPicker");

const CanvasRowCount = window.getComputedStyle(MainCanvas).gridTemplateRows.split(' ').length;
const CanvasColumnCount = window.getComputedStyle(MainCanvas).gridTemplateColumns.split(' ').length;

const CellLength = 20;
const ColorCellLength = 70;

const ColorList = ["Red","Black","Green","White","Blue","Yellow","Brown"]

let Color = "Black";

for(let i=0; i<CanvasColumnCount*CanvasRowCount; i++){
    const Cell = document.createElement('div');

    Cell.style.width = `${CellLength}px`;
    Cell.style.height = `${CellLength}p`;
    Cell.classList.add("Cell");

    MainCanvas.appendChild(Cell);
    
    Cell.addEventListener("click", ()=>{
        Cell.style.backgroundColor = `${Color}`;
    })
}

for(let i = 0; i< ColorList.length; i++){
    const ColorCell = document.createElement("div");

    ColorCell.style.width = `${ColorCellLength}px`
    ColorCell.style.height = `${ColorCellLength}px`
    ColorCell.classList.add("ColorCell");
    ColorCell.style.backgroundColor = ColorList[i];

    ColorPicker.append(ColorCell);
}

const Colors = document.getElementsByClassName("ColorCell");

Array.from(Colors).forEach((i)=>{
    i.addEventListener("click",()=>{
        Color = i.style.backgroundColor;
    })

})
