
var curUrl = window.location.href;

if (curUrl.indexOf("blog.csdn.net") != -1)
{
  var tUserSelect = ["blog.csdn.net"];
  var bReqSwitch = false;
  for(var i = 0, len = tUserSelect.length; i < len; i++) {
    // 禁用 csdn等 无法复制的功能
    if (curUrl.indexOf(tUserSelect[i]) != -1)
    {
      console.log(tUserSelect[i])
      
      bReqSwitch = true;
      break;
    }
  }

  if (bReqSwitch == true)
  {
    var optSwitch = 0;
    chrome.runtime.sendMessage({msg: "IsAntiUserSelect"}, function(response) {
      optSwitch = response.ret;
      console.log(optSwitch)
      if (optSwitch === 1)
      {
        $(document).ready(function(){
          $("#content_views pre").attr("style","user-select:auto");
          $("#content_views pre code").attr("style","user-select:auto");
        })
      }

    });  
  }
}
else if (curUrl.indexOf("cn.bing.com") != -1) {
  console.log(curUrl);

  const targetNode = document.getElementById('b_header');
  const config = {childList: true};
  let observer = new MutationObserver(mutations => {
    
    for(let mutation of mutations) {
      if (mutation.type === "childList") {
        var sNewNodeID = mutation.addedNodes[0].attributes["id"];
        if (sNewNodeID && sNewNodeID.nodeValue && sNewNodeID.nodeValue.indexOf("bnp.nid.") != -1) {
          console.log(sNewNodeID.nodeValue);
          var eNotify = document.getElementById(sNewNodeID.nodeValue);
          if (eNotify) {
            eNotify.parentNode.removeChild(eNotify);
          }

          observer.disconnect();
          break;
        }
      }
  }

  })

  observer.observe(targetNode, config);
}







