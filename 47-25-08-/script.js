// function printContext() {
//     console.log(this)
// }

// printContext(); //Window


// const user = {
//     name: 'Vasya',
//     print: function () {
//         console.log(this)
//     }
// }

// user.print();//Object

const timerInput = document.querySelector('#timerInput'),
    result = document.querySelector('#result'),
    startBtn = document.querySelector('#startBtn'),
    stoptBtn = document.querySelector('#stopBtn');

const timer = new Timer(0, onUpdateCount, onStop);
result.style.display = 'none';
startBtn.onclick = function () {
    const input = parseInt(timerInput.value);
    timer.count = input;
    timer.start()
    timerInput.style.display = 'none'
    result.style.display='block'
}

// stoptBtn.onclick = timer.stop.bind(timer);//привязываем контекст к таймеру, а до этого был контекст кнопки

stoptBtn.onclick = function () {
    timer.stop();
}

function onUpdateCount(count) {

    result.innerHTML=count
}

function onStop(count) {
    timerInput.value = count;
    timerInput.style.display = "block"
    result.style.display='none'
}