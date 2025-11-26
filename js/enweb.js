// JavaScript Document
(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
				var menucell = document.getElementById("menucell");
                if (!clientWidth) return;
                if(clientWidth>=1431&&clientWidth<1518){
					menucell.style.width = 805 + 'px';
                }
				else if(clientWidth>=1518&&clientWidth<1611){
					menucell.style.width = 895 + 'px';
                }
				else if(clientWidth>=1611){
					menucell.style.width = 985 + 'px';
                }	  
				else{
                    menucell.style.width = '714px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);