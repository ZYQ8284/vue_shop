<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>部门管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row :gutter="10">
                <el-col :span="20">
                    <el-input placeholder="请输入内容" v-model="queryInfo.searchName">
                        <el-button slot="append" @click="getDataList">搜索</el-button>
                    </el-input>
                </el-col>
                <el-col>
                    <el-button @click="Add_Visible=true">添加部门</el-button>
                </el-col>
            </el-row>

            <el-table :data="department_list" style="width: 100%" border stripe>
                <el-table-column type="index" label="id"></el-table-column>
                <el-table-column prop="id" label="序号" width="180">
                </el-table-column>
                <el-table-column prop="name" label="名称" width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" @click="showEdit(scope.row.id)">修改</el-button>
                        <el-button type="danger" @click="delById(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.currentPage"
                    :page-sizes="[10,15,20]"
                    :page-size="queryInfo.pageSize"
                    layout="total,sizes, prev, pager, next,jumper"
                    :total="total">
            </el-pagination>
        </el-card>

        <el-dialog
                title="添加部门"
                :visible.sync="Add_Visible"
                width="50%"
                center @close="closeFrom">
            <el-form :model="addForm" status-icon :rules="addFormRules" ref="addFormRef" label-width="100px">
                <el-form-item label="部门名称" prop="name">
                    <el-input v-model="addForm.name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="Add_Visible = false">取 消</el-button>
    <el-button type="primary" @click="AddForm">确 定</el-button>
  </span>
        </el-dialog>

        <el-dialog
                title="修改部门"
                :visible.sync="edit_Visible"
                width="50%"
                center>
            <el-form :model="editForm" status-icon :rules="editFormRules" ref="editFormRef" label-width="100px">
                <el-form-item label="序号">
                    <el-input v-model="editForm.id" disabled></el-input>
                </el-form-item>
                <el-form-item label="部门名称" prop="name">
                    <el-input v-model="editForm.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="editForm.email"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="editClosed">取 消</el-button>
    <el-button type="primary" @click="editInfo">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            // var checkEmail = (rule, value, callback) => {
            //     const regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/
            //     if (regEmail.test(value)) {
            //         return callback()
            //     }
            //     callback(new Error("请输入合法的邮箱"))
            // }
            return {
                DataList: [],
                queryInfo: {
                    searchName: '',
                    currentPage: 1,
                    pageSize: 10
                },
                department_list: [
                    {
                        id: 1,
                        name: "开发部",
                    },
                    {
                        id: 2,
                        name: "测试部"
                    },
                    {
                        id: 3,
                        name: "市场部"
                    }
                ],
                edit_Visible: false,
                editForm: {id: '', name: '',email:''},
                total: 0,
                Add_Visible: false,
                addForm: {name: ''},
                addFormRules: {
                    name: [{required: true, message: '请输入部门名称', trigger: 'blur'}, {
                        min: 1,
                        max: 10,
                        message: '名称长度1到10',
                        trigger: 'blur'
                    }]
                },
                editFormRules: {
                    name: [{required: true, message: '请输入部门名称', trigger: 'blur'},
                        {
                            min: 1,
                            max: 10,
                            message: '名称长度1到10',
                            trigger: 'blur'
                        }
                    ]

                }
            }
        },
        created() {
            this.getDataList()
        },
        methods: {
            async getDataList() {
                const {data: res} = await this.$http.get("table?", {
                    params: this.queryInfo
                })
                this.DataList = res.list;
                this.total = res.totalCount;
            },
            handleSizeChange(newSize) {
                this.queryInfo.pageSize = newSize;
                this.getDataList();
            },
            handleCurrentChange(newPage) {
                this.queryInfo.currentPage = newPage
                this.getDataList();
            },
            //取消时间时候不用提交表单
            closeFrom() {
                this.$refs.addFormRef.resetFields();
            },
            AddForm() {
                this.$refs.addFormRef.validate(async valid => {
                    if (!valid) return
                    const {data: res} = await this.$http.post('addorupdate', this.addForm)
                    if (res.status !== 200) {
                        alert("添加失败");
                    }
                    // console.log(valid);
                    //隐藏对话框
                    this.Add_Visible = false
                    //重新调用数据
                    this.getDataList();
                })
            },
            async delById(id) {
                const confirmResult = await this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err => err)
                if (confirmResult !== 'confirm') {
                    alert("已经取消删除按钮")

                }

                // else {
                //     const {data: res} = await this.$http.get("192.168.3.56:8080/department/remove?id=" + id)
                //     console.log(res);
                // }
            },
            editClosed() {
                this.edit_Visible = false,
                    this.$refs.editFormRef.resetFields();
            },
            showEdit(id) {
                this.edit_Visible = true
                this.editForm.id = this.department_list[id].id
                this.editForm.name = this.department_list[id].name;
            },
            editInfo() {
                this.$refs.editFormRef.validate(valid => {
                    if (!valid) return
                    this.department_list.name = this.editForm.name;
                    this.edit_Visible = false
                })
            }
        }
    }
</script>
<style scoped>
</style>