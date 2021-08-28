
const startBtn = document.querySelector('#startBtn'),
    stopBtn = document.querySelector('#stopBtn'),
    timerValue = document.querySelector('#timerValue'),
    result = document.querySelector('.result');

startBtn.onclick = () => {
    let count = timerValue.value;
    stopBtn.removeAttribute('disabled');
    timerValue.setAttribute('disabled', true);
    const id = setInterval(function () {
        result.innerHTML = count--;
        if (count < 0) {
            clearInterval(id);
            result.textContent = 'time is over';
            timerValue.value = '';
            stopBtn.setAttribute('disabled', true);
            timerValue.removeAttribute('disabled');
            startBtn.removeAttribute('disabled');
            timerValue.focus()
        }
    }, 1000);
    startBtn.setAttribute('disabled', true);
    timerValue.value = '';
    stopBtn.onclick = () => {
        startBtn.removeAttribute('disabled');
        stopBtn.setAttribute('disabled', true);
        result.textContent = 'Timer is stopped';
        timerValue.value = count;
        
        clearInterval(id);
    }
}


