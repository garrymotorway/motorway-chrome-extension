window.onload = () => {
    const shouldDisplayTechicalInformationOnPage = document.cookie
        .split(';')
        .map(c => c.split('='))
        .flatMap((item) => [item[0]?.trim()])
        .includes('mwDisplayTechicalInformationOnPage')

    if (!shouldDisplayTechicalInformationOnPage) {
        return;
    }

    let done = false;
    const tryToDisplayTechicalInformationOnPage = () => {
        if (done) return;
        Array.from(document.getElementsByClassName('development')).forEach((element) => {
            element.classList.remove('development');
        });
    }

    // Try 5 times to display dev data and give async operations time to complete
    setTimeout(tryToDisplayTechicalInformationOnPage, 1000);
    setTimeout(tryToDisplayTechicalInformationOnPage, 2000);
    setTimeout(tryToDisplayTechicalInformationOnPage, 3000);
    setTimeout(tryToDisplayTechicalInformationOnPage, 5000);
    setTimeout(tryToDisplayTechicalInformationOnPage, 8000);
};
