'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var barHeigth = 150;
  var indent = 40;
  var initialX = 120;
  var initialY = 80;
  var lineHeight = 15;
  var step = 50;
  var max = -1;
  var maxIndex = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
}

  for (var j = 0; j < times.length; j++) {
    var timePercent = times[j] / max * 100;
    var timeHeight = barHeigth * timePercent / 100;
    var timeX = initialX + j * (step + indent);
    var shiftY = barHeigth - timeHeight;
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,255,' + Math.random() + ')';
  }
    ctx.fillRect(timeX, initialY + shiftY, indent, timeHeight);
    ctx.fillStyle='black';
    ctx.fillText(Math.round(times[j]), timeX, initialY + shiftY - 4);
    ctx.fillText(names[j], timeX, barHeigth + initialY + 20);
  }
};
