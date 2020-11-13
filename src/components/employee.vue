<template>
    <div class="panel admin-panel">
        <div class="panel-head"><strong class="icon-reorder"> 员工列表</strong></div>
        <div class="padding border-bottom">

            <ul class="search" style="padding-left:10px;">
                <li> <button type="button" class="button border-yellow" onclick="window.location.href='#add'"><span class="icon-plus-square-o"></span> 添加员工</button> </li>
                <li>搜索：</li>
                <input type="text" placeholder="请输入搜索关键字" name="keywords" class="input" style="width:250px; line-height:17px;display:inline-block" />
                <li><a href="javascript:void(0)" class="button border-main icon-search" onclick="changesearch()" > 搜索</a>
                </li>
            </ul>

        </div>
        <table class="table table-hover text-center">
            <tr>
                <th width="100" style="text-align:left; padding-left:20px;">序号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>照片</th>
                <th>生日</th>
                <th>学历</th>
                <th>经验</th>
                <th>部门</th>
                <th>职位</th>
                <th width="310">操作</th>
            </tr>
            <volist name="list" id="vo">
                <tr>
                    <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
                        1</td>
                    <td>张三</td>
                    <td>男</td>
                    <td width="10%"><img src="images/11.jpg" alt="" width="70" height="50" /></td>
                    <td>1990-09-14</td>
                    <td>本科</td>
                    <td>1年</td>
                    <td>开发部</td>
                    <td>Java高级开发工程师</td>
                    <td><div class="button-group"> <a class="button border-main" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
                </tr>
                <tr>
                    <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
                        2</td>
                    <td>李四</td>
                    <td>女</td>
                    <td width="10%"><img src="images/11.jpg" alt="" width="70" height="50" /></td>
                    <td>1989-08-08</td>
                    <td>大专</td>
                    <td>2年</td>
                    <td>测试部</td>
                    <td>白盒测试</td>
                    <td><div class="button-group"> <a class="button border-main" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
                </tr>
                <tr>
                    <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
                        3</td>
                    <td>王五</td>
                    <td>男</td>
                    <td width="10%"><img src="images/11.jpg" alt="" width="70" height="50" /></td>
                    <td>1988-11-07</td>
                    <td>本科</td>
                    <td>3年</td>
                    <td>测试部</td>
                    <td>黑盒测试</td>
                    <td><div class="button-group"> <a class="button border-main" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
                </tr>

                <tr>
                    <td style="text-align:left; padding:19px 0;padding-left:20px;"><input type="checkbox" id="checkall"/>
                        全选 </td>
                    <td colspan="9" style="text-align:left;padding-left:20px;"><a href="javascript:void(0)" class="button border-red icon-trash-o" style="padding:5px 15px;" onclick="DelSelect()"> 删除</a>
                        <select name="copynum" style="padding:5px 15px; border:1px solid #ddd;" onchange="changecopy(this)">
                            <option value="10">10条/页</option>
                            <option value="15">15条/页</option>
                            <option value="20">20条/页</option>
                        </select></td>
                </tr>
                <tr>
                    <td colspan="10"><div class="pagelist"> <a href="">首页</a><a href="">上一页</a> <span class="current">1</span><a href="">2</a><a href="">3</a><a href="">下一页</a><a href="">尾页</a> </div></td>
                </tr>
            </volist>
        </table>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>