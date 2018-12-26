export default {
    get(key) {
        localStorage.getItem(key);
    },

    set(key, value) {
        localStorage.setItem(key, value);
    },

    remove(key) {
        localStorage.removeItem(key);
    },

    clear() {
        // console.log('clear localStorage');
        localStorage.clear();
    }
}