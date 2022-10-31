const jwt = require('jsonwebtoken');
const axios = require("axios");
var crypto = require("crypto");


let safeCompare = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }
    return crypto.timingSafeEqual(a, b);
};


let validateRequest = (body, signature, botSecret) => {
    return safeCompare(
        crypto.createHmac("SHA256", botSecret).update(body).digest(),
        Buffer.from(signature, "base64"),
    );
};

getJWT = (client_id, service_account, privatekey) => {
    current_time = Date.now() / 1000
    iss = client_id
    sub = service_account
    iat = current_time
    exp = current_time + (60 * 60) // 1 hour

    jws = jwt.sign(
        {
            "iss": iss,
            "sub": sub,
            "iat": iat,
            "exp": exp
        }, privatekey, {algorithm: "RS256"})

    return jws
};


let getAccessToken = async (clientId, clientSecret, serviceAccount, privatekey, scope) => {
    const jwt = getJWT(clientId, serviceAccount, privatekey);

    // @see https://axios-http.com/docs/urlencoded
    // @see https://developers.worksmobile.com/jp/reference/authorization-sa
    const params = new URLSearchParams({
        assertion: jwt,
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        client_id: clientId,
        client_secret: clientSecret,
        scope: scope,
    });

    const response = await axios.post("https://auth.worksmobile.com/oauth2/v2.0/token", params);
    //console.debug("Token Response", response.data);

    const accessToken = response.data.access_token;
    //console.debug("Access Token", accessToken);

    return accessToken;
};


let sendMessageToUser = async (content, botId, userId, accessToken) => {
    const headers = {
        Authorization: `Bearer ${accessToken}`
    };

    // @see https://developers.worksmobile.com/jp/reference/bot-user-message-send
    // @see https://developers.worksmobile.com/jp/reference/bot-send-content

    const res = await axios.post(`https://www.worksapis.com/v1.0/bots/${botId}/users/${userId}/messages`, content,
        { headers }
    );
    return res
};


module.exports = {
    validateRequest,
    getAccessToken,
    sendMessageToUser,
};
