showFeaturesMenu.addEventListener("click", async () => {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        (tabs) => {
            chrome.cookies.set({
                name: 'mwDisplayFeaturesManager',
                value: 'true',
                url: tabs[0].url
            });
            document.cookie="mwDisplayFeaturesManager=true; path=/";
            chrome.tabs.reload(tabs[0].id)
            // window.location.reload();
        }
    );
});