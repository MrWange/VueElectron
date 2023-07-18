<template>
    <el-scrollbar class="secret">
        <MNavigation :type="false"></MNavigation>
        <div class="secret-box">
            <el-row>
                <el-col :span="16" :offset="4">
                    <el-row class="jike">
                        <el-col :span="3" class="center-kao">即刻</el-col>
                        <el-col :span="18" class="center-box text-center">
                            不知道说点什么，还是等一后在说吧
                        </el-col>
                        <el-col :span="3" class="center-kao-right">
                            <div class="right-btn">
                                <el-icon color="#fff"><Right /></el-icon>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="swiper-start">
                <el-col :span="9" :offset="4" class="swiper-start-left">
                    <div class="rander">

                    </div>
                    <div class="most">
                        <div class="most_html"></div>
                        <div class="most_daxue"></div>
                        <div class="most_shenghuo"></div>
                    </div>
                </el-col>
                <el-col :span="7" class="swiper-start-right">
                    不知道说点什么，还是等一后在说吧
                </el-col>
            </el-row>
            <el-row class="secret-box-body">
                <el-col :span="11" :offset="4" class="secret-box-body-left">
                    <div class="secret-box-body-dh">
                        <ul class="secret-box-body-ul">
                            <li class="secret-box-body-li">前端知识</li>
                            <li class="secret-box-body-li">hexo个人博客</li>
                            <li class="secret-box-body-li">node</li>
                            <li class="secret-box-body-li">C语言</li>
                            <li class="secret-box-body-li">生活日常</li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="5" class="secret-box-body-right">2</el-col>
            </el-row>
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
    .jike{
        height: 45px;
        margin-top: 15px;
        padding: 0 10px 0 10px;
        font-weight: bold;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        box-sizing: border-box;
        transition: all 0.3s;
    }
    .jike:hover{
        border: 1px solid #3b70fc;
        box-shadow: 0 0 10px rgba(76, 159, 236, 0.938);
    }
    .jike:hover .center-box{
        color: #3b70fc;
    }
    .swiper-start{
        padding-top: 15px;
        box-sizing: border-box;
        .swiper-start-left{
            padding-right: 15px;
            box-sizing: border-box;
        }
        .rander{
            height: 250px;
            border-radius: 8px;
            border: 1px solid #e6e6e6;
            box-shadow: 0 8px 16px -4px rgba(44,45,48,0.047);
        }
        .most{
            display: flex;
            padding-top: 8px;
            box-sizing: border-box;
            .most_html{
                flex: 4;
                height: 80px;
                border-radius: 5px;
                border: 1px solid #e6e6e6;
                box-shadow: 0 8px 16px -4px rgba(44,45,48,0.047);
                box-sizing: border-box;
            }
            .most_daxue{
                flex: 4;
                height: 80px;
                border-radius: 8px;
                margin: 0 8px 0 8px;
                border: 1px solid #e6e6e6;
                box-shadow: 0 8px 16px -4px rgba(44,45,48,0.047);
                box-sizing: border-box;
            }
            .most_shenghuo{
                flex: 4;
                height: 80px;
                border-radius: 8px;
                border: 1px solid #e6e6e6;
                box-shadow: 0 8px 16px -4px rgba(44,45,48,0.047);
                box-sizing: border-box;
            }
        }
        .swiper-start-right{
            border-radius: 8px;
            border: 1px solid #e6e6e6;
            box-shadow: 0 8px 16px -4px rgba(44,45,48,0.047);
            box-sizing: border-box;
        }
    }
}
.dark .secret{
    position: relative;
    height: 100vh;
    background: #2c2c2c;
    transition: all 0.3s;
    padding: 0 0 30px 0;
    box-sizing: border-box;
    .jike{
        height: 45px;
        margin-top: 15px;
        padding: 0 10px 0 10px;
        font-weight: bold;
        border-radius: 8px;
        border: 1px solid #5c5c5c;
        box-sizing: border-box;
        transition: all 0.3s;
    }
    .jike:hover{
        border: 1px solid #3b70fc;
        box-shadow: 0 0 10px rgba(76, 159, 236, 0.938);
    }
    .jike:hover .center-box{
        color: #3b70fc;
    }
    .swiper-start{
        padding-top: 15px;
        box-sizing: border-box;
        .swiper-start-left{
            padding-right: 15px;
            box-sizing: border-box;
        }
        .rander{
            height: 250px;
            border-radius: 8px;
            border: 1px solid #1d1c1c;
            box-shadow: 0 8px 16px -4px rgba(27, 27, 27, 0.047);
        }
        .most{
            display: flex;
            padding-top: 8px;
            box-sizing: border-box;
            .most_html{
                flex: 4;
                height: 80px;
                border-radius: 5px;
                border: 1px solid #1d1c1c;
                box-shadow: 0 8px 16px -4px rgba(27, 27, 27, 0.047);
                box-sizing: border-box;
            }
            .most_daxue{
                flex: 4;
                height: 80px;
                border-radius: 8px;
                margin: 0 8px 0 8px;
                border: 1px solid #1d1c1c;
                box-shadow: 0 8px 16px -4px rgba(27, 27, 27, 0.047);
                box-sizing: border-box;
            }
            .most_shenghuo{
                flex: 4;
                height: 80px;
                border-radius: 8px;
                border: 1px solid #1d1c1c;
                box-shadow: 0 8px 16px -4px rgba(27, 27, 27, 0.047);
                box-sizing: border-box;
            }
        }
        .swiper-start-right{
            border-radius: 8px;
            border: 1px solid #1d1c1c;
            box-shadow: 0 8px 16px -4px rgba(27, 27, 27, 0.047);
            box-sizing: border-box;
        }
    }
}
// .secret-box{
//     padding: 30px 120px 0px 120px;
//     box-sizing: border-box;
// }

.right-btn{
    width: 20px;
    height: 20px;
    display: flex;
    justify-items: center;
    align-items: center;
    border-radius: 50%;
    background: #979797;
    transition: all 0.3s;
}
.right-btn:hover{
    background: #3b70fc;
}

.secret-box-body{
    padding-top: 15px;
    box-sizing: border-box;
}
.secret-box-body-left{
    padding-right: 15px;
    box-sizing: border-box;
}
.secret-box-body-dh{
    height: 40px;
    border: 1px solid #e0e0e0;
    transition: all 0.3s;
    border-radius: 8px;
    .secret-box-body-ul{
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px 0 10px;
        list-style: none;
        box-sizing: border-box;
        .secret-box-body-li{
            padding: 5px 10px 10px 5px;
            font-weight: bold;
            transition: all 0.3s;
            box-sizing: border-box;
        }
        .secret-box-body-li-z{
            border-radius: 5px;
            color: #ffffff;
            background: #3b70fc;
        }
        .secret-box-body-li:hover{
            border-radius: 5px;
            color: #ffffff;
            background: #3b70fc;
        }
    }
}
.secret-box-body-dh:hover{
    border: 1px solid #3b70fc;
    box-shadow: 0 0 10px rgba(76, 159, 236, 0.938);
}
</style>
  