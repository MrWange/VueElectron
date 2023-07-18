<template>
    <el-scrollbar class="resources">
    <div class="file-add-color file-postition">
        <el-row justify="center">
            <el-col :span="20" class="center" @click="data.add_file_drawer=!data.add_file_drawer">添加文件夹</el-col>
            <el-col :span="4" class="center-ico" @click="add_file">
                <el-icon><ArrowRight /></el-icon>
            </el-col>
        </el-row>
    </div> 
    <MNavigation></MNavigation>
    <div class="resources-box">
    <el-row>
        <el-col :span="24">
            <el-space wrap>
                <div class="resources-file-box">
                    <div class="resources-file-box-big">
                        <el-image style="width: 160px; height: 140px" src="https://v.api.aa1.cn/api/pc-girl_bz/girl/1640166336.788099.jpg" :fit="fit" />
                    </div>
                    <div class="resources-file-box-name">
                        00
                    </div>
                </div>
            </el-space>
        </el-col>
    </el-row>
    </div>   
    <el-drawer v-model="data.add_file_drawer" title="添加文件夹" size="50%">
        <el-form ref="ruleFormRef" :model="form" label-width="120px" :rules="rules" >
            <el-form-item label="文件夹名"  prop="TaskTitle" 
            :rules="[{required: true,
            message: 'Please TaskTitle',
            trigger: 'blur',}]">
                <el-input v-model="form.TaskTitle" />
            </el-form-item>
            <el-form-item label="文件类型">
                <el-select v-model="form.TaskType" placeholder="please select your"
                :rules="[{required: true,
                message: 'Please TaskTitle',
                trigger: 'blur',}]">
                    <el-option label="日常任务" value="日常任务" />
                    <el-option label="三天小任务" value="三天小任务" />
                    <el-option label="五天大任务" value="五天大任务" />
                </el-select>
            </el-form-item>
            <el-form-item label="文件夹封面">
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
            <el-form-item label="文件夹简介">
                <el-input v-model="form.Evaluate" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">上传</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
            <el-form-item label="是否公开">
                <el-switch v-model="form.Success" />
            </el-form-item>
        </el-form>
    </el-drawer>
    </el-scrollbar>
</template>

<script>
import {reactive,onMounted,getCurrentInstance} from 'vue'
// import axios from 'axios'
export default ({
name: 'ResourcesView',
setup(){
    const instance = getCurrentInstance()
    // const { proxy } = getCurrentInstance();
    const data = reactive({
        add_file_tf:false,
        add_file_drawer:false,
        dialogVisible:false,
        disabled:false,
        dialogImageUrl :''
    })
    const form = reactive({
      TaskTitle: '',
      TaskType: '',
      date1: '',
      date2: '',
      Success: false,
      Evaluate: '',
    })
    const add_file = function(){
        const addfile = document.querySelector('.file-postition')
        data.add_file_tf = !data.add_file_tf
        if(data.add_file_tf){
            addfile.style.left = '12px';
        }else{
            addfile.style.left = '-99px';
        }
    }
    const handlePictureCardPreview = function(file) {
        data.dialogImageUrl = file.url
        data.dialogVisible = true
    }
    const handleRemove =  function(file){
        instance.refs.img_upload.handleRemove(file)
    }
    const onSubmit = () => {
        //   let liss = Object.assign({}, form)
        //   data.timelist.push(liss)
        instance.refs.img_upload.submit()
    }
    onMounted(() => {
    
    })
    return{
        data,add_file,form,handlePictureCardPreview,handleRemove,onSubmit
    }
},
})
</script>
<style lang="less" scoped>
.light .resources{
    position: relative;
    height: 100vh;
    background: #ffffff;
    transition: all 0.3s;
    padding: 0 0 30px 0;
    box-sizing: border-box;
}
.dark .resources{
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
.resources-box{
    padding: 30px 30px 0px 30px;
    box-sizing: border-box;
}
.resources-file-box{
    width: 180px;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    transition: all 0.3s;
    .resources-file-box-big{
        width: 160px;
        height: 140px;
        border-radius: 6px;
        overflow: hidden;
        background: #3f3f3f;
    }
    .resources-file-box-name{
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
    }
}
.dark .resources-file-box:hover{
    border-radius: 6px;
    background: #414141ab;
}
.light .resources-file-box:hover{
    border-radius: 6px;
    background: #f3f3f3ef;
    box-shadow: 0 0  10px rgba(83, 83, 83, 0.3);
}
</style>
  