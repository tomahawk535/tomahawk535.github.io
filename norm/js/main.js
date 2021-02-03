

function getRandomBId(min, max) {
  return Math.random().toFixed(1) * (max - min) + min;
}
let resultBId = getRandomBId(1300, 4500)

document.getElementById("bid").innerHTML = '€' + resultBId



function getRandomAsk(min, max) {
  return Math.random().toFixed(4) * (max - min) + min;
}
let resultAsk = getRandomBId(1300, 4500)

document.getElementById('ask').innerHTML = '€' + resultAsk



