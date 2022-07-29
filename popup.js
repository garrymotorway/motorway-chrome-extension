const toggleCookie = (cookieName) => {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    async (tabs) => {
        if (!tabs?.length || !tabs[0].url) {
            return;
        }
        const current = await chrome.cookies.get({
            name: cookieName,
            url: tabs[0].url
        });
        if (current?.value) {
            await chrome.cookies.remove({
                name: cookieName,
                url: tabs[0].url
            });
        }
        else {
            await chrome.cookies.set({
                name: cookieName,
                value: 'true',
                url: tabs[0].url
            });
        }
        chrome.tabs.reload(tabs[0].id)
    }
);
}

displayFeaturesManager.addEventListener("click", async () => {
    toggleCookie('mwDisplayFeaturesManager');
});

displayTechicalInformationOnPage.addEventListener("click", async () => {
    toggleCookie('mwDisplayTechicalInformationOnPage');
});
