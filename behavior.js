// gsapの関数

// 現在進行中の課題で、要素のブロックに対して、
// 最上位をトリガーに中身をバラバラに動かしていきたいです。
// GSAPで、便利な関数がありそうなので使ってみようと思いました。

// 使える、動く
console.log(gsap.utils.random(["red", "green", "blue"]))
console.log(gsap.utils.shuffle([1, 2, 3, 4, 5]))

// 以下、質問です。
// 肝心の関数が動きません。
// ChatGPTには、querySelectorAllを使えと言われました。
// 便利に思えるのですが、
// そもそも、こんなことなら使わないほうがいいのでしょうか？

// /////////////////////////////////////////////////////
// // 意図通りにならない。
// // 全ての.boxがコンソールに表示させたいが、空の配列があるだけ。
// const targets = gsap.utils.toArray(".box");
// console.log(targets)

// /////////////////////////////////////////////////////
// この関数も意図通りにならない。
// .containerに含有された.boxの値が3つ入った配列が欲しいが、

// gsap.min.js: Invalid scope
// R @gsap.min.js: 10
// cb @gsap.min.js: 10
//   (anonymous) @behavior.js: 15

// gsap.min.js: Invalid scope
// R @gsap.min.js: 10
//   (anonymous) @gsap.min.js: 10
//     (anonymous) @behavior.js: 16

// behavior.js: []

// Invalid scopeが2つ返って、最後に空の配列となる。
const q = gsap.utils.selector('.container')
const boxes = q(".box");
console.log(boxes)
