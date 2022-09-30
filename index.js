window.onload = () => {
    const shouldDisplayTechicalInformationOnPage = document.cookie
        .split(';')
        .map(c => c.split('='))
        .flatMap((item) => [item[0]?.trim()])
        .includes('mwDisplayTechicalInformationOnPage')

    if (!shouldDisplayTechicalInformationOnPage) {
        return;
    }

    const exponentialBackoffTMilliseconds = (interval, rate, iteration) => 1000 * interval * rate ** iteration;
    let iteration = 0;
    const tryToDisplayTechicalInformationOnPage = () => {
        console.log('try')
        const elements = Array.from(document.getElementsByClassName('development'));
        elements.forEach((element) => {
            element.classList.remove('development');
        });
        setTimeout(tryToDisplayTechicalInformationOnPage, exponentialBackoffTMilliseconds(0.5, 1.3, ++iteration));
    }
    tryToDisplayTechicalInformationOnPage();
};
