import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        token: '',
        currentUser: '',
        isTokenExpired: false,
        screenWidth:document.documentElement.clientWidth, //用于监听屏幕宽度
        screenHeight:document.documentElement.clientHeight, //用于监听屏幕高度
        currentTabName: 'overviewTab',
        installContentList: [],
        orderStateList: [],
        satisfactionList: []
    },
    getters: {
        
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
            sessionStorage.setItem('token', token);
            // console.log('get token');
        },
        REMOVE_TOKEN(state) {
            sessionStorage.removeItem("token");
            state.token = '';
        },
        SET_TOKEN_EXPIRE(state, isExpired) {
            state.isTokenExpired = isExpired;
        },
        SET_USER(state, user) {
            sessionStorage.setItem('user', user);
            state.currentUser = user;
        },
        REMOVE_USER(state) {
            sessionStorage.removeItem('user');
            state.currentUser = '';
        },
        SET_ORDER_STATUS(state, stateList) {
            state.orderStateList = stateList;
        },
        SET_INSTALLCONTENT_STATUS(state, installContentList) {
            state.installContentList = installContentList;
        },
        SET_SATISFACTION(state, list) {
            state.satisfactionList = list;
        }
    }
});