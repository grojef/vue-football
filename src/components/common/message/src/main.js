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

    document.body.appendChild(instance.vm.$el);
}
export default Message;