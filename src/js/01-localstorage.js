console.log(localStorage);

localStorage.setItem('my-name', JSON.stringify({ name: 'Maksym', age: 28 }));

const savedData = localStorage.getItem('my-name');
console.log("savedData", savedData);

const parsedData = JSON.parse(savedData);
console.log("parsedData", parsedData);

