(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{ebf2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"constrain",attrs:{padding:""}},[n("div",[n("q-splitter",{staticStyle:{height:"600px",width:"1000px"},scopedSlots:e._u([{key:"before",fn:function(){return[n("q-tabs",{staticClass:"text-dark",attrs:{vertical:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("q-tab",{attrs:{name:"users",label:"Users"}}),n("q-tab",{attrs:{name:"terms",label:"Terms"}}),n("q-tab",{attrs:{name:"other2",label:"other2"}})],1)]},proxy:!0},{key:"after",fn:function(){return[n("q-tab-panels",{attrs:{animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"users"}},[n("UsersManagement")],1),n("q-tab-panel",{attrs:{name:"terms"}},[n("TermsManagement",{attrs:{companiesProp:e.companies},on:{saveCompanies:e.saveCompanies}})],1),n("q-tab-panel",{attrs:{name:"other2"}},[n("div",{staticClass:"text-h4 q-mb-md"},[e._v("other2")]),n("p",[e._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.")]),n("p",[e._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.")]),n("p",[e._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.")])])],1)]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)])},a=[],s=(n("d81d"),n("96cf"),n("c973")),i=n.n(s),o=n("8654"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("q-markup-table",{attrs:{flat:"",bordered:""}},[n("thead",{},[n("tr",[n("th",{attrs:{colspan:"5"}},[n("div",{staticClass:"row no-wrap items-center justify-between"},[n("div",{staticClass:"col-10 row items-center"},[n("q-icon",{staticClass:"q-pa-md",staticStyle:{"font-size":"2rem"},attrs:{name:"fa fa-users",color:"primary"}}),n("div",{staticClass:"text-h5 q-ml-md text-dark"},[e._v("\n                Manage users\n              ")])],1),n("div",{staticClass:"col-2"},[n("q-btn",{attrs:{outline:"",color:"primary",round:"",dense:"",icon:"fa fa-plus",padding:"sm"}})],1)])])]),n("tr",[n("th",{staticClass:"text-left"},[e._v("User Action")]),n("th",{staticClass:"text-center"},[e._v("Name/Email")]),n("th",{staticClass:"text-center"},[e._v("Roles")]),n("th",{staticClass:"text-center"},[e._v("Trainings")]),n("th",{staticClass:"text-right"},[e._v("Status")])])]),n("tbody",{key:e.tableKey,staticClass:"bg-grey-3"},e._l(e.users,(function(t,r){return n("tr",{key:r},[n("td",{staticClass:"text-left"},[n("div",{staticClass:"q-gutter-xs row items-start justify-between"},[n("q-btn",{attrs:{outline:"",color:"primary",round:"",dense:"",icon:"fa fa-pen",padding:"sm"}}),n("q-btn",{attrs:{outline:"",color:"primary",round:"",dense:"",icon:"fa fa-trash",padding:"sm"}})],1)]),n("td",{staticClass:"text-center"},[n("div",[e._v("\n            "+e._s(t.first_name)+" "+e._s(t.last_name)+"\n          ")]),n("div",{staticClass:"text-primary"},[e._v("\n            "+e._s(t.email)+"\n          ")])]),n("td",{staticClass:"text-center"},[n("q-btn",{staticClass:"text-green",attrs:{icon:"fa fa-plus",size:"7px"},on:{click:function(n){return e.addRoleToUser(t)}}},[e._v("\n              Add role\n            ")]),t.roles.length>0?n("ul",e._l(t.roles,(function(r,a){return n("li",{key:a,staticClass:"row justify-between "},[n("div",[e._v("\n               -  "+e._s(r.name)+"\n            ")]),r.id?n("q-btn",{staticClass:"text-red",attrs:{icon:"fa fa-times",size:"7px"},on:{click:function(n){return e.removeRoleToUser(r.name,t.id)}}},[e._v("\n              remove\n            ")]):e._e()],1)})),0):e._e()],1),n("td",{staticClass:"text-center"},[n("div",[e._v("\n            "+e._s(t.courses.length)+"\n          ")]),n("div",[n("q-btn",{staticClass:"text-primary",attrs:{size:"7px"},on:{click:function(n){return e.manageTrainings(t)}}},[e._v("\n              Manage\n            ")])],1)]),n("td",{staticClass:"text-right"},[n("q-btn",{attrs:{label:e.label(t.status),outline:"",flat:"",dense:"",color:e.color(t.status),padding:"sm"}})],1)])})),0)]),e.openRoles?n("AddRole",{key:e.addRoleKey,attrs:{propUser:e.propUser,openDialog:e.openRoles},on:{popopClosed:e.poposclosed}}):e._e(),e.openTrainings?n("UserTrainings",{key:e.trainingsKey,attrs:{propUser:e.propUser,openDialog:e.openTrainings},on:{popopClosed:e.trainingPopopclosed}}):e._e()],1)},c=[],u=(n("99af"),n("7db0"),n("c975"),n("a434"),n("b0c0"),n("ded3")),p=n.n(u),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-dialog",{staticStyle:{"min-width":"100vh","max-height":"50vh"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[n("q-card",{staticClass:"q-pr-md"},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Add Role to "+e._s(e.propUser.first_name.toUpperCase())+" "+e._s(e.propUser.last_name.toUpperCase()))])]),n("q-separator"),n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[n("div",{staticClass:"q-gutter-md row items-start justify-between"},[n("q-select",{staticClass:"col-lg-4 col-md-12 col-sm-12 col-xs-12",attrs:{dense:"",filled:"",options:e.roles,"emit-value":"","map-options":"",hint:"Select a role"},model:{value:e.formRole,callback:function(t){e.formRole=t},expression:"formRole"}}),n("q-input",{staticClass:"col-lg-7 col-md-12 col-sm-12 col-xs-12",attrs:{hint:"denomination",dense:"",filled:""},scopedSlots:e._u([{key:"before",fn:function(){return[n("q-icon",{attrs:{round:"",dense:"",flat:"",name:"fa fa-plus"}})]},proxy:!0},{key:"after",fn:function(){return[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.formRole,expression:"formRole"},{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",round:"",dense:"",flat:"",icon:"fa fa-save"},on:{click:function(t){return e.addRoleToUser()}}},[n("q-tooltip",{attrs:{offset:[10,10],"transition-show":"rotate","transition-hide":"rotate"}},[e._v("\n                  Save\n                ")])],1)]},proxy:!0}]),model:{value:e.formRole,callback:function(t){e.formRole=t},expression:"formRole"}})],1),n("br")]),n("q-separator"),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"close",color:"primary"}})],1)],1)],1)],1)},m=[],f=n("080a"),v=(n("fec7"),n("4360")),h=(n("a18c"),n("1232"),n("c1df"),function(){var e=i()(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["a"])().get("/users/get_all_roles");case 3:t=e.sent,v["a"].dispatch("wilfried/setRoles",t.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("error: "+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()),g=function(){var e=i()(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["a"])().post("/users/".concat(t.id,"/add_role"),t);case 3:e.sent,h(),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("error: "+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=i()(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["a"])().post("/users/".concat(t.user_id,"/remove_role"),t);case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log("error: "+e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),x=n("2f62"),w={name:"AddRole",props:["openDialog","propUser"],data:function(){return{model:!1,roles:[],formRole:""}},mounted:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.model=e.openDialog,!(e["wilfried/roles"].length<1)){t.next=4;break}return t.next=4,h();case 4:e.roles=e["wilfried/roles"];case 5:case"end":return t.stop()}}),t)})))()},computed:p()({},Object(x["c"])(["wilfried/roles"])),methods:{emitData:function(){var e={id:this.propUser.id,role:this.formRole};this.$emit("popopClosed",e)},addRoleToUser:function(){var e={id:this.propUser.id,role:this.formRole};g(e),this.emitData(),this.model=!1}}},y=w,q=n("2877"),C=n("24e8"),_=n("f09f"),k=n("a370"),R=n("eb85"),T=n("ddd8"),U=n("27f9"),Q=n("0016"),j=n("9c40"),S=n("05c0"),O=n("4b7e"),K=n("7f67"),M=n("eebe"),$=n.n(M),I=Object(q["a"])(y,d,m,!1,null,null,null),A=I.exports;$()(I,"components",{QDialog:C["a"],QCard:_["a"],QCardSection:k["a"],QSeparator:R["a"],QSelect:T["a"],QInput:U["a"],QIcon:Q["a"],QBtn:j["a"],QTooltip:S["a"],QCardActions:O["a"]}),$()(I,"directives",{ClosePopup:K["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-dialog",{staticStyle:{"min-width":"500vh","max-height":"100vh"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[n("q-card",{staticClass:"q-pr-md"},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Manage trainings of "+e._s(e.propUser.first_name.toUpperCase())+" "+e._s(e.propUser.last_name.toUpperCase()))])]),n("q-separator"),n("q-card-section",{key:e.myKey,staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[n("div",{staticClass:"q-gutter-md row items-start justify-between"},[n("q-select",{staticClass:"col-lg-4 col-md-12 col-sm-12 col-xs-12",attrs:{dense:"",filled:"",options:e.trainingsOption,"emit-value":"","map-options":"",hint:"Select training course"},scopedSlots:e._u([{key:"after",fn:function(){return[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.selectedTrainingId,expression:"selectedTrainingId"},{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",round:"",dense:"",flat:"",icon:"fa fa-save"},on:{click:function(t){return e.addTrainingUser()}}},[n("q-tooltip",{attrs:{offset:[10,10],"transition-show":"rotate","transition-hide":"rotate"}},[e._v("\n                  Save\n                ")])],1)]},proxy:!0}]),model:{value:e.selectedTrainingId,callback:function(t){e.selectedTrainingId=t},expression:"selectedTrainingId"}})],1),n("br"),n("q-separator")],1),e.propUser.courses.length>0?n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},e._l(e.propUser.courses,(function(t,r){return n("div",{key:r},[n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-9"},[e._v("\n                "+e._s(r+1)+" - "+e._s(t.denomination)+"\n              ")]),n("div",{staticClass:"col-2"},[n("q-btn",{staticClass:"text-red",attrs:{size:"7px"},on:{click:function(n){return e.removeTrainingUser(t.id)}}},[e._v("\n                  remove\n                ")])],1)]),n("q-separator")],1)})),0):e._e(),n("q-separator"),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"close",color:"primary"}})],1)],1)],1)],1)},P=[],N=n("4eea"),E={name:"UserTrainings",props:["openDialog","propUser"],data:function(){return{ok:!1,model:!1,trainings:[],selectedTrainingId:null,myKey:43,trainingsOption:[]}},mounted:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.model=e.openDialog,e["wilfried/trainings"]){t.next=4;break}return t.next=4,e.getTrainings();case 4:for(n in e.trainings=e["wilfried/trainings"],e.trainings)r=e.trainings[n],e.trainingsOption.push({label:r.denomination,value:r.id});case 6:case"end":return t.stop()}}),t)})))()},computed:p()({},Object(x["c"])(["wilfried/trainings","currentUser"])),methods:{getTrainings:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$q.loading.show(),t.prev=1,t.next=4,Object(N["e"])();case 4:n=t.sent,e.trainings=null===n||void 0===n?void 0:n.data,e.$store.dispatch("wilfried/setTrainings",null===n||void 0===n?void 0:n.data),e.myKey++,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log("error: "+t.t0);case 13:return t.prev=13,e.$q.loading.hide(),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))()},emitData:function(){var e,t=this,n={id:this.propUser.id,training:null!==(e=this.trainings.find((function(e){return e.id==t.selectedTrainingId})))&&void 0!==e?e:null};this.$emit("popopClosed",n)},addTrainingUser:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={id:e.currentUser.id,user_id:e.propUser.id,course_id:e.selectedTrainingId},t.next=3,Object(N["a"])(n);case 3:e.model=!1,e.emitData();case 5:case"end":return t.stop()}}),t)})))()},removeTrainingUser:function(e){var t=this,n={id:this.currentUser.id,user_id:this.propUser.id,course_id:e},r=this.trainings.find((function(t){return t.id==e}));this.$q.dialog({title:"Confirm",message:"Are you sure you want to remove ".concat(r.denomination.toUpperCase()),cancel:!0,persistent:!0,color:"red",ok:"delete"}).onOk(i()(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(N["c"])(n);case 2:a=t.propUser.courses.indexOf(r),t.propUser.courses.splice(a,1);case 4:case"end":return e.stop()}}),e)}))))}}},z=E,B=Object(q["a"])(z,D,P,!1,null,null,null),L=B.exports;$()(B,"components",{QDialog:C["a"],QCard:_["a"],QCardSection:k["a"],QSeparator:R["a"],QSelect:T["a"],QBtn:j["a"],QTooltip:S["a"],QCardActions:O["a"]}),$()(B,"directives",{ClosePopup:K["a"]});var J=n("e1cc"),F={name:"UsersManagement",components:{AddRole:A,UserTrainings:L},data:function(){return{tableKey:323,propUser:null,addRoleKey:22,trainingsKey:3,openRoles:!1,openTrainings:!1,users:[]}},mounted:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e["wilfried/users"].length<1)){t.next=3;break}return t.next=3,Object(o["c"])();case 3:e.users=Object(J["c"])(e["wilfried/users"]);case 4:case"end":return t.stop()}}),t)})))()},computed:p()({},Object(x["c"])(["wilfried/users"])),methods:{manageTrainings:function(e){this.propUser=e,this.openTrainings=!0,this.trainingsKey++},trainingPopopclosed:function(e){if(e){var t=this.users.find((function(t){return t.id===e.id}));t.courses.push(e.training),this.tableKey++}this.openTrainings=!1},label:function(e){var t;return null===(t=J["b"].STATUS.find((function(t){return t.value==e})))||void 0===t?void 0:t.label},color:function(e){var t;return null===(t=J["b"].STATUS.find((function(t){return t.value==e})))||void 0===t?void 0:t.color},addRoleToUser:function(e){this.openRoles=!0,this.propUser=e,this.addRoleKey++},removeRoleToUser:function(e,t){var n=this,r={user_id:t,role:e},a=this.users.find((function(e){return e.id===t}));this.$q.dialog({title:"Confirm",message:"Are you sure you want to remove ".concat(e.toUpperCase()," role to ").concat(a.first_name.toUpperCase()," ").concat(a.last_name.toUpperCase(),"?"),cancel:!0,persistent:!0,color:"red",ok:"delete"}).onOk(i()(regeneratorRuntime.mark((function t(){var s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a.roles.find((function(t){return t.name===e})),i=a.roles.indexOf(s),a.roles.splice(i,1),t.next=5,b(r);case 5:Object(o["c"])(),n.tableKey++;case 7:case"end":return t.stop()}}),t)}))))},poposclosed:function(e){if(e.role.length>0){var t=this.users.find((function(t){return t.id===e.id}));t.roles.push({name:e.role}),this.tableKey++}this.openRoles=!1}}},G=F,H=n("2bb1"),V=Object(q["a"])(G,l,c,!1,null,null,null),W=V.exports;$()(V,"components",{QMarkupTable:H["a"],QIcon:Q["a"],QBtn:j["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-btn",{attrs:{outline:"",padding:"sm",round:"",dense:"",color:"primary",icon:"fa fa-save"},on:{click:function(t){return e.saveTerms()}}},[n("q-tooltip",{attrs:{offset:[10,10],"transition-show":"rotate","transition-hide":"rotate"}},[e._v("\n        Save\n    ")])],1),n("q-splitter",{staticStyle:{height:"600px",width:"100%"},scopedSlots:e._u([{key:"before",fn:function(){return[n("q-tabs",{staticClass:"text-dark",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.formsKeys,(function(e,t){return n("q-tab",{key:t,attrs:{name:e,label:e,"no-caps":""}})})),1),n("q-tab-panels",{attrs:{animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.formsKeys,(function(t,r){return n("q-tab-panel",{key:r,attrs:{name:t}},[e.localCompanies?n("RichText",{attrs:{propModel:e.localCompanies[t].terms,propModelName:t,label:"Terms "+t},on:{modelData:e.modelUpdate}}):e._e()],1)})),1)]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)},Y=[],Z=n("66dc"),ee={name:"TermsManagement",props:["companiesProp"],components:{RichText:Z["a"]},data:function(){return{localCompanies:null,tab:null,splitterModel:100,formsKeys:["en","fr","it"],terms:{},lang:this.$i18n.locale}},created:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(J["c"])(e.companiesProp);case 2:e.localCompanies=t.sent,e.tab=e.formsKeys[0];case 4:case"end":return t.stop()}}),t)})))()},computed:p()({},Object(x["c"])(["company"])),methods:{modelUpdate:function(e){this.localCompanies[e.modelKey].terms=e.model},saveTerms:function(){this.localCompanies&&this.$emit("saveCompanies",this.localCompanies)}}},te=ee,ne=n("8562"),re=n("429b"),ae=n("7460"),se=n("adad"),ie=n("823b"),oe=Object(q["a"])(te,X,Y,!1,null,null,null),le=oe.exports;$()(oe,"components",{QBtn:j["a"],QTooltip:S["a"],QSplitter:ne["a"],QTabs:re["a"],QTab:ae["a"],QTabPanels:se["a"],QTabPanel:ie["a"]});var ce=n("39e6"),ue={name:"AdminPanel",components:{UsersManagement:W,TermsManagement:le},data:function(){return{splitterModel:20,tab:"users",companies:{},formsKeys:["en","fr","it"]}},created:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["e"])();case 2:return n=t.sent,n||e.$router.push({name:"home"}),t.next=6,e.setupCompanies();case 6:case"end":return t.stop()}}),t)})))()},methods:{setupCompanies:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.formsKeys.map(function(){var t=i()(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(ce["b"])(n);case 2:e.companies[n]=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},saveCompanies:function(e){for(var t in e)Object(ce["c"])(e[t],t)}}},pe=ue,de=n("9989"),me=Object(q["a"])(pe,r,a,!1,null,null,null);t["default"]=me.exports;$()(me,"components",{QPage:de["a"],QSplitter:ne["a"],QTabs:re["a"],QTab:ae["a"],QTabPanels:se["a"],QTabPanel:ie["a"]})}}]);