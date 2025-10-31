# st_js_ecmascript278

# テストコード:Jestを使用
st_js_ecmascript278/
├── maintest.js (ブラウザでもJestでも動く)
├── tests/
│   └── maintest.test.js
├── package.json
├── jest.config.json
└── node_modules/ (.gitignore対象)
## テストコードはJestフレームワークを使用
- npm init -y (package.jsonを生成)
- npm install --save-dev jest (Jestインストール)
- jsonファイルのscriptsセクションに対象コードを追加
　-- "test": "echo \"Error: no test specified\" && exit 1" とあるがそれを上書きで
　-- "test": "jest"とする
- 手動で、ファイル名　jest.config.json　を生成する
　-- コード記述{
    "testEnvironment": "node",
    "testMatch": [
        "**/__tests__/**/*.js",
        "**/?(*.)+(spec|test).js"
    ],
    "collectCoverage": false,
    "verbose": true
    }
- ターミナルで　touch jest.config.json　を実行

## maintest.jsをテストしたい時
- testsフォルダを作成
- maintest.test.js　ファイルを作成（project/tests/maintest.test.js）
- 期待されるテストコードを記述し(// tests/maintest.test.js
const { add } = require('../maintest');など。。。)
- npm test　を実行

## 結果
> st_js_ecmascript278@1.0.0 test
> jest

  console.log
    結果OK

      at log (maintest.js:11:17)

 PASS  ./maintest.test.js
  add関数のテスト
    ✓ 2 + 3 は 5 を返す (2 ms)
    ✓ 10 + 20 は 30 を返す
    ✓ 負の数の計算: -5 + 3 は -2 を返す

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.261 s
Ran all test suites.
のように出力されればOK

## git pushするときは.gitignoreでnode_modules/を対象にする
- git cloneの際はnpm install で生成できる