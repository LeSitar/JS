setTimeout(() => { console.log('hello') }, 2000); //задержка написанися в консоле текста на 4 секунды  1000= 1 секунде


function display(text) {
    console.log(text)
}
display('hello from normal stream')
console.log('end of code');

let count = 10;
const id=setInterval(function () {
    console.log(count--);
    if (count < 0) {
        console.log('stop');
    clearInterval(id);
}
}, 1000)

// setTimeout(function () {
//     console.log('time out');
//     clearInterval(id);
// }, 3000)

const idTimeOut = setTimeout(display, 1500, 'hello from timeout!');

const btn = document.querySelector('.btn');

btn.onclick = myAnimation;
function myAnimation(){
    const box = document.querySelector('.box');
    let position = 0;
    let id  = setInterval(moveBoxBottom, 10);
        let idTop;
    function moveBoxBottom(){
        if(position === 300){
            clearInterval(id);
        idTop = setInterval(moveBoxTop, 10)
        }
        position++;
        box.style.top = position +'px';
        box.style.left = position +'px';
    }
    function moveBoxTop(){
        if(position === 0){
            clearInterval(idTop);
            id = setInterval(moveBoxBottom, 10)
        }
        position--;
        box.style.top = position +'px';
        box.style.left = position +'px';
    }
}

//Version 2================
/*
function myAnimation() {
	const box = document.querySelector('.box')
	let position = 0;
	const id = setInterval(movieBox, 10);
	function movieBox() {
		if (position == 600) {			
			clearInterval(id);
		} else {
			position++
			if(position < 300){
				box.style.top = position + 'px'
				box.style.left = position + 'px'
			}else{box.style.top = (600 - position) + 'px'
				box.style.left = (600 - position) + 'px'}
		}
	}
}
 */

