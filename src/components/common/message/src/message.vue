<template>
    <div class="message" v-show="visible">
        <p>{{message}}</p>
    </div>
</template>
<style>
    .message {
        background: #333;
        color: #fff;
        font-size: 1.3rem;
        border-radius: .3rem;
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 999;
        padding: 1.2rem 1.4rem;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

</style>
<script>
    export default{
        data(){
            return {
                visible: true,
                message: '',
                duration: 0,
                closed: false,
                timer: null,
                onClose:null
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
                if(typeof this.onClose ==='function'){
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
