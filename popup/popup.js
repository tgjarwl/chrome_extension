
var optSwitch = 0;
chrome.runtime.sendMessage({msg: "IsAntiUserSelect"}, function(response) {
  optSwitch = response.ret;
  console.log(optSwitch)

  var sBtn = document.getElementById("switchCSDN");
  if (sBtn)
  {
    if (optSwitch == 1) {
      sBtn.checked = true;
    }
    else
    {
      sBtn.checked = false;
    }
  }
}); 


var sBtn = document.getElementById("switchCSDN");
if (sBtn)
{
  sBtn.onclick = function() {

    if(sBtn.checked)
    {
      console.log('开启！');
      chrome.runtime.sendMessage({msg: "EnableAntiUserSelect"}, function(response) {
        var optSwitch = response.ret;
        console.log(optSwitch)
      });    
    }
    else
    {
      console.log('关闭！');
      //sBtn.checked=true;
      chrome.runtime.sendMessage({msg: "DisableAntiUserSelect"}, function(response) {
        var optSwitch = response.ret;
        console.log(optSwitch)
      });  
    }
  }
}

