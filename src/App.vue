<template>
   <div>
      <router-view></router-view>
      <!--<loading-component></loading-component>-->
   </div>
</template>
<script>
import loadingComponent from './components/common/loading.vue'
export default {
    mounted:function () {
       console.log(123);
    },
    components:{
      'loading-component':loadingComponent
    }
  }
</script>
