document.body.innerHTML = "Hello 999orld!";
//const parentDiv = document.createElement('div')
//parentDiv.className = "PPalette";
for (let j=0; j<200; j++) {
    const outDiv = document.createElement('div');
    outDiv.className = "OPalette";
    for (let i = 0; i < 200; i++) {
        const div = document.createElement('div');
        //div.innerHTML = "Color";
        div.addEventListener('click',()=>{
            div.style.backgroundColor = 'red';
        })

        div.className = "Palette"
        outDiv.appendChild(div);
    }
    //parentDiv.appendChild(outDiv);
    document.body.appendChild(outDiv);
}
const colorDiv = document.createElement('div');
colorDiv.className = "CPalette";
for (let i = 0; i < 2; i++) {
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
    }

    colorDiv.appendChild(boxDiv)
    }
document.body.appendChild(colorDiv);

