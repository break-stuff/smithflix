import './sass/styles.scss';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('longDate', (value) => {
    if (!value) return '';
    let date = new Date(value);
    return `${date.toLocaleString('en-us', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
});

Vue.filter('currency', function (value) {
    return !value ? '' : '$' + parseFloat(value).toFixed(2);
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
