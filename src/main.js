import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'

import router from "./router/index.js"
/*
new Vue ({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    mounted() {
        this.$router.replace('/')
    }
})
*/
/*createApp({

    mounted() {
        this.$router.replace('/')
    }
}).use(router).mount('#app')
*/
createApp(App).use(router).mount('#app')
