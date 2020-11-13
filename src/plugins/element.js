import Vue from 'vue'
import { Button } from 'element-ui'
import {Icon,MessageBox,Dialog,Table,Breadcrumb,BreadcrumbItem,TableColumn,Form,Col,Row,Card,Pagination,FormItem,Input,Container,Header,Main,Aside,Menu,Submenu,MenuItemGroup,MenuItem} from "element-ui";


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Icon)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dialog)
Vue.prototype.$confirm=MessageBox.confirm

