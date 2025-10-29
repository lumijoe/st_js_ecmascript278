// 等しい　→（○）true、（x）false
console.log(1);
console.log('鈴木' == '鈴木');

// 厳密等価：等しいし+型が同じ　→（○）true、（x）false
console.log(2);
console.log('鈴木' === 10);
console.log('鈴木' === '冴木');
console.log('鈴木' === '鈴木');

// 等しくない　→（○）true、（x）false
console.log(3);
console.log('鈴木' != '鈴本');

// 厳密不等価：等しくないし、または、型が違う　→（○）true、（x）false
console.log(4);
console.log('鈴木' !== 10);
console.log('鈴木' !== '冴木');
console.log('鈴木' !== '鈴木');

// 小なり、小なりイコール
console.log(5);
console.log(10 < 20);
console.log(10 <= 20);
console.log(21 <= 20);

// 大なり、大なりイコール
console.log(6);
console.log(22 < 20);
console.log(28 <= 20);
console.log(10 <= 20);

// 参照先の不一致と一致
console.log(7);
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 == array2);
const array3 = array2;
console.log(array2 == array3);
