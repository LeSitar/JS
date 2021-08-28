
const input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    d = document.querySelector('.days'),
    h = document.querySelector('.hours'),
    m = document.querySelector('.minutes'),
    s = document.querySelector('.seconds'),
table = document.querySelector('#table');

btn.onclick = () => {
    if (!input.value) {
        alert('Enter the date, please')
        return
    }
    const tr = document.createElement('tr');
    tr.innerHTML = ` <td>days</td>
                    <td>hours</td>
                    <td>minutes</td>
                    <td>seconds</td>`
    table.append(tr);
    const id = setInterval(function () {
        const deadLine = new Date(`${input.value}`);
        const daysLeft = (deadLine - new Date());
        const days = Math.floor(daysLeft / (24 * 60 * 60 * 1000));
        const hours = Math.floor(daysLeft / (60 * 60 * 1000)) % 24;
        const minutes = Math.floor(daysLeft / (60 * 1000) % 60);
        const seconds = Math.floor((daysLeft / 1000) % 60);
        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = seconds;
        let count = daysLeft;
        count--;
        if (count < 0) {
            clearInterval(id);
        }
    }, 1000)
    input.setAttribute('disabled', true);
    btn.setAttribute('disabled', true);
}
