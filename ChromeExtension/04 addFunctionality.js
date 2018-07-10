The extension now knows the popup should be available to users on www.xyz.com and displays a colored button, but needs logic for 
further user interaction. Update popup.js to include the following code.
(popup.js)
           let changeColor = document.getElementById('changeColor');
            ...
            changeColor.onclick = function(element) {
              let color = element.target.value;
              chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: 'document.body.style.backgroundColor = "' + color + '";'});
              });
            };
            
            
run it and see! :D
you wont get! :p because you need to add permissions
(manifest.json)
    "permissions": ["activeTab", "declarativeContent", "storage"],


now reload and see xD



The extension currently only allows users to change the background to green. Including an options page gives users more control over the 
extension's functionality, further customizing their browsing experience.
(create options.html)
                       <!DOCTYPE html>
                        <html>
                          <head>
                            <style>
                              button {
                                height: 30px;
                                width: 30px;
                                outline: none;
                                margin: 10px;
                              }
                            </style>
                          </head>
                          <body>
                            <div id="buttonDiv">
                            </div>
                            <div>
                              <p>Choose a different background color!</p>
                            </div>
                          </body>
                          <script src="options.js"></script>
                        </html>

Then register the options page in the manifest,
    "options_page": "options.html",

               
go to chrome://extensions near your extension and click Details
and checkoout "extension options"

