<template>
  <div class="MNavigation-box">
    <el-row align="middle" style="height: 60px;" v-if="type">
      <el-col :span="7">
        <el-row justify="start" align="middle">
          <el-col :span="4" class="light-li" @click="routerview('/')">首页</el-col>
          <el-col :span="4" class="light-li">喜欢</el-col>
          <el-col :span="4" class="light-li" @click="routerview('/exam')">出题</el-col>
          <el-col :span="4" class="light-li">肯德基</el-col>
          <el-col :span="4" class="light-li" @click="routerview('/task')">
            任务
          </el-col>
          <el-col :span="4" class="light-li">
            更多
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        
      </el-col>
      <el-col :span="7">
        <el-row justify="end" align="middle">
          <el-col :span="6">
            <el-switch v-model="theme" @click.stop="toSunny()"/>
          </el-col>
          <el-col :span="6" class="light-li" @click="routerview('/resources')">资源</el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 在神秘网站中的导航栏 -->
    <el-row class="secret_box" align="middle" style="height: 60px;" v-else>
      <el-col :span="2" :offset="4" class="light-li" @click="routerview('/')">首页</el-col>
      <el-col :span="12">
        <el-row align="middle">
          <el-col :span="3" :offset="6">
            <span class="secret_span">喜欢</span>
          </el-col>
          <el-col :span="3" @click="routerview('/exam')">
            <span class="secret_span">关于</span>
          </el-col>
          <el-col :span="3">
            <span class="secret_span">文章</span>
          </el-col>
          <el-col :span="3" @click="routerview('/task')">
            <span class="secret_span">我的</span>
          </el-col>
        </el-row>  
      </el-col>
      <el-col :span="2" class="Search-f">
          <el-switch v-model="theme" @click.stop="toSunny()"/>
          <span class="search_button">
            <el-icon :size="20">
              <Search />
            </el-icon>
          </span>
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
import { ref} from 'vue'
import { useDark } from '@vueuse/core'
import { useToggle } from '@vueuse/shared'

import {useRouter} from 'vue-router'
export default {
  name: 'MNavigation',
  props:{
    type:{
      type:Boolean,
      default:true
    },
	},
  setup(){
    const router=useRouter()
    const theme = ref(false)
    const isDark = useDark({
      storageKey:'useDaerkKEY',
      valueDark:'dark',//暗黑
      valueLight:'light',//高亮
    })
    const toSunny = useToggle(isDark);
     // 跳转首页页面
     const routerview = function(path){
      router.push(path)
    }
    return{
      theme,toSunny,routerview,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.light .MNavigation-box{
  background: #fff;
  height: 60px;
  font-size: 14px;
  transition: all 0.3s;
  box-shadow: 0 0 10px rgba(121, 190, 230, 0.3);
}
.dark .MNavigation-box{
  background: #3f3f3f;
  height: 60px;
  font-size: 14px;
  transition: all 0.3s;
}
.light-li{
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
}
.light .light-li:hover{
  color: #fff;
  background: #7faeec;
  transition: all 0.4s;
}
.dark .light-li:hover{
  background: #929292;
  transition: all 0.8s;
}
/* .secret_box{
  padding: 0px 280px 0px 280px;
} */
.secret_span{
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  padding: 0 10px 0 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  transition: all 0.3s;
}
.secret_span:hover{
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  padding: 10px 10px 10px 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background: #4a96fa;
}
.Search-f{
  position: relative;
}
.search_button{
  position: absolute;
  top: 0px;
  right: 65px;
  width: 30px;
  height: 30px;
  display: inline-block;
  padding: 5px 0 0 2px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s;
  box-sizing: border-box;
}
.search_button:hover{
  position: absolute;
  top: 0px;
  right: 65px;
  width: 30px;
  height: 30px;
  display: inline-block;
  padding: 5px 0 0 2px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background: #4a96fa;
  box-sizing: border-box;
}
</style>
