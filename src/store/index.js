/**
 * Created by kexiao on 2016/9/7.
 */
import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
    pitchRace: new Map(),
    raceList: []
}
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store
