

// Task01=====
let a= prompt('Please enter the first number');
let b= prompt('Please enter the second number');
b = parseInt(b);
a = parseInt(a);
let result = a + b;
alert('Your amount is: ' + result);

// Task02=====
let pricePerHour = prompt('How much does your work cost per hour?');
let hourDay = prompt('How many hours do you work per day?');
let income = hourDay * pricePerHour * 22;
alert('Your income is: ' + income);

// Task03=====
let radius = prompt('What is the radius of the circle?');
radius = parseInt(radius);
const PI = 3.14;
let area = PI * radius ** 2;
alert('Area of a circle is: ' + area);
