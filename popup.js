const getCookie = (cookieName) => {
    return new Promise(async (resolve, reject) => {
        chrome.tabs.query(
            {
                'active': true,
                'windowId': chrome.windows.WINDOW_ID_CURRENT,
            },
            (tabs) => {
                if (!tabs?.length || !tabs[0].url) {
                    return reject();
                }
                chrome.cookies.get({
                    name: cookieName,
                    url: tabs[0].url
                }).then(resolve).catch(reject);
            },
        );
    });
};

const toggleCookie = async (cookieName) => {
    const current = await getCookie(cookieName);
    alert(current?.value);
    chrome.tabs.query(
        {'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        async (tabs) => {
            if (!tabs?.length || !tabs[0].url) {
                return;
            }
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
        },
    );
}

displayFeaturesManager.addEventListener("click", async () => {
    toggleCookie('mwDisplayFeaturesManager');
});

displayTechicalInformationOnPage.addEventListener("click", async () => {
    toggleCookie('mwDisplayTechicalInformationOnPage');
});

getAgentToken.addEventListener("click", async () => {
    getAgentToken();
});

getDealerToken.addEventListener("click", async () => {
    getDealerToken();
});