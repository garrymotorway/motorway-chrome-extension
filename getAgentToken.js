const httpGet = (url, callback, data = null) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
            return callback(xmlHttp);
        };
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(data);
};

const getAgentToken = () => {
    httpGet('https://api.stage.motorway.co.uk/premium-v3/users/getAgentToken', ({ responseText, status }) => {
        if (status === 200) {
            const json = JSON.parse(responseText);
            return prompt('Your agent token', json.data['x-mway-user'])
        }

        if (status === 401 || status === 403) {
            alert('Unauthorised. Make sure you are logged in.')
            return;
        }
    });
};