import Vue from 'vue'
import Vuex from 'vuex'
import keepAlive from '@/store/modules/keepAlive.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        keepAlive
    }
})
