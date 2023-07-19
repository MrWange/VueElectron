<template>
    <div class="music">
      <MNavigation></MNavigation>
      <MusicPlay></MusicPlay>
    </div>
  </template>
  
  <script>
  import {reactive,onMounted} from 'vue'
  // import axios from 'axios'
  export default ({
    name: 'MusicView',
    setup(){
      // const { proxy } = getCurrentInstance();
      const data = reactive({
        dialog:false,
        timelist:[],
      })
      onMounted(() => {
        
      })
      return{
        data,
      }
    },
  })
  </script>
  <style lang="less" scoped>
    .light .music{
    height: 100vh;
    background: #ffffff;
    transition: all 0.3s;
    }
    .dark .music{
    height: 100vh;
    background: #2c2c2c;
    transition: all 0.3s;
    }
  </style>
  