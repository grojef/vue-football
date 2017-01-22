<template>
    <div>
        <div class="r-message" v-show="visible">
           <span>
              <div class="r-message-notice">{{message}}</div>
            </span>
        </div>
    </div>
</template>
<style>
    .r-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        z-index: 1000;
    }

    .r-message .r-message-notice {
        font-size: 14px;
        background: rgba(40, 40, 40, .75);
        border-radius: 5px;
        color: #fff;
        padding: 7px 10px 7px 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        border: 0 solid transparent;
        display: block;
        width: auto;
        line-height: 1.5;
        vertical-align: middle;
        position: relative;
        margin: 10px 0;
    }


</style>
<script>
    export default{
        data(){
            return {
                visible: false,
                message: '',
                duration: 0,
                closed: false,
                timer: null,
                onClose: null
            }
        },
        watch: {
            closed(val){
                if (val) {
                    this.visible = false;
                    this.destroyElement();
                }
            }
        },
        methods: {

            startTimer(){
                if (this.duration > 0) {
                    setTimeout(() => {
                        this.close();
                    }, this.duration)
                }
            },

            close(){
                this.closed = true;
                if (typeof this.onClose === 'function') {
                    this.onClose(this);
                }
            },
            clearTimer(){
                clearTimeout(this.timer);
            },

            destroyElement(){
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            }
        },
        mounted(){
            this.startTimer();
        }
    }
</script>
