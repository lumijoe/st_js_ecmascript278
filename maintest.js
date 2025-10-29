function add(a, b) {
    return a + b;
}

function testAdd() {
    const result = add(2, 3);
    if (result !== 5) {
        throw new Error(`add(a, b)は a と b の和を返すもの, しかし帰ってきたのは ${result}`);
    }
    else {
        console.log('結果OK');
    }
}

testAdd();

// テスト用：Node.js環境の場合のみexport（ブラウザではスキップ）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add };
}