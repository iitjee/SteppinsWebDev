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
you won't get! :p because you need to add permissions
(manifest.json)
    "permissions": ["activeTab", "declarativeContent", "storage"],


now reload and see xD

