import ctx, { size } from './main.js'

const x = 1 * size
const y = 2 * size

// draw a square
ctx.beginPath()
ctx.rect(x, y, size, size)
ctx.fillStyle = 'tomato'
ctx.fill()

// draw a circle 
ctx.beginPath()
// draw a complete circle
ctx.arc(x + size / 2, y + size / 2, 40, 0, Math.PI * 2)
ctx.fillStyle = '#333'
ctx.fill()

// Stroke a path
ctx.beginPath()
// draw half a circle
ctx.arc(x + size / 2, y + size / 2, 30, 0, Math.PI)
ctx.lineWidth = 3
ctx.strokeStyle = '#ffeeee'
ctx.stroke()

// Draw some text
ctx.beginPath()
ctx.font = '18px Helvetica'
ctx.fillStyle = '#fff'
ctx.fillText('Hello', x + 8, y + 20)

// Use the docs to figure out how to draw other things
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
