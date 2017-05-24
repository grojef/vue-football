/**
 * Created by kexiao on 17/1/2.
 */
import Vue from 'vue'

const filter = Vue.filter('formatCode', function (val) {
    let _arr = val.split('-');
    let tar_des = [];
    if(_arr[0] =='4071'){
        tar_des.push('让');
    }

    switch (_arr[1]){
        case '3':tar_des.push('胜');break;
        case '1':tar_des.push('平');break;
        case '0':tar_des.push('负');break;
    }
    tar_des.push();
    return tar_des.join('');
})


export default filter;