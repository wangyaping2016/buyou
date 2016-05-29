document.addEventListener('DOMContentLoaded', function(){
    var imgArr = [
      _ROOT.ROOT + "/themes/haiqing/Buyou/images/logo.png",
      _ROOT.ROOT + "/themes/haiqing/Buyou/images/login-bg.png"
    ];

    var preloaderBox = document.createElement('div');
    var spinner = document.createElement('div');
    var text = document.createElement('div');

    var iNow = 0;
    var hideBox = document.querySelector('.hideBox');

    preloaderBox.id = 'preloaderBox';
    spinner.className = 'spinner';
    text.className = 'text';
    text.innerHTML = '加载中';

    preloaderBox.appendChild(spinner);
    preloaderBox.appendChild(text);
    document.body.insertBefore(preloaderBox, hideBox);

    for (var i = 0; i < imgArr.length; i++) {
      var imgObj = new Image();
      imgObj.src = imgArr[i];
      imgObj.onload = function(){
          iNow++;
          text.innerHTML = parseInt((iNow / imgArr.length) * 100) + '%';

          if (iNow === imgArr.length) {
              spinner.style.WebkitAnimationPlayState = 'paused';
              text.style.WebkitAnimationPlayState = 'paused';

              hideBox.style.display = 'block';
              // document.body.removeChild(preloaderBox);
              preloaderBox.style.height = '0';
          }
      };
      imgObj.onerror = function(){
          alert('网络不给力。。。');
      };
    }
}, false);