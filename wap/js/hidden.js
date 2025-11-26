// JavaScript Document
(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
				var clientHeight = docEl.clientHeight;
				var ratioNumber = 3/4;
				var WDH = clientHeight/clientWidth;
				var main = document.getElementById("main");
                if (!clientWidth) return;
                if(WDH>=ratioNumber){
					main.style.width=clientWidth +"px";
					main.style.height=3 * (clientWidth/4) + "px";
                }
				else{
                   main.style.height=clientHeight +"px";
				main.style.width=4 * (clientHeight/3) + "px";
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
	
	
	
