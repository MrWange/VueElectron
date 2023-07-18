<template>
  <div class="task">
    <MNavigation></MNavigation>
    <div class="task-box">
      <el-scrollbar height="700px" style="padding:0 30px 0 30px;">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top" v-for="(item,index) in data.timelist" :key="index">
            <el-card>
              <h4>{{item.TaskTitle}}</h4>
              <p>结束时间为 {{data1(item.date1)}}-{{data2(item.date2)}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-scrollbar>
    </div>
    <div class="addtask">
      <el-button @click="data.dialog = !data.dialog">添加任务</el-button>
    </div>
    <el-drawer
    ref="drawerRef"
    v-model="data.dialog"
    title="添加任务"
    :before-close="handleClose"
    direction="ltr"
    class="demo-drawer"
    size="50%"
    >
    <el-form ref="ruleFormRef" :model="form" label-width="120px" :rules="rules" >
    <el-form-item label="任务标题"  prop="TaskTitle" 
    :rules="[{required: true,
    message: 'Please TaskTitle',
    trigger: 'blur',}]">
      <el-input v-model="form.TaskTitle" />
    </el-form-item>
    <el-form-item label="选择任务类型">
      <el-select v-model="form.TaskType" placeholder="please select your"
      :rules="[{required: true,
      message: 'Please TaskTitle',
      trigger: 'blur',}]">
        <el-option label="日常任务" value="日常任务" />
        <el-option label="三天小任务" value="三天小任务" />
        <el-option label="五天大任务" value="五天大任务" />
      </el-select>
    </el-form-item>
    <el-form-item label="请选择你的时间">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
      </el-form-item>
      <el-form-item label="对自己的评价">
        <el-input v-model="form.Evaluate" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">上传</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
      <el-form-item label="是否已经完成">
        <el-switch v-model="form.Success" />
      </el-form-item>
    </el-form>
  </el-drawer>
  </div>
</template>

<script>
import {ref,reactive,onMounted} from 'vue'
// import axios from 'axios'
export default ({
  name: 'TaskView',
  setup(){
    // const { proxy } = getCurrentInstance();
    const ruleFormRef = ref()
    const data = reactive({
      dialog:false,
      timelist:[],
    })
    const form = reactive({
      TaskTitle: '',
      TaskType: '',
      date1: '',
      date2: '',
      Success: false,
      Evaluate: '',
    })
    // 时间转换
    const data1 = function(time){
      const dateString = time;
      const date = new Date(dateString);
      const normalString = date.toLocaleString();
      return normalString; // 输出：2023/4/5 上午12:00:00
    }
    const data2 = function(time){
      const dateString = time;
      const date = new Date(dateString);
      // const year = date.getFullYear();
      // const month = date.getMonth() + 1;
      // const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      // const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      return `${formattedTime}`;
    }
    const onSubmit = () => {
      let liss = Object.assign({}, form)
      data.timelist.push(liss)
    }
    onMounted(() => {
      
    })
    return{
      data,form,onSubmit,ruleFormRef,data1,data2
    }
  },
})
</script>
<style lang="less" scoped>

.light .task{
  height: 100vh;
  background: #ffffff;
  transition: all 0.3s;
}
.dark .task{
  height: 100vh;
  background: #2c2c2c;
  transition: all 0.3s;
}
.task-box{
  padding: 20px 0px 30px 0px;
  box-sizing: border-box;
}
.addtask{
  display: flex;
  justify-content: center;
}
</style>
