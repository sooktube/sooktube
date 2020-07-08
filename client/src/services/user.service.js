export const userService = {
    login,
    logout,
    register,
    getUsername
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`https://readme-writeme.appspot.com/api/authenticate`, requestOptions)
        .then(handleResponse)
        .then(response => {
            if(response.token){
                localStorage.setItem('user', JSON.stringify(response.token));
                return response.token;
            }
        });
}

function getUsername() {
    let user = localStorage.getItem('user') !== "undefined" && typeof localStorage.getItem('user') !== "undefined"
        && JSON.stringify(localStorage.getItem('user'));
    if(!user) return;
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': user
        }
    };
    return fetch(`https://readme-writeme.appspot.com/api/auth/me`, requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response) {
                console.log(response);
                return response;
            }
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`https://readme-writeme.appspot.com/api/register/local`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}