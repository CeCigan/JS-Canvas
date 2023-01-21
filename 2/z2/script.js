var canvas = document.getElementById('can1')
var ctx = canvas.getContext('2d')
var image = new Image()
image.onload = function () {
  ctx.save()
  ctx.translate(40, -10)
  ctx.rotate((30 * Math.PI) / 180)
  ctx.scale(0.3, 0.3)
  ctx.drawImage(image, 0, 0)
  ctx.restore()

  ctx.save()
  ctx.rotate((-30 * Math.PI) / 180)
  ctx.translate(100, 100)
  ctx.scale(0.4, 0.4)
  ctx.drawImage(image, 0, 0)
  ctx.restore()
}
image.src = 'image.png'
