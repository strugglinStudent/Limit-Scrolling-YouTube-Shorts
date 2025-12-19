chrome.action.onClicked.addListener(() => {
    chrome.storage.local.get('enabled', (res) => {
        const enabled = res.enabled !== false; // default ON
        const newState = !enabled;

        chrome.storage.local.set({ 'enabled': newState });
        
        if(enabled) {
             chrome.action.setIcon({path : "/turnOFF.png"},)
                }
        else {
             chrome.action.setIcon({ path : "/turnON.png" })
        }
    });
});
