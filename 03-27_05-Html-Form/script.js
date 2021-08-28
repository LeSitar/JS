
    let input = document.querySelector('#inputTest')
    input.oninput = function () {
    document.getElementById('result').innerHTML = input.value;
    };