function myFunction(a) {
    const result = a + 2;
    return result;
}

function calcSum(a, b, c) {
    const result2 = a + b + c;
    return result2;
}
console.log(calcSum(3, 6, 7));

function myFunction2() {
    console.log('こんにちわ');
    return 100;
}
console.log(myFunction2());

const idTest = document.getElementById('idtest');
console.log(idTest);
console.log(idTest.textContent);
idTest.textContent = 'テキスト１';
console.log(idTest);
console.log(idTest.textContent);

// アロー関数（function~を簡略）
const myFunction3 = (b) => {
    return b + 1;
};
console.log(myFunction3(2));