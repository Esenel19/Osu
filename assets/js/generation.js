//generate random pos for x, y
function generation() {
    let x = 650 * Math.random() + 30;
    let y = 350 * Math.random() + 30;
    let result = { x, y, radius };
    return result;
  }