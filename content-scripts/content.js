
var curUrl = window.location.href;

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






