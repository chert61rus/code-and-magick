window.renderStatistics = function (ctx, names, times) { 
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; 
  ctx.fillRect(110, 20, 420, 270);
  
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; 
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';    
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
   
  var barHeigth = 150; // px; 
  var indent = 40;     // px;
  var initialX = 120;  // px;
  var initialY = 80;   // px;
  var lineHeight = 15; // px;
  var step = 50;       // px;
    
  var max = -1;
  var maxIndex = -1;
    for (var i=0; i<times.length; i++){
        var time = times[i];
        if (time > max){
            max = time;
            maxIndex = i;
        }
    }
  
  for (var i=0; i<times.length; i++){
      var timePercent = times[i]/max*100; // высота в процентах 
      var timeHeight = barHeigth*timePercent/100;
      var timeX = initialX + i*(step+indent);
      var shiftY = barHeigth - timeHeight;
      if(names[i] == 'Вы') {
          ctx.fillStyle='rgba(255, 0, 0, 1)';
      } else {
          ctx.fillStyle='rgba(0,0,255,' + Math.random()+ ')';
      };
      ctx.fillRect(timeX, initialY+shiftY, indent, timeHeight);
      ctx.fillStyle='black';
      ctx.fillText(Math.round(times[i]), timeX, initialY+shiftY-4);
      ctx.fillText(names[i], timeX, barHeigth+initialY+20);
   }
};
