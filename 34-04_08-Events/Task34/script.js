//Task1========
const pxArea = document.createElement('div');
document.body.append(pxArea);
let styleProperty = 'width:60px; height: 20px;margin-left: 10px';

const btnWidth15px = document.createElement('button');
btnWidth15px.style.cssText = styleProperty;
btnWidth15px.textContent = '15px';
document.body.append(btnWidth15px);

const btnWidth25px = document.createElement('button');
btnWidth25px.style.cssText = styleProperty;
btnWidth25px.textContent = '25px';
document.body.append(btnWidth25px);

const btnWidth35px = document.createElement('button');
btnWidth35px.style.cssText = styleProperty;
btnWidth35px.textContent = '35px';
document.body.append(btnWidth35px);

pxArea.append(btnWidth15px);
pxArea.append(btnWidth25px);
pxArea.append(btnWidth35px);

const btnRed = document.createElement('button');
btnRed.style.cssText = styleProperty;
btnRed.textContent = 'Red';
document.body.append(btnRed);

const btnGreen = document.createElement('button');
btnGreen.style.cssText = styleProperty;
btnGreen.textContent = 'Green';
document.body.append(btnGreen);

const btnBlue = document.createElement('button');
btnBlue.style.cssText = styleProperty;
btnBlue.textContent = 'Blue';
document.body.append(btnBlue);

const text = document.createElement('p');
document.body.append(text);
text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil debitis odio ad delectus amet ea voluptas harum recusandae accusantium?';

const line = document.createElement('hr');
document.body.append(line);
line.style.marginTop='100px';

//Task1======== Actions

btnWidth15px.onclick = () => text.style.fontSize = '15px';
btnWidth25px.onclick = () => text.style.fontSize = '25px';
btnWidth35px.onclick = () => text.style.fontSize = '35px';
btnRed.onclick = () => text.style.color = 'red';
btnGreen.onclick = () => text.style.color = 'green';
btnBlue.onclick = () => text.style.color = 'blue';

//============Task2
const calc1Area = document.createElement('div');
document.body.append(calc1Area);

const inputWidth = document.createElement('input');
document.body.append(inputWidth);

const widthBtn = document.createElement('button');
widthBtn.style.cssText = styleProperty;
widthBtn.textContent = 'Set';
document.body.append(widthBtn);

calc1Area.append(inputWidth);
calc1Area.append(widthBtn);

const calc2Area = document.createElement('div');
document.body.append(calc2Area);

const inputBtnColor = document.createElement('input');
document.body.append(inputBtnColor);
const ColorBtn = document.createElement('button');
ColorBtn.style.cssText = styleProperty;
ColorBtn.textContent = 'Set';
document.body.append(ColorBtn);
calc2Area.append(inputBtnColor);
calc2Area.append(ColorBtn);

const text2 = document.createElement('p');
document.body.append(text2);
text2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil debitis odio ad delectus amet ea voluptas harum recusandae accusantium?';

//Task 2 ======Actions

widthBtn.onclick = () => {
    let widthValue = inputWidth.value;
    text2.style.fontSize = `${widthValue}px`;
}
ColorBtn.onclick = () => {
    let textColor = inputBtnColor.value;
    text2.style.color = `${textColor}`;
}

//Task3==========

const circleRandomNumber= document.createElement('div');
document.body.append(circleRandomNumber);
circleRandomNumber.style.cssText = 'width: 200px; height: 200px; background-color: blue; margin-top: 20px; text-align: center';

circleRandomNumber.style.fontSize = '200px';
function findRandomNumber() {
    return parseInt(Math.random() * 256)
    }
function clickHandler() {
    let counter = 0;
    return () => {
    counter++;
    circleRandomNumber.textContent = counter;
    circleRandomNumber.style.backgroundColor = `rgb(${findRandomNumber()},${findRandomNumber()},${findRandomNumber()})`;
        }
    }
circleRandomNumber.onclick = clickHandler();


// circleRandomNumber.onclick = () => {
//     count++;
//     circleRandomNumber.textContent = count;
//     circleRandomNumber.style.backgroundColor = `rgb(${findRandomNumber()},${findRandomNumber()},${findRandomNumber()})`;
// }

     // let randomColor = get_random_color();
    // circleRandomNumber.style.backgroundColor = randomColor;

    // function get_random_color() {
    //     let color = "";
    //     for(let i = 0; i < 3; i++) {
    //         let sub = Math.floor(Math.random() * 256).toString(16);
    //         color += (sub.length == 1 ? "0" + sub : sub);
    //     }return "#" + color;
    //     }  
    // };
