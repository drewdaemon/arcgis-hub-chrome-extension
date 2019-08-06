chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type === 'login') {
      chrome.identity.launchWebAuthFlow({
        url: request.uri,
        interactive: true
      }, resUrl => {
        // TODO store url
        chrome.browserAction.setBadgeText({text: '1'});
        chrome.browserAction.setBadgeBackgroundColor({color: '#FF0000'})
      });
    }
  }
);