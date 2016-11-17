<template>
    <div id="loading" v-show="show">
        <p>{{msg}}</p>
    </div>
</template>
<style>
  #loading{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 35px;
    width: 150px;
    border-radius: 5px;
    text-align: center;
    background:grey;
    font-size:25px;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
   }
</style>
<script>
    export default{

        props:{

            show:{
                type:Boolean,
                default:false,
            }
        },
        data(){
            return{
                msg:'loading'
            }
        }
    }
</script>
