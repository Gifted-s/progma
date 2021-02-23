const createTokenRequestBody = function (authorization_code){
    return{
        'grant_type': 'authorization_code',
        'client_id': 'kquzN7LrU_tpbXtsRRCrKfmXw-EMwuQx2oOiNpu__mc',
        'client_secret': 'xX7SjwqAyLq5ALrvyG5KFD1CDd7ldG30PCyVLS9DQIk',
        'code': authorization_code,
        'redirect_uri': 'https://projectmanaga2384.herokuapp.com'
    }
}