// let pressedKeys = [];
// const secretCode = "somecode";

// window.addEventListener("keyup", checkCode);

// function checkCode(event) {
//   pressedKeys.push(event.key);
//   pressedKeys = pressedKeys.slice(-secretCode.length);
//   console.log(pressedKeys);
//   if (pressedKeys.join("").includes(secretCode)) {
//     cornify_add();
//   }
// }

(function() {
  let pressedKeys = [];
  const secretCode = "somecode";

  window.addEventListener("keyup", event => {
    pressedKeys.push(event.key);
    pressedKeys = pressedKeys.slice(-secretCode.length);
    console.log(pressedKeys);
    if (pressedKeys.join("").includes(secretCode)) {
      cornify_add();
    }
  });
})();
