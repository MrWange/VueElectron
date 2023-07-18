<template>
    <el-scrollbar class="exam">
    <div class="file-add-color file-postition">
        <el-row justify="center">
            <el-col :span="20" class="center" @click="data.add_file_drawer=!data.add_file_drawer">添加文件夹</el-col>
            <el-col :span="4" class="center-ico" @click="add_file">
                <el-icon><ArrowRight /></el-icon>
            </el-col>
        </el-row>
    </div> 
    <MNavigation></MNavigation>
    <div class="exam-box">
    <el-row>
        <el-col :span="24">
            <el-space wrap>
                <div class="exam-file-box" v-for="item in data.Task" :key="item.id" @click="exam_inspect(item.id)">
                    <div class="exam-file-box-big">
                        <el-image style="width: 160px; height: 140px" :src="item.TaskImage" :fit="fit" />
                    </div>
                    <div class="exam-file-box-name">
                        {{item.TaskTitle}}
                    </div>
                </div>
            </el-space>
        </el-col>
    </el-row>
    </div>   
    <el-drawer v-model="data.add_file_drawer" title="添加文件夹" size="50%">
        <el-form ref="ruleFormRef" :model="form" label-width="120px" :rules="rules" >
            <el-form-item label="名称"  prop="TaskTitle" 
            :rules="[{required: true,
            message: 'Please TaskTitle',
            trigger: 'blur',}]">
                <el-input v-model="form.TaskTitle" />
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="form.TaskType" placeholder="please select your"
                :rules="[{required: true,
                message: 'Please TaskTitle',
                trigger: 'blur',}]">
                    <el-option label="日常任务" value="日常任务" />
                    <el-option label="三天小任务" value="三天小任务" />
                    <el-option label="五天大任务" value="五天大任务" />
                </el-select>
            </el-form-item>
            <el-form-item label="封面">
                <el-upload action="#" list-type="picture-card" :auto-upload="false" ref="img_upload">
                    <el-icon><Plus /></el-icon>
                    <template #file="{ file }">
                    <div>
                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" :auto-upload="false"/>
                        <span class="el-upload-list__item-actions">
                        <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                        >
                            <el-icon><zoom-in /></el-icon>
                        </span>
                        <span
                            v-if="!data.disabled"
                            class="el-upload-list__item-delete"
                            @click="handleDownload(file)"
                        >
                            <el-icon><Download /></el-icon>
                        </span>
                        <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file)"
                        >
                            <el-icon><Delete /></el-icon>
                        </span>
                        </span>
                    </div>
                    </template>
                </el-upload>
                <el-dialog v-model="data.dialogVisible">
                    <img w-full :src="data.dialogImageUrl" alt="Preview Image" />
                </el-dialog>
            </el-form-item>
            <el-form-item label="简介">
                <el-input v-model="form.Evaluate" type="textarea" />
            </el-form-item>
            <el-form-item label="题目">
                <el-space direction="vertical">
                    <div v-for="item in form.topi_list" :key="item.id" class="TopicClass">
                        <el-row v-if="item.type=='单词(英译汉)'||item.type=='单词(汉译英)'" justify="start">
                            <el-space wrap>
                                <!-- 题目序号 -->
                                <el-text class="mx-1" size="large">{{item.id+1}}.</el-text>
                                <!-- 题目 -->
                                <el-input  v-model="item.topic" v-if="item.topic_x" @blur="item.topic_x = !item.topic_x"/>
                                <el-text class="mx-1" size="large" v-else @click="item.topic_x = !item.topic_x">{{item.topic}}</el-text>
                                <!-- 题目类型 -->
                                <el-select v-model="item.type" placeholder="please select" @change="modify(item.id,item.type)">
                                    <el-option label="单词(英译汉)" value="单词(英译汉)" />
                                    <el-option label="单词(汉译英)" value="单词(汉译英)" />
                                    <el-option label="单选题 " value="单选题" />
                                </el-select>
                                <!-- 答案 -->
                                <el-input v-model="item.answers"/>
                            </el-space>
                        </el-row>
                        <!-- 单选 -->
                        <el-row class="TopicClass" v-else justify="start">
                            <el-space wrap>
                                <!-- 题目序号 -->
                                <el-text class="mx-1" size="large">{{item.id+1}}.</el-text>
                                <!-- 题目 -->
                                <el-input  v-model="item.topic" v-if="item.topic_x" @blur="item.topic_x = !item.topic_x"/>
                                <el-text class="mx-1" size="large" v-else @click="item.topic_x = !item.topic_x">{{item.topic}}</el-text>
                                <!-- 题目类型 -->
                                <el-select v-model="item.type" placeholder="please select">
                                    <el-option label="单词(英译汉)" value="单词(英译汉)" />
                                    <el-option label="单词(汉译英)" value="单词(汉译英)" />
                                    <el-option label="单选题 " value="单选题" />
                                </el-select>
                                <!-- 答案 -->
                                <el-radio-group v-model="item.answers">
                                    <el-radio :label="its.answerab" v-for="its in item.answer" :key="its.id"/>
                                </el-radio-group>
                            </el-space>
                        </el-row>
                    </div>
                </el-space>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="add_fun">加题</el-button>
                <el-button type="primary" @click="onSubmit(form.TaskTitle,form.TaskType,form.topi_list)">上传</el-button>
            </el-form-item>
            <el-form-item label="是否公开">
                <el-switch v-model="form.Success" />
            </el-form-item>
        </el-form>
    </el-drawer>
    <el-dialog v-model="data.exam_dialogtf" title="检查试卷" width="30%" draggable>
        <span v-if="data.Taskst.length>0">
            <span class="dialog-footer" v-for="item in data.Taskst" :key="item.id" >
                {{item}}
            </span>
        </span>
    </el-dialog>
    </el-scrollbar>
</template>

<script>
import {reactive,onMounted,getCurrentInstance} from 'vue'
// import axios from 'axios'
export default ({
name: 'ExamView',
setup(){
    const instance = getCurrentInstance()
    // const { proxy } = getCurrentInstance();
    const data = reactive({
        add_file_tf:false,
        add_file_drawer:false,
        dialogVisible:false,
        disabled:false,
        dialogImageUrl :'',
        Task:[{
            id:0,
            TaskType:'日常任务',
            TaskTitle:'2023-4-26作业',
            TaskImage:'https://v.api.aa1.cn/api/pc-girl_bz/girl/1640166336.788099.jpg',
            topi_list:[],
        }],
        exam_dialogtf:false,//开启检查试卷对话框
        Taskst:[],//初始化展示试卷类型
    })
    const form = reactive({
      TaskTitle: '',//考试标题
      TaskType: '',//考试每天的类型
      date1: '',//
      date2: '',
      Success: false,//是否公开
      Evaluate: '',
      //题目列表
      topi_list:[
        {
            id:0,
            type:'单词(英译汉)',
            topic:'add',
            answers:'',
            select:'0',
            topic_x:1,  // 修改题目
            answer_x:1 //修改答案
        },{
            id:1,
            type:'单选题',//题目类型
            topic:'add',//题目
            answer:[
                {
                    id:0,
                    answerab:'A.选a',
                },{
                    id:1,
                    answerab:'B.选b',
                },{
                    id:2,
                    answerab:'C.选c',
                },{
                    id:3,
                    answerab:'D.选d',
                }
            ],//单选题四个选项
            answers:'',//最终答案
            select:'0',//选择类型
            topic_x:1,  // 修改题目
            answer_x:1 //修改答案
        }
      ],
    })
    
    // 增加题目
    const add_fun = function(){
        const list = {
            id:form.topi_list.length,
            type:'单词(英译汉)',
            topic:'add',
            answer:'增加',
            select:'0',
            topic_x:1,  // 修改题目
            answer_x:1 //修改答案
        }
        form.topi_list.push(list)

    }
    // 修改题目
    const modify = function(id,value){
        form.topi_list.forEach(item => {
            if(item.id == id && item.type == '单选题'){
                item.type = value
                item.answer = [{
                    id:0,
                    answerab:'A.选a',
                },{
                    id:1,
                    answerab:'B.选b',
                },{
                    id:2,
                    answerab:'C.选c',
                },{
                    id:3,
                    answerab:'D.选d',
                }]
                item.answers = ''
            }else if(item.id == id && item.type == '单词(英译汉)' || item.type == '单词(汉译英)'){
                item.type = value
                item.answer = ''
                delete item.answers
            }
        })
    }
    // 添加动画
    const add_file = function(){
        const addfile = document.querySelector('.file-postition')
        data.add_file_tf = !data.add_file_tf
        if(data.add_file_tf){
            addfile.style.left = '12px';
        }else{
            addfile.style.left = '-102px';
        }
    }
    const handlePictureCardPreview = function(file) {
        data.dialogImageUrl = file.url
        data.dialogVisible = true
    }
    const handleRemove =  function(file){
        instance.refs.img_upload.handleRemove(file)
    }
    //检查试卷
    const exam_inspect = function(id){
        data.Taskst = []
        data.exam_dialogtf = !data.exam_dialogtf
        data.Taskst.push(data.Task[id].topi_list)
    }
    // 上传题目
    const onSubmit = (TaskTitle,TaskType,topi_list) => {
        //   let liss = Object.assign({}, form)
        //   data.timelist.push(liss)
        const tasklist = {
            id:data.Task.length,//id
            TaskType:TaskType,//考试类型
            TaskTitle:TaskTitle,//考试标题
            TaskImage:'https://v.api.aa1.cn/api/pc-girl_bz/girl/1640166336.788099.jpg',//考卷封面
            topi_list:topi_list,//考试题目
        }
        let liss = Object.assign({}, tasklist)
        data.Task.push(liss)
        // instance.refs.img_upload.submit()
    }
    onMounted(() => {
    
    })
    return{
        data,add_file,form,handlePictureCardPreview,handleRemove,onSubmit,add_fun,
        modify,exam_inspect
    }
},
})
</script>
<style lang="less" scoped>
.light .exam{
    position: relative;
    height: 100vh;
    background: #ffffff;
    transition: all 0.3s;
    padding: 0 0 30px 0;
    box-sizing: border-box;
}
.dark .exam{
    position: relative;
    height: 100vh;
    background: #2c2c2c;
    transition: all 0.3s;
    padding: 0 0 30px 0;
    box-sizing: border-box;
}
.light .file-add-color{
    z-index: 99;
    position: absolute;
    width: 120px;
    height: 50px;
    background: #ffffff;
    transition: all 0.3s;
    border-radius: 6px;
    box-shadow:  0 0 10px rgba(168, 241, 241, 0.8);
}
.file-postition{
    left: -102px;
    top: 315px;
}
.dark .file-add-color{
    z-index: 99;
    position: absolute;
    width: 120px;
    height: 50px;
    background: #3d3d3da6;
    transition: all 0.3s;
    border-radius: 6px;
    box-shadow:  0 0 10px rgba(0, 0, 0, 0.8);
}
.center{
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
}
.center-ico{
    height: 50px;
    line-height: 53px;
    text-align: center;
    cursor: pointer;
}
.exam-box{
    padding: 30px 30px 0px 30px;
    box-sizing: border-box;
}
.exam-file-box{
    width: 180px;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    transition: all 0.3s;
    .exam-file-box-big{
        width: 160px;
        height: 140px;
        border-radius: 6px;
        overflow: hidden;
        background: #3f3f3f;
    }
    .exam-file-box-name{
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
    }
}
.dark .exam-file-box:hover{
    border-radius: 6px;
    background: #414141ab;
}
.light .exam-file-box:hover{
    border-radius: 6px;
    background: #f3f3f3ef;
    box-shadow: 0 0  10px rgba(83, 83, 83, 0.3);
}
.TopicClass{
    padding-bottom: 0px;
}
.add_btn{
    display: flex;
    justify-items: center;
    width: 100%;
}
</style>
