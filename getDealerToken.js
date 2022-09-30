const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map((c) =>
        `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`
    ).join(''));
    return JSON.parse(jsonPayload);
};

const getDealerToken = async () => {
    const token = await getCookie('access-token');
    if (!token) {
        return;
    }
    const jwtPayload = parseJwt(token.value);
    if (jwtPayload.identity) {
        prompt('Dealer token is below', jwtPayload.identity)
    }
};
