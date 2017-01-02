/**
 * Created by kexiao on 16/11/27.
 */
import Vue from 'vue';
import msg from './message.vue'
let MessageConstructor = Vue.extend(msg)

let instance;

let Message = function (options) {
    options = options || {};

    if (typeof options === 'string') {
        options = {
            message: options
        }
    }
    instance = new  MessageConstructor({
        data: options
    });

    instance.vm = instance.$mount();
    instance.vm.visible=true;
    document.body.appendChild(instance.vm.$el);
    return instance.vm;
}

Message.close=function () {
    this.close();
}
export default Message;