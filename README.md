### 项目介绍

##### 	1.一个适合企业快速开发数据可视化项目的平台，且可以快速下载对应图表便于后期数据报表制作。

##### 	2.通过权限控制对不同的用户展现对应的模块，同时兼具按钮权限控制。

### 技术栈 

##### 	 Vue3 生态，Ts

### 插件库

#####  	ElenemtPlus,ECharts 等

### 本地运行命令

##### 	1.安装依赖 pnpm install   yarn  npm i

##### 	2.本地运行命令  pnpm test    yarn test

### 路由权限设置 

##### 	项目名称.一级模块标识.二级模块标识.操作权限(view:查看，edit:修改，add：新增，del：删除等可根据具							体需求自定义)

##### 	例：1.  appName.Dashboard.view (只有一级菜单的查看权限)

##### 		2. appName.table.index.view(二级菜单查看权限)

##### 		3. appName.table.index.edit(表格按钮修改权限)