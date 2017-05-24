/**
 * Created by kexiao on 2016/9/7.
 */

export const selectRace = state => {
    let arr = [];
    return arr;
}

export const loadMatches = state => {
    return state.raceList;
}


export const validMatchCounts = state => {
    return validMatches(state).length;
}


export const validMatches = state =>{
    return state.raceList.filter(match => {
        return Object.values(match.comments).some(s=>s===true);
    })
}


