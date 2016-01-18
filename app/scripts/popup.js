'use strict';


document.getElementById("startBtn").onclick = sendClicks;
document.getElementById("newBtn").onclick = addNew;

function sendClicks() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

    	var items = document.getElementsByClassName('jiezou');
    	var msg = [];
    	for (var i = 0; i < items.length; i++) {
    		if(items[i].value !== "") {
    			msg.push(items[i].value);
    		}
    	}

    	var minSec = parseInt(document.getElementById("sec1").value);
    	var maxSec = parseInt(document.getElementById("sec2").value);

    	var data = { messages: msg, min: minSec, max: maxSec };

        chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
            console.log(response.response);
        });
    });
}


function addNew (argument) {
	var html = '<input type="text" class="form-control jiezou" placeholder="输入节奏">';
	var node = document.getElementById("jiezou_list");
	node.insertAdjacentHTML('beforeend', html);
}