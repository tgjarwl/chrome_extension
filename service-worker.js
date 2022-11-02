var opts = {"AntiUserSelect":1};

// 后台监听事件消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    var bFromExtern = 0;
    var sUrl = "";
    if (sender.tab) {
        console.log("from a content script:" + sender.tab.url);
        sUrl = sender.tab.url;
        bFromExtern = 0;
    }
    else {
        console.log("from the extension");
        bFromExtern = 1;
    }

    console.log(sUrl);
    if (message.msg === "IsAntiUserSelect" ) {
        sendResponse({ret: opts["AntiUserSelect"]});
        return ;
    }

    if (bFromExtern == 1)
    {
        if (message.msg === "EnableAntiUserSelect") {
            opts["AntiUserSelect"] = 1;
            sendResponse({ret:"done"});
        }
        else if (message.msg === "DisableAntiUserSelect") {
            opts["AntiUserSelect"] = 0;
            sendResponse({ret:"done"});
        }
    }
});