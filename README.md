# message-mall

使用vue-cli创建项目

添加electron和vue-router+vueX

下载

```
npm i animate.css //动画样式
npm i axios //接口调用
npm i element-plus //饿了吗ui
npm i less less-loader //less样式
npm i mui-player //视频组件
npm i qs //接口传递数据插件
npm i vue-router //路由
npm i vuex

```

启动项目

```
npm run electron:serve 进行启动项目 ( windows 与 imac 一样 )
```



模板

```vue
<template>
    <el-scrollbar class="secret">
        <MNavigation></MNavigation>
        <div class="secret-box">
            se
        </div>
    </el-scrollbar>
</template>

<script>
import {reactive,onMounted} from 'vue'
// import axios from 'axios'
export default ({
    name: 'SecretView',
    setup(){
        // const { proxy } = getCurrentInstance();
        const data = reactive({

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
.light .secret{
    position: relative;
    height: 100vh;
    background: #ffffff;
    transition: all 0.3s;
    padding: 0 0 30px 0;
    box-sizing: border-box;
}
.dark .secret{
    position: relative;
    height: 100vh;
    background: #2c2c2c;
    transition: all 0.3s;
    padding: 0 0 30px 0;
    box-sizing: border-box;
}
.secret-box{
    padding: 30px 30px 0px 30px;
    box-sizing: border-box;
}
</style>
  
```

