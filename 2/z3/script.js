function drawHome() {
  let canvas = document.getElementById('can1')
  let ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.moveTo(25, 25)
  ctx.lineTo(105, 25)
  ctx.lineTo(25, 105)
  ctx.fillStyle = 'red'
  ctx.fill()
  ctx.closePath()
}
