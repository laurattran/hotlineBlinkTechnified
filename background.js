// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//var clicked = true;
var flag = 0;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab){
  if(flag==0){
    chrome.tabs.executeScript({
    code:'document.body.style.background="#00ffff"; document.body.style.animation = "blink 1s infnite"; document.body.style.WebkitAnimation="blink 1s infinite"'
  });
    flag++;
  }
  else if(flag==1){
    chrome.tabs.executeScript({
      code: 'document.body.style.background="#ff7bac"; document.body.style.animation = "blink 1s infnite"; document.body.style.WebkitAnimation="blink 1s infinite"'
  });
    flag++;
  }else if(flag>=2){
      chrome.tabs.executeScript({
      code: 'document.body.style.background="white"; document.body.style.animation = "blink 1s infnite"; document.body.style.WebkitAnimation="blink 1s infinite"'
  });
      flag=0;
  }
});
/*  while(clicked) {
  flag = !flag;
  if(flag){
    chrome.tabs.executeScript({
    //code: 'document.body.style.background="#00ffff"'
    code:'document.body.style.animation = "blink 4s 2"; document.body.style.WebkitAnimation="blink 4s 2"'
  });
  }
  else {
    chrome.tabs.executeScript({
      code: 'document.body.style.background="#ff7bac"'
  });
  }
  
}*/
