const router = {
    getHash() {
        return window.location.hash.slice(1);
    },
    isUndefined(type) {
        return typeof type === 'undefined';
    }
};