/**
 * Created by kexiao on 2016/9/7.
 */
// 创建一个对象存储一系列我们接下来要写的 mutation 函数

import * as types from './mutations-types'
export default {
    [types.REMOVERACE](state, {id}){
        state.pitchRace.delete(id);
    },
    [types.RESET](state){
        state.pitchRace=new Map();
    },
    togglePitch(state, {id,params}){
        let race = state.pitchRace;
        if(race.has(id)){
            let set = race.get(id);
            if(set.has(params)){
                set.delete(params);
            }else{
                set.add(params);
            }
            if(set.size ===0){
                race.delete(id);
            }else{
                race.set(id,set);
            }
        }else {
            let set = new Set();
            set.add(params);
            race.set(id,set);
        }

    }
}
