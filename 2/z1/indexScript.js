let image1 = new Image()
image1.src = 'image.png'
var x = 10,
  loop = 0
var canvas = document.getElementById('can1')
var ctx = canvas.getContext('2d')
function move() {
  if (x < 200 && loop == 0) {
    x += 5
  } else {
    loop = 1
  }
  if (x >= 10 && loop == 1) {
    x -= 5
  } else {
    loop = 0
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(image1, x, 10, 80, 80)
}

image1.onload = function () {
  setInterval(move, 100)
}
