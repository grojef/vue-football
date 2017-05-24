/**
 * Created by kexiao on 2016/9/7.
 */
// 创建一个对象存储一系列我们接下来要写的 mutation 函数

import * as types from "./mutations-types";
export default {
    [types.REMOVE_RACE](state, {id}){
        state.raceList = state.raceList.map((match) => {
            if (match.id !== id) return match;
            return {...match, comments: {}}
        })
    },
    [types.RESET](state){
        state.raceList = state.raceList.map(match => ({...match, comments: {}}));
    },
    [types.LOAD_METCHES](state, data){
        state.raceList = data.map((match) => {
            return {...match, comments: {}}
        });
    },
    [types.TOGGLE_PITCH](state, {id, params}){
        state.raceList = state.raceList.map((match) => {
            if (match.id !== id) return match;
            let comments = match.comments;
            let _cts = {...comments, [params]: !comments[params]}
            return {...match, comments: _cts}
        })
    }
}
