(function(){
    var designWdith = 7.5;
    var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

    window.addEventListener(resizeEvent, recalc, false);
    document.documentElement.addEventListener('DOMContentLoaded', recalc, false);

    function recalc(){
        document.documentElement.style.fontSize = document.documentElement.clientWidth / designWdith + 'px';
    }
})

