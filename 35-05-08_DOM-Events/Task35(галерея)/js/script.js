//=========Calculator=========================
const add1 = document.querySelector('.add1'),
    add2 = document.querySelector('.add2'),
    addResult = document.querySelector('.add_result'),
    addBtn = document.querySelector('.addBtn'),
    subBtn = document.querySelector('.subBtn'),
    subResult = document.querySelector('.subResult'),
    multBtn = document.querySelector('.multBtn'),
    multResult = document.querySelector('.mult_resul'),
    divResult = document.querySelector('.div_result'),
    divBtn = document.querySelector('.divBtn');

addBtn.onclick = () => {
    addResult.textContent = Number(add1.value) + Number(add2.value);
}
subBtn.onclick = () => {
    subResult.textContent = Number(document.querySelector('.sub1').value) - Number(document.querySelector('.sub2').value);
}
multBtn.onclick = () => {
    multResult.textContent=Number(document.querySelector('.mult1').value) * Number(document.querySelector('.mult2').value);
}
divBtn.onclick = () => {
    divResult.textContent=Number(document.querySelector('.div1').value) / Number(document.querySelector('.div2').value);
}

//========Palindrom
const checkBtn = document.querySelector('.checkBtn'),
    palindrom = document.querySelector('.palindrom'),
    result = document.querySelector('.result');
let palindromValue = palindrom.value;

checkBtn.onclick = () => {

    function checkPalindrom(str) {
        str = str.replaceAll(' ', '')
        if (str === '') {
            return `Enter palindrom, please!`
        } else if (str.length == 1) {
            return `Enter more symbol`
        }
        else if (str == str.split('').reverse().join('')) {
            result.style.color= 'green';
            return `Palindrom!`
        }result.style.color= 'red';
        return `Not palindrom!`
    }
    result.textContent = `${checkPalindrom(palindrom.value)}`;
}

//======Count=====

const clickBtn = document.querySelector('.clickBtn'),
    click = document.querySelector('.click');

function clickHandler() {
    let counter = 0;
    return () => {
        counter++;
        click.textContent = counter;
    }
}
clickBtn.onclick = clickHandler();