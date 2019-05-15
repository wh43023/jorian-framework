(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d5b83a0"],{"1c64":function(e,t,a){},"1cc6":function(e,t,a){"use strict";var n=a("1c64"),i=a.n(n);i.a},"1f34":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("昵称")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.nickname,callback:function(t){e.$set(e.listQuery,"nickname",t)},expression:"listQuery.nickname"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("用户名")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.username,callback:function(t){e.$set(e.listQuery,"username",t)},expression:"listQuery.username"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("所属单位")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.company,callback:function(t){e.$set(e.listQuery,"company",t)},expression:"listQuery.company"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:e.$t("状态"),clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}),1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(e._s(e.$t("table.export")))])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[e._e(),e._v(" "),a("el-table-column",{attrs:{label:e.$t("账户名"),width:"130px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.username))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("昵称"),width:"130px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.nickname))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("性别"),width:"65px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.sex?a("span",[e._v("女")]):1==t.row.sex?a("span",[e._v("男")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("角色"),align:"center","min-width":"185"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.roles,function(t){return a("el-tag",[e._v(e._s(t.name))])})}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("单位名称"),"min-width":"140px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.company))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("状态"),width:"65px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("span",{staticStyle:{color:"springgreen"}},[e._v("正常")]):0==t.row.status?a("span",{staticStyle:{color:"red"}},[e._v("异常")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("手机号"),"class-name":"status-col","min-width":"110px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.phone))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("创建时间"),width:"170px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("parseTime")(t.row.createTime,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("操作"),align:"center","min-width":"260","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("table.edit"))+"\n        ")]),e._v(" "),t.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleModifyStatus(t.row,0)}}},[e._v(e._s(e.$t("table.lock"))+"\n        ")]):t.row.status?e._e():a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleModifyStatus(t.row,1)}}},[e._v(e._s(e.$t("table.unlock"))+"\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v(e._s(e.$t("table.delete"))+"\n        ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"600px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:e.$t("账户名"),prop:"username"}},[a("el-input",{model:{value:e.temp.username,callback:function(t){e.$set(e.temp,"username",t)},expression:"temp.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("昵称"),prop:"nickname"}},[a("el-input",{model:{value:e.temp.nickname,callback:function(t){e.$set(e.temp,"nickname",t)},expression:"temp.nickname"}})],1),e._v(" "),e.isShowPassword?a("el-form-item",{attrs:{label:e.$t("密码"),prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1):e._e(),e._v(" "),e.isShowPassword?a("el-form-item",{attrs:{label:e.$t("重复密码"),prop:"repassword"}},[a("el-input",{attrs:{type:"password"},model:{value:e.repassword,callback:function(t){e.repassword=t},expression:"repassword"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:e.$t("角色"),prop:"roleNameChecked"}},[a("el-checkbox-group",{model:{value:e.roleNameChecked,callback:function(t){e.roleNameChecked=t},expression:"roleNameChecked"}},e._l(e.rolesOptions,function(t){return a("el-checkbox",{key:t,attrs:{label:t.name}},[e._v(e._s(t.name))])}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("公司"),prop:"company"}},[a("el-input",{model:{value:e.temp.company,callback:function(t){e.$set(e.temp,"company",t)},expression:"temp.company"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("手机号"),prop:"phone"}},[a("el-input",{model:{value:e.temp.phone,callback:function(t){e.$set(e.temp,"phone",t)},expression:"temp.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("性别")}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:e.$t("table.selectplaceholder")},model:{value:e.temp.sex,callback:function(t){e.$set(e.temp,"sex",t)},expression:"temp.sex"}},e._l(e.sexOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("状态")}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:e.$t("table.selectplaceholder")},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}),1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},i=[],l=(a("7f7f"),a("ac6a"),a("5d73")),s=a.n(l),o=a("5176"),r=a.n(o),u=a("c0c7"),c=a("3528"),d=a("6724"),p=a("ed08"),m=a("333d"),f=a("61f7"),h=(a("5c96"),[{key:0,display_name:"女"},{key:1,display_name:"男"}]),v=[{key:0,display_name:"锁定"},{key:1,display_name:"正常"}],y=function(e,t,a){Object(f["e"])(t)?a():a(new Error("用户名应该由4到16位字母数字组成"))},b=function(e,t,a){Object(f["d"])(t)?a():a(new Error("密码应该由6到10位字母数字组成"))},g={name:"Login",components:{Pagination:m["a"]},directives:{waves:d["a"]},filters:{},data:function(){return{tableKey:0,list:null,total:0,isShowPassword:!1,repassword:"",listLoading:!0,listQuery:{page:1,limit:20,username:"",nickname:"",company:"",status:""},sortOptions:[{label:"ID 增序",key:"+id"},{label:"ID 倒序",key:"-id"}],sexOptions:h,statusOptions:v,rolesOptions:[],roleNameChecked:[],showReviewer:!1,temp:{id:"",createTime:"",updateTime:"",nickname:"",username:"",password:"",roles:[],sex:"",status:"",company:"",phone:"",email:"",avatar:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"修改",create:"新建"},dialogPvVisible:!1,rules:{username:[{required:!0,trigger:"blur",validator:y}],password:[{required:!0,trigger:"blur",validator:b}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(u["c"])(this.listQuery).then(function(t){e.list=t.data.records,e.total=t.data.total,e.listLoading=!1}),Object(c["c"])().then(function(t){e.rolesOptions=t.data.records})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){var a=this;e.status=t,this.temp=r()({},e),this.temp.updateTime=new Date|p["d"];var n=!0,i=!1,l=void 0;try{for(var o,c=s()(this.list);!(n=(o=c.next()).done);n=!0){var d=o.value;if(d.id===this.temp.id){var m=this.list.indexOf(d);this.list.splice(m,1,this.temp);break}}}catch(f){i=!0,l=f}finally{try{n||null==c.return||c.return()}finally{if(i)throw l}}this.dialogFormVisible=!1,Object(u["d"])(this.temp).then(function(){a.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="id",this.handleFilter()},resetTemp:function(){this.roleNameChecked=[],this.repassword="",this.temp={id:"",createTime:void 0,updateTime:void 0,nickname:void 0,username:void 0,password:void 0,roles:[],sex:void 0,status:void 0,company:void 0,phone:void 0,email:void 0,avatar:void 0}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.isShowPassword=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},createData:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){var a=r()({},e.temp),n=[];e.roleNameChecked.forEach(function(t){e.rolesOptions.forEach(function(e){t===e.name&&n.push(e)})}),a.roles=n,e.list.unshift(a),e.dialogFormVisible=!1,Object(u["a"])(a).then(function(){e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})}})},handleUpdate:function(e){var t=this;this.temp=r()({},e),this.roleNameChecked=[],this.temp.roles.forEach(function(e){t.roleNameChecked.push(e.name)}),this.isShowPassword=!1,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},updateData:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){var a=r()({},e.temp),n=[];e.roleNameChecked.forEach(function(t){e.rolesOptions.forEach(function(e){t===e.name&&n.push(e)})}),a.roles=n;var i=!0,l=!1,o=void 0;try{for(var c,d=s()(e.list);!(i=(c=d.next()).done);i=!0){var p=c.value;if(p.id===a.id){var m=e.list.indexOf(p);e.list.splice(m,1,a);break}}}catch(f){l=!0,o=f}finally{try{i||null==d.return||d.return()}finally{if(l)throw o}}Object(u["d"])(a).then(function(){e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3}),e.getList()})}})},handleDelete:function(e){var t=this,a=this.list.indexOf(e);this.list.splice(a,1),Object(u["b"])(e.id).then(function(){t.dialogFormVisible=!1,t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-5bdd67a2"),a.e("chunk-b27dbcdc"),a.e("chunk-58293907")]).then(a.bind(null,"4bf8d")).then(function(t){var a=["timestamp","title","type","importance","status"],n=["timestamp","title","type","importance","status"],i=e.formatJson(n,e.list);t.export_json_to_excel({header:a,data:i,filename:"table-list"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(p["d"])(t[e]):t[e]})})}}},w=g,k=a("2877"),_=Object(k["a"])(w,n,i,!1,null,null,null);t["default"]=_.exports},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,a){var n=o(),i=e-n,r=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=r;var o=Math.easeInOutQuad(u,n,i,t);s(o),u<t?l(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&r(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},c=u,d=(a("1cc6"),a("2877")),p=Object(d["a"])(c,n,i,!1,null,"f3b72548",null);t["a"]=p.exports},3528:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s}),a.d(t,"d",function(){return o});var n=a("b775");function i(e){return Object(n["a"])({url:"/system/role/list",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/system/role/add",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/system/role/delete/"+e,method:"delete"})}function o(e){return Object(n["a"])({url:"/system/role/update",method:"put",data:e})}},6724:function(e,t,a){"use strict";var n=a("5176"),i=a.n(n),l=(a("8d41"),"@@wavesContext");function s(e,t){function a(a){var n=i()({},t.value),l=i()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=l.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),r=s.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",s.appendChild(r)),l.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=l.color,r.className="waves-ripple z-active",!1}}return e[l]?e[l].removeHandle=a:e[l]={removeHandle:a},a}var o={bind:function(e,t){e.addEventListener("click",s(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[l].removeHandle,!1),e.addEventListener("click",s(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[l].removeHandle,!1),e[l]=null,delete e[l]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"8d41":function(e,t,a){},c0c7:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"a",function(){return l}),a.d(t,"d",function(){return s}),a.d(t,"b",function(){return o});var n=a("b775");function i(e){return Object(n["a"])({url:"system/user/list",method:"get",params:e})}function l(e){return Object(n["a"])({url:"system/user/add",method:"post",data:e})}function s(e){return Object(n["a"])({url:"system/user/update",method:"put",data:e})}function o(e){return Object(n["a"])({url:"system/user/delete/"+e,method:"delete"})}}}]);