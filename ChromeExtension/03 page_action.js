(background.js)

 Because page_action is declared in the manifest, it is up to the extension to tell the browser when the user can interact with 
 popup.html.
 
 Add declared rules to the background script with the declarativeContent API within the runtime.onInstalled listener event.
                             chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
                                chrome.declarativeContent.onPageChanged.addRules([{
                                  conditions: [new chrome.declarativeContent.PageStateMatcher({
                                    pageUrl: {hostEquals: 'www.xyz.com'},
                                  })
                                  ],
                                      actions: [new chrome.declarativeContent.ShowPageAction()]
                                }]);
                              });
                              
The extension will need permission to access the declarativeContent API in its manifest.
                            "permissions": ["declarativeContent", "storage"],
                            


(complete code in background.js)
                chrome.runtime.onInstalled.addListener(function() {
                    chrome.storage.sync.set({color: '#3aa757'}, function() {
                      console.log('The color is green.');
                    });
                    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
                      chrome.declarativeContent.onPageChanged.addRules([{
                        conditions: [new chrome.declarativeContent.PageStateMatcher({
                          pageUrl: {hostEquals: 'www.xyz.com'},
                        })
                        ],
                            actions: [new chrome.declarativeContent.ShowPageAction()]
                      }]);
                    });
                  });

The browser will now show a color icon in the browser toolbar when users navigate to a URL that contains "www.xyz.com". When 
the icon is full-color, users can click it to view popup.html. Create and add a file called popup.js with the following code to the extension directory

                              'use strict';

                              let changeColor = document.getElementById('changeColor');
                              chrome.storage.sync.get('color', function(data) {
                                changeColor.style.backgroundColor = data.color;
                                changeColor.setAttribute('value', data.color);
                         });
(popup.html)
...
<body>
    <button id="changeColor"></button>
    <script src="popup.js"></script>
  </body>
...



