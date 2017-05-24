/**
 * Created by kexiao on 2016/9/7.
 */
// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入


import * as types from './mutations-types'

import 'whatwg-fetch'


import zc from '../assets/json/zc.json'


export const removeRace=({commit},id)=>{
    commit([types.REMOVE_RACE],id);
}

export const removeKey=({commit},id)=>{
    commit([types.REMOVE_KEY],id);
}

export const togglePitch=({commit},{id,params})=>{
    commit([types.TOGGLE_PITCH],{id,params});
}

export const raceReset=({commit})=>{
    commit([types.RESET]);

}

export const loadMatches = async ({commit})=>{
    commit([types.LOAD_METCHES],zc.raceList);
}
