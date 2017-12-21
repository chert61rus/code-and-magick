'use strict';

(function(){
  window.backend = {
    load: function(onLoad, onError){
     var xhr = new XMLHttpRequest();
     xhr.open('GET', 'https://1510.dump.academy/code-and-magick/data');
     xhr.addEventListener('load', function(){
       if(xhr.status == 404){
         onError('Произошла ошибка соединения');
       } else {
         var wizardsData = JSON.parse(xhr.response);
         onLoad(wizardsData);
       }
     })
     xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
     });
     xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
     });
     xhr.timeout = 10000; // 10s
     xhr.send();
    },
    save: function(data, onLoad, onError){
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://js.dump.academy/code-and-magick');
      xhr.addEventListener('load', function(){
        if (xhr.status == 200){
          onLoad();
        } else {
          onError('Произошла ошибка соединения');
        }
      })
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
     xhr.timeout = 10000; // 10s
      xhr.send(data);
    }
  }
}())