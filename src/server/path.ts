const paths = {
    default() {
        return '/';
    },
    signinUrl() {
        return '/api/auth/signin';
    },
    signinWithEmail() {
        return `/api/auth/signin/email`;
    },
    loginUrl() {
        return '/api/auth/login';
    },
    home() {
        return '/home';
    },
    inputInfoUrl() {
        return '/api/auth/signin/input';
    },
    signOutUrl() {
        return '/api/auth/signout';
    },
};

export default paths;