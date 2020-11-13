<template>
    <el-container class="home_container">
        <el-header>
            <div class="header bg-main">
                <div class="logo margin-big-left fadein-top">
                    <h1><img src="../images/1.jpg" class="radius-circle rotate-hover" height="50" alt="" />后台管理中心</h1>
                </div>
                <div class="head-l"><a class="button button-little bg-green" href="" target="_blank"><span class="icon-home"></span> 前台首页</a> &nbsp;&nbsp;<a href="##" class="button button-little bg-blue"><span class="icon-wrench"></span> 清除缓存</a> &nbsp;&nbsp;<a class="button button-little bg-red" href="login.html"><span class="icon-power-off"></span> 退出登录</a> </div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px" >
<!--                侧边栏区-->
                <el-menu
                        background-color="#0A7bb4"
                        text-color="#fff"
                        active-text-color="#ffd04b" router v-for="item in menu" :key="item.id" >
                    <el-submenu  :index="'/'+item.name">
                        <template slot="title">
                            <span :class="item.classname"></span>
                            <span>{{ item.name }}</span>
                        </template>
                            <el-menu-item :index="'/'+sub.path" :key="sub.id" v-for="sub in item.subPath" >
                                <span :class="sub.classname"></span>
                                <span>{{sub.name}}</span>
                            </el-menu-item>
                    </el-submenu>
<!--                    <el-submenu :index="item.id" v-for="sub in item" :key="sub.id">-->
<!--                        <template slot="title">-->
<!--                            <span class="icon-pencil-square-o"></span>-->
<!--                            <span>{{ item.name }}</span>-->
<!--                        </template>-->
<!--                        <el-menu-item :index="item.subPath.id">-->
<!--                            <span class="icon-caret-right"></span>-->
<!--                            <span>{{ item.subPath.name }}</span>-->
<!--                        </el-menu-item>-->
<!--                        <el-menu-item :index="item.subPath.id">-->
<!--                            <span class="icon-caret-right"></span>-->
<!--                            <span >{{ item.subPath.name }}</span>-->
<!--                        </el-menu-item>-->
<!--                        <el-menu-item index="item.subPath.id">-->
<!--                            <span class="icon-caret-right"></span>-->
<!--                            <span>{{ item.subPath.name }}</span>-->
<!--                        </el-menu-item>-->
<!--                    </el-submenu>-->
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
name: "",
    data(){
    return{
        menu:[
            {id:'1',name:'菜单管理',path:'/',classname:'icon-list',subPath:[{id:'101',name:'账号管理',path:'user',classname:'icon-user'}],
            },
            {id:'2',name:'人员管理',path:'name',classname:'icon-pencil-square-o',subPath:[
                    {id:'201',name: '部门管理',path: 'department',classname:'icon-caret-right'},
                    {id:'202',name: '职位管理',path: 'position',classname:'icon-caret-right'},
                    {id:'203',name: '员工管理',path: 'employee',classname:'icon-caret-right'},
                ]}
        ]
    }
    },
    methods:{

    }
}
</script>

<style scoped>
.home_container{
    height: 100%;
}
</style>