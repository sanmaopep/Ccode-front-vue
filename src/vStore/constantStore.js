import constantAPI from '../services/constant'
import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'

Vue.use(Vuex);

const state = {
    className: [{
        name: "全部",
        value: ""
    }],
    state: [{
        name: '全部',
        value: ''
    }, {
        name: '未开始',
        value: '未开始'
    }, {
        name: '进行中',
        value: '进行中'
    }, {
        name: '已结束',
        value: '已结束'
    }],
    location: [{
        name: "全部",
        value: ""
    }]
}

const mutations = {
    [types.constant.changeClassName](state, classNameList) {
        state.className = classNameList;
    },
    [types.constant.changeLocation](state, locationList) {
        state.location = locationList;
    }
}

const actions = {
    [types.constant.initConstants](context) {
        constantAPI.getClassNameList().then((classList) => {
            // 获取成功
            for (let i = 0; i < classList.length; i++) {
                classList[i].value = classList[i].name;
            }

            classList.unshift({
                name: "全部",
                value: ''
            });
            context.commit(types.constant.changeClassName, classList);
        }, () => {
            // 获取失败
        });
        constantAPI.getLocationList().then((areaList) => {
            // 获取成功
            for (let i = 0; i < areaList.length; i++) {
                areaList[i].value = areaList[i].name;
            }
            areaList.unshift({
                name: "全部",
                value: ''
            });

            context.commit(types.constant.changeLocation, areaList);
        }, () => {
            // 获取失败
        });
    }
}

let constantStore = new Vuex.Store({
    actions,
    mutations,
    state
});

// 直接初始化
constantStore.dispatch(types.constant.initConstants);

export default constantStore;