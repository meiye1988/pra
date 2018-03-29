import Vue from 'vue';
import Vuex from 'vuex';
import notepad from './notepad';
import theme from './theme';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
         notepad,
         theme
    }
});