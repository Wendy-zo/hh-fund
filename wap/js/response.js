// JavaScript Document

	(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
				var clientHeight = docEl.clientHeight;
				//var ratio1=clientHeight/clientWidth;
				//var ratio2=3/4;
                if (!clientWidth) return;
                if(clientWidth<=750&&clientWidth>=320){
					docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
				else if(clientWidth>750){
					docEl.style.fontSize = '100px';
                }	  
				else{
                    docEl.style.fontSize = '12px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
