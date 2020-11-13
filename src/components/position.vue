<template>
    <div>
    <div class="panel admin-panel">
        <div class="panel-head"><strong class="icon-reorder"> 职位列表</strong></div>
        <div class="padding border-bottom">
            <ul class="search" style="padding-left:10px;">
                <li> <button type="button" class="button border-yellow" onclick="window.location.href='#add'"><span class="icon-plus-square-o"></span> 添加职位</button> </li>
                <li>搜索：</li>
                <input type="text" placeholder="请输入搜索关键字" name="keywords" class="input" style="width:250px; line-height:17px;display:inline-block" />
                <li><a href="javascript:void(0)" class="button border-main icon-search" onclick="changesearch()" > 搜索</a></li>
            </ul>
        </div>
        <table class="table table-hover text-center">
            <tr>
                <th width="100" style="text-align:left; padding-left:20px;">序号</th>
                <th>职位名称</th>
                <th>职位工资</th>
                <th>所属部门</th>
                <th width="310">操作</th>
            </tr>
            <volist name="list" id="vo">
                <tr>
                    <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
                        1</td>
                    <td>Java初级</td>
                    <td>5000元</td>
                    <td>开发部</td>
                    <td><div class="button-group"> <a class="button border-main" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
                </tr>
                <tr>
                    <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
                        2</td>
                    <td>Java中级</td>
                    <td>10000元</td>
                    <td>开发部</td>
                    <td><div class="button-group"> <a class="button border-main" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
                </tr>
                <tr>
                    <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
                        3</td>
                    <td>Java高级</td>
                    <td>15000元</td>
                    <td>开发部</td>
                    <td><div class="button-group"> <a class="button border-main" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
                </tr>
                <tr>
                    <td style="text-align:left; padding:19px 0;padding-left:20px;"><input type="checkbox" id="checkall"/>
                        全选 </td>
                    <td colspan="7" style="text-align:left;padding-left:20px;"><a href="javascript:void(0)" class="button border-red icon-trash-o" style="padding:5px 15px;" onclick="DelSelect()"> 删除</a>
                        <select name="copynum" style="padding:5px 15px; border:1px solid #ddd;" onchange="changecopy(this)">
                            <option value="10">10条/页</option>
                            <option value="15">15条/页</option>
                            <option value="20">20条/页</option>
                        </select></td>
                </tr>
                <tr>
                    <td colspan="8"><div class="pagelist"> <a href="">首页</a><a href="">上一页</a> <span class="current">1</span><a href="">2</a><a href="">3</a><a href="">下一页</a><a href="">尾页</a> </div></td>
                </tr>
            </volist>
        </table>
    </div>
        <div class="panel admin-panel">
            <div class="panel-head"><strong class="icon-reorder"> 职位列表</strong></div>
            <div class="padding border-bottom">
                <ul class="search" style="padding-left:10px;">
                    <li> <button type="button" class="button border-yellow" onclick="window.location.href='#add'"><span class="icon-plus-square-o"></span> 添加职位</button> </li>
                    <li>搜索：</li>
                    <input type="text" placeholder="请输入搜索关键字" name="keywords" class="input" style="width:250px; line-height:17px;display:inline-block" />
                    <li><a href="javascript:void(0)" class="button border-main icon-search" onclick="changesearch()" > 搜索</a></li>
                </ul>
            </div>
            <table class="table table-hover text-center">
                <tr>
                    <th width="100" style="text-align:left; padding-left:20px;">序号</th>
                    <th>职位名称</th>
                    <th>职位工资</th>
                    <th>所属部门</th>
                    <th width="310">操作</th>
                </tr>
                <volist name="list" id="vo">
                    <tr>
                        <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
                            1</td>
                        <td>Java初级</td>
                        <td>5000元</td>
                        <td>开发部</td>
                        <td><div class="button-group"> <a class="button border-main" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
                    </tr>
                    <tr>
                        <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
                            2</td>
                        <td>Java中级</td>
                        <td>10000元</td>
                        <td>开发部</td>
                        <td><div class="button-group"> <a class="button border-main" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
                    </tr>
                    <tr>
                        <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
                            3</td>
                        <td>Java高级</td>
                        <td>15000元</td>
                        <td>开发部</td>
                        <td><div class="button-group"> <a class="button border-main" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
                    </tr>
                    <tr>
                        <td style="text-align:left; padding:19px 0;padding-left:20px;"><input type="checkbox" id="checkall"/>
                            全选 </td>
                        <td colspan="7" style="text-align:left;padding-left:20px;"><a href="javascript:void(0)" class="button border-red icon-trash-o" style="padding:5px 15px;" onclick="DelSelect()"> 删除</a>
                            <select name="copynum" style="padding:5px 15px; border:1px solid #ddd;" onchange="changecopy(this)">
                                <option value="10">10条/页</option>
                                <option value="15">15条/页</option>
                                <option value="20">20条/页</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td colspan="8"><div class="pagelist"> <a href="">首页</a><a href="">上一页</a> <span class="current">1</span><a href="">2</a><a href="">3</a><a href="">下一页</a><a href="">尾页</a> </div></td>
                    </tr>
                </volist>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return{
          checkall:'',
      }
    },
name: ""
}
</script>

<style scoped>

</style>