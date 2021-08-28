// [8,1,4,7,3,5,12,2,9]
//[1, 8, 4]
//let tmp= 8;
function bubbleSort(array) {
    let swapped;
    let i = 0;
    do {
        swapped = false;
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
                swapped = true;
            }
        }
        i++;
        console.log(array);
    } while (swapped);
}
const numbers = [8, 1, 4, 7, 3, 5, 12, 2, 9];
bubbleSort(numbers);
console.log(numbers);

// const testArr = [8,1,4,7,3,5,12,2,9]

// function bubbleSortEnd(array){
// 	for(let i = array.length-1; i>0; i--){
// 		for(let j = 0; j < i; j++){
// 			if(array[j] > array[i]){
// 				let tmp = array[j];
// 				array[j] = array[i] 
// 				array[i] = tmp
// 			}
// 		}
// 		console.log(array)
// 	}	
// 	return array
// }
// console.log(bubbleSortEnd(testArr))


//[1,2,3,4,5,7,8,9,12]
//Находим цифру и  выводим её номер индекса
const arr = [1, 2, 3, 4, 5, 7, 8, 9, 12];
let itaration = 0;

function binarySearch(array, number) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2); // делим  длину массива на пополам и округляем
        itaration++;
        if (array[middle] === number) {
            return middle;
        }
        else if (array[middle] > number) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return -1

}
console.log(binarySearch(arr, 2));
console.log(itaration);