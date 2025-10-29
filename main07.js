const myName = '鈴木07';
alert(myName);

const myArray = ['鈴木', '田中', '中村'];
myArray[0] = '高橋';
console.log(myArray);

const myObject = { id: 20, name: '佐々木' };
console.log(myObject);
myObject.name = '佐々木2';
console.log(myObject);

console.log('配列やオブジェクトの変更を制御するには、Object.freeze()メソッドを使用する')