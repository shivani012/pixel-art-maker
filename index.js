const mainDiv = document.createElement('div');
mainDiv.className='Main';
let col;
const colorDiv = document.createElement('div');
colorDiv.className = "CPalette";
const availableColors = ["red","blue","yellow","green","orange","black","grey","white","brown","violet","purple","lightgrey"];
let pick;
for (pick of availableColors) {
    const boxDiv = document.createElement('div');
    boxDiv.className = "boxDiv";
    //boxDiv.innerHTML = "color";
    boxDiv.style.backgroundColor = pick;
    /*for (let i = 0; i < 2; i++) {
        const boxDiv = document.createElement('div');
        boxDiv.className = "boxDiv";
        boxDiv.innerHTML = "color";
        switch(i) {
            case 0:
                boxDiv.style.backgroundColor = 'blue';
                break;
            case 1:
                boxDiv.style.backgroundColor = 'red';
                break;
        }*/
    boxDiv.addEventListener('click', () => {
        col = boxDiv.style.backgroundColor;
        currCol.style.backgroundColor=col;
    })
    colorDiv.appendChild(boxDiv)
}

const currCol = document.createElement('div');
currCol.className='boxDiv';
//currCol.innerHTML = "Current Color";


//const parentDiv = document.createElement('div')
//parentDiv.className = "PPalette";
for (let j=0; j<80; j++) {
    const outDiv = document.createElement('div');
    outDiv.className = "OPalette";
    for (let i = 0; i < 80; i++) {
        const div = document.createElement('div');
        //div.innerHTML = "Color";
        div.addEventListener('click',()=>{
            div.style.backgroundColor =col;
        })

        div.className = "Palette"
        outDiv.appendChild(div);
    }
    //parentDiv.appendChild(outDiv);
    mainDiv.appendChild(outDiv);
}
mainDiv.appendChild(colorDiv);
mainDiv.appendChild(currCol);
document.body.appendChild(mainDiv);

