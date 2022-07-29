// const showFeatures = () => {
//     document.cookie="mwDisplayFeaturesManager=true; path=/";
//     window.location.reload();
// };

// document.getElementById('showFeaturesMenu').addEventListener("click", async () => {
//     alert('i was clicked')
// });

// chrome.browserAction.onClicked.addListener(function(tab) {
// });

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
  
      // do your things
  
    }
  })