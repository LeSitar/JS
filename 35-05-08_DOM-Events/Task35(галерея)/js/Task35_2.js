const prevBtn = document.querySelector('#prevBtn'),
    nextBtn = document.querySelector('#nextBtn'),
    imgBox = document.querySelector('.img_box');

const items = document.querySelectorAll('.item');
console.log(items);

let curentIndex = 0;
items[curentIndex].style.display = 'block';

nextBtn.onclick = () => {
    
    items[curentIndex].style.display = 'none';
    curentIndex++;
    if (curentIndex === items.length) curentIndex = 0;
    items[curentIndex].style.display = 'block';
}

prevBtn.onclick = () => {
    items[curentIndex].style.display = 'none';
    curentIndex--;
    if (curentIndex <0) curentIndex = items.length-1;
    items[curentIndex].style.display = 'block';
}

// function show(element) {
//     element.style.display = 'block';
// }
// function hide(element) {
//     element.style.display = 'none';
// }




