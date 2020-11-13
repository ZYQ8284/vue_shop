<template>
<div class="login_container">
    <div class="login_box">
<!--        表单区-->
        <el-form ref="loginFormRef1" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <div class="btns">

                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="resetLoginForm">重置</el-button>
            </div>
        </el-form>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            loginForm:{
                username:'zhang',
                password:'123'
            },

            loginFormRules:{
                username:[
                    { required: true, message: '请输入登录名称', trigger: 'blur' },
                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入登录名称', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }

                ]
            },


        }
    },
    methods:{
        resetLoginForm(){
            this.$refs.loginFormRef1.resetFields();
        },
        login(){
            this.$router.push('/home');
        }
    },

}
</script>

<style scoped long="less">
.login_container{
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #eeffdd;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
}
.login_box span{
    text-align: center;
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btns{
    display: flex;
    justify-content: flex-end;
}
</style>