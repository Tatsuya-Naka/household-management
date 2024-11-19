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
};

export default paths;