'use strict';

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        (function loop() {
		    var rand = Math.round(Math.random() * (request.max*1000 - request.min*1000)) + request.min*1000;
		    setTimeout(function() {
		    		var r = Math.round(Math.random() * (request.messages.length -1);
		            document.getElementById("chart_content").value = request.messages[r];
		            document.getElementById('sendmsg').click();
		            loop();  
		    }, rand);
		}());
        // document.getElementById("chart_content").value = "p神加油！";
        // document.getElementById('sendmsg').click();
});
