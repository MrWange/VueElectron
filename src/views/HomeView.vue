<template>
  <div class="home">
    <!-- <span @click.stop="toSunny()">暗黑模式</span> -->
    <MNavigation></MNavigation>
    <div class="home-search-box">
        <el-row class="search-box" justify="center">
          <el-col :span="20" class="search-box-padding">
            <input type="text" class="search-box-input" v-model="data.search_text" 
            @focus="data.tags_t=true" @blur="data.tags_t=false" 
            @keyup.enter="search_fun"/>
          </el-col>
          <el-col :span="4">
            <div class="search-button" @click="search_fun">
              搜索
            </div>
          </el-col>
          <div class="History-box" v-if="data.tags_t">
            <div class="History-small-box">
              <el-row style="padding-bottom: 10px;">
                <el-col :span="20" class="search-history">搜索历史</el-col>
                <el-col :span="4" class="kong">清空</el-col>
              </el-row>
              <el-row class="tag-box">
                <el-space wrap>
                  <el-tag v-for="tag in data.tags" :key="tag.name" class="mx-1" closable>{{ tag.name }}</el-tag>
                </el-space>
              </el-row>
            </div>
          </div>
          <div class="tag-list">
            <el-row justify="start">
              <el-col :span="3" @click="data.drawer=!data.drawer">武汉</el-col>
              <el-col :span="3" @click="data.tvs = !data.tvs">视频</el-col>
              <el-col :span="3" @click="data.centerDialogVisible=!data.centerDialogVisible">图片</el-col>
            </el-row>
          </div>
          <div class="city-sunnday">
          </div>
        </el-row>
      </div>

      <el-drawer v-model="data.drawer" title="今天武汉的天气">
        <div class="city-box" v-for="(item,index) in data.city_day" :key="index">
          <div class="city-box-small">
            <div class="city-box-type">
              <el-icon :size="120"><Sunny /></el-icon>
              <!-- <el-icon :size="120"><Sunny /></el-icon> -->
            </div>
            <div class="city-box-city">
              {{ 武汉 }}
            </div>
            <div class="city-box-week">
              {{  item.riqi }}
            </div>
            <div class="city-box-type-low">
              <el-space wrap>
                <span>{{  item.tianqi }}</span>
                <span>{{  item.wendu }}</span>
              </el-space>
            </div>
            <div class="city-box-tip">
              今天是愉快的一天
            </div>
            <!-- <div>
              {{  data.city_day.city }}
            </div>
            <div>
              {{  data.city_day.info.week }}{{  data.city_day.info.type }}
              {{  data.city_day.info.low }}{{  data.city_day.info.tip }}
            </div> -->
          </div>
        </div>
      </el-drawer>
      <el-dialog v-model="data.centerDialogVisible" title="精美图片" width="30%" center>
        <div class="image_list">
          <el-image
          style="width: 280px; height: 280px;"
          :src="data.url"
          :zoom-rate="1.2"
          :preview-src-list="data.srcList"
          :initial-index="4"
          fit="cover"
        />
        </div>
        <div class="image_list_Refresh">
          <el-button size="large" round @click="imglist_mei()">刷新</el-button>
        </div>
      </el-dialog>
      <el-dialog v-model="data.tvs" title="疯狂视频" width="30%" center>
        <div class="image_list">
          <div id="mui-player" v-if="data.tvs"></div>
        </div>
        <div class="image_list_Refresh">
          <el-button size="large" round @click="tv()">刷新</el-button>
        </div>
      </el-dialog>
      <!-- 进入神秘网路 -->
      <el-dialog
        v-model="data.mysteriousty"
        title="神秘网站"
        width="30%"
        :before-close="handleClose"
      >
        <el-form :model="form" label-width="120px" label-position="top">
          <el-form-item label="特殊密码">
            <el-input v-model="form.mysterious_pwd" />
          </el-form-item>
          <el-form-item>
            <el-button type="提交" @click="onSubmit">进行验证</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
  </div>
</template>

<script>
import { reactive,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import MuiPlayer from 'mui-player'
// import { reactive,onMounted,getCurrentInstance} from 'vue'
// import API from "../plugins/axiosInstance"
import axios from 'axios'
import { ElMessage } from 'element-plus'
export default ({
  name: 'HomeView',
  setup(){
    const router=useRouter() //跳转页面
    // const { proxy } = getCurrentInstance();
    const data = reactive({
      search_text:'',//用户搜索
      mysterious:'mysterious', //神秘代码
      mysteriousty:false, //是否开启神秘网站
      tags_t:false,
      tags:[
        { name: '一盒冰淇淋'},
        { name: '山东大学黑人后续'},
        { name: '化妆品排行榜'},
      ],
      city_day:[],
      drawer:false,
      tvs:false,
      centerDialogVisible:false,
      url:'',
      srcList:[],
    })
    // 表单数据
    const form = reactive({
      mysterious_pwd:'',
    })
    function sunnday (){
      // proxy.$get("/devApi/api/weather/?city=武汉",{})
      // .then(response => {
      //   console.log(response)
      // }).catch(error => {
      //   console.log(error)
      // })
      axios.get('https://v.api.aa1.cn/api/api-tianqi-3/index.php?msg=武汉&type=6')
      .then(response => {
        data.city_day=[]
        data.city_day.push(response.data.data[1])
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
    // 随机照片
    function imglist_mei(){
      axios.get('https://v.api.aa1.cn/api/pc-girl_bz/index.php?wpon=json')
      .then(response => {
        data.url = response.data.img
        data.srcList = [];
        data.srcList.push(response.data.img)
      }).catch(error => {
        console.log(error)
      })
    }
    // 生成视频
    function tv(){
      axios.get('https://v.api.aa1.cn/api/api-girl-11-02/index.php?type=json')
      .then(response => {
        var mp = new MuiPlayer({
          container:'#mui-player',
          title:'无敌',
          src:`${response.data.mp4}`,
        })
        console.log(mp)
      }).catch(error => {
        console.log(error)
      })
    }
    const search_fun = function(){
      if(data.search_text == data.mysterious){
        data.mysteriousty = !data.mysteriousty
      }else{
        console.log("功能暂时未开发")
      }
    }
    // 提交表单
    const onSubmit = function(){
      if(form.mysterious_pwd == data.mysterious){
        router.push('/secret')
        ElMessage({
          message: '欢迎你的到来.',
          type: 'success',
        })
      }else{
        ElMessage({
          message: '看来你暂时没有神秘代码.',
          type: 'warning',
        })
      }
    }
    onMounted(() => {
      sunnday(),
      imglist_mei(),
      tv()
    })
    return{
      data,sunnday,imglist_mei,tv,form,onSubmit,search_fun
    }
  },
})
</script>
<style lang="less" scoped>

.light .home{
  height: 100vh;
  background: #ffffff;
  transition: all 0.3s;
}
.dark .home{
  height: 100vh;
  background: #2c2c2c;
  transition: all 0.3s;
}
.home-search-box{
  display: flex;
  // flex-direction: column;
  justify-content: center;
  padding-top: 260px;
}
.search-box{
  position: relative;
  width: 45%;
  height: 45px;
  border-radius: 5px;
  border: 2px solid rgba(126, 126, 126, 0.3);
  box-sizing: border-box;
  .tag-list{
    width: 100%;
    padding-top: 20px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .city-sunnday{
    width: 100%;
    padding-top: 20px;
    box-sizing: border-box;
  }
  .search-box-padding{
    padding: 2.5px 5px 0 5px;
    box-sizing: border-box;
  }
  .search-box-input{
    width: 100%;
    height: 34px;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    box-sizing: border-box;
    border: none;
    outline:none;
  }
  .search-button{
    height: 41px;
    text-align: center;
    line-height: 41px;
    color: #fff;
    background: #4e6ff2cc;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .search-button:hover{
    background: #4e6ff296;
    transition: all 0.3s;
  }
}
.search-box:hover{
  border: 2px solid rgba(125, 204, 241, 0.952);
  transition: all 0.3s;
}
.History-box{
  z-index: 999;
  width: 100%;
  padding: 10px 10px 5px 10px;
  border-left: 2px solid rgba(126, 126, 126, 0.3);
  border-right: 2px solid rgba(126, 126, 126, 0.3);
  border-bottom: 2px solid rgba(126, 126, 126, 0.3);
  box-sizing: border-box;
  border-radius: 0px 0px 5px 5px;
  .search-history{
    font-size: 16px;
  }
  .tag-box{
    // padding-top: 30px;
    // margin-top: 30px;
    box-sizing: border-box;
  }
}
  .light .History-small-box{
    // padding-top: 10px;
    box-sizing: border-box;
  }
  .dark .History-small-box{
    // background: #3f3f3f;
    // padding-top: 10px;
    box-sizing: border-box;
  }
  .light .kong{
    font-size: 14px;
    text-align: center;
    color: #969696;
  }
  .dark .kong{
    font-size: 14px;
    text-align: center;
    color: #c5c5c5;
  }
  .city-box{
    width: 100%;
    display: flex;
    justify-content: center;
    .city-box-type{
      text-align:center;
    }
    .city-box-city{
      text-align:center;
      padding: 8px 0;
      box-sizing: border-box;
    }
    .city-box-week{
      text-align:center;
      padding: 8px 0;
      box-sizing: border-box;
      font-size: 18px;
      color: #f0ca63;
    }
    .city-box-type-low{
      text-align:center;
      padding: 8px 0;
      box-sizing: border-box;
      font-size: 18px;
    }
    .city-box-tip{
      text-align:center;
      font-size: 16px;
      color: #e981ad;
    }
  }
  .image_list{
    width: 100%;
    display: flex;
    justify-content: center; 
  }
  .image_list_Refresh{
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center; 
  }
</style>
