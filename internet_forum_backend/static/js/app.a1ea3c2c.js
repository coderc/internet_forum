(function(t){function s(s){for(var n,a,r=s[0],c=s[1],l=s[2],m=0,p=[];m<r.length;m++)a=r[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(s);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],n=!0,r=1;r<e.length;r++){var c=e[r];0!==o[c]&&(n=!1)}n&&(i.splice(s--,1),t=a(a.s=e[0]))}return t}var n={},o={app:0},i=[];function a(s){if(n[s])return n[s].exports;var e=n[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=n,a.d=function(t,s,e){a.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,s){if(1&s&&(t=a(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)a.d(e,n,function(s){return t[s]}.bind(null,n));return e},a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},1231:function(t,s,e){"use strict";var n=e("bcfb"),o=e.n(n);o.a},"12be":function(t,s,e){"use strict";var n=e("e4c4"),o=e.n(n);o.a},"1d76":function(t,s,e){"use strict";var n=e("2734"),o=e.n(n);o.a},"22ad":function(t,s,e){},2395:function(t,s,e){},2695:function(t,s,e){"use strict";var n=e("69ef"),o=e.n(n);o.a},2734:function(t,s,e){},3137:function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"page"},[e("HeadBar"),e("router-view")],1)])},i=[],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header"},[e("span",{staticClass:"logo",on:{click:t.goIndex}},[t._v("GOWEB论坛")]),t._m(0),e("div",{staticClass:"btns"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}]},[e("a",{staticClass:"login-btn",on:{click:t.goLogin}},[t._v("登录")]),e("a",{staticClass:"login-btn",on:{click:t.goSignUp}},[t._v("注册")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"user-box"},[e("span",{staticClass:"user"},[t._v(t._s(t.currUsername))]),e("div",{staticClass:"dropdown-content"},[e("a",{on:{click:t.goLogout}},[t._v("登出")])])])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search"},[e("label",{staticClass:"s-logo"}),e("input",{staticClass:"s-input",attrs:{type:"text",placeholder:"搜索"}})])}],c={name:"HeadBar",created:function(){this.$store.commit("init")},computed:{isLogin:function(){return this.$store.getters.isLogin},currUsername:function(){return console.log(this.$store.getters.username),this.$store.getters.username}},methods:{goIndex:function(){this.$router.push({name:"Home"})},goLogin:function(){this.$router.push({name:"Login"})},goSignUp:function(){this.$router.push({name:"SignUp"})},goLogout:function(){this.$store.commit("logout")}}},l=c,u=(e("1231"),e("2877")),m=Object(u["a"])(l,a,r,!1,null,"28321300",null),p=m.exports,d={components:{HeadBar:p}},f=d,v=(e("7c55"),Object(u["a"])(f,o,i,!1,null,null,null)),g=v.exports,h=e("8c4f"),C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"c-l-header"},[e("div",{staticClass:"new btn-iconfont",class:{active:t.timeOrder},on:{click:function(s){return t.selectOrder("time")}}},[e("i",{staticClass:"iconfont icon-polygonred"}),t._v("New ")]),e("div",{staticClass:"top btn-iconfont",class:{active:t.scoreOrder},on:{click:function(s){return t.selectOrder("score")}}},[e("i",{staticClass:"iconfont icon-top"}),t._v("Score ")]),e("button",{staticClass:"btn-publish",on:{click:t.goPublish}},[t._v("发表")])]),e("ul",{staticClass:"c-l-list"},t._l(t.postList,(function(s){return e("li",{key:s.id,staticClass:"c-l-item"},[e("div",{staticClass:"post"},[e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-up",on:{click:function(e){return t.vote(s.id,"1")}}})]),e("span",{staticClass:"text"},[t._v(t._s(s.vote_num))]),e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-down",on:{click:function(e){return t.vote(s.id,"-1")}}})])]),e("div",{staticClass:"l-container",on:{click:function(e){return t.goDetail(s.id)}}},[e("h4",{staticClass:"con-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"con-memo"},[e("p",[t._v(t._s(s.content))])]),e("div",{staticClass:"user-btn"},[e("span",{staticClass:"btn-item"},[e("i",{staticClass:"iconfont icon-comment"}),e("span",[t._v(t._s(s.comments)+" comments")])])])])])})),0)])])},_=[],b={name:"Home",components:{},data:function(){return{order:"time",page:1,postList:[]}},methods:{selectOrder:function(t){this.order=t,this.getPostList()},goPublish:function(){this.$router.push({name:"Publish"})},goDetail:function(t){this.$router.push({name:"Content",params:{id:t}})},getPostList:function(){var t=this;this.$axios({method:"get",url:"/posts2",params:{page:this.page,order:this.order}}).then((function(s){console.log(s.data,222),1e3==s.code?t.postList=s.data:console.log(s.msg)})).catch((function(t){console.log(t)}))},vote:function(t,s){this.$axios({method:"post",url:"/vote",data:JSON.stringify({post_id:t,direction:s})}).then((function(t){1e3==t.code?console.log("vote success"):console.log(t.msg)})).catch((function(t){console.log(t)}))}},mounted:function(){this.getPostList()},computed:{timeOrder:function(){return"time"==this.order},scoreOrder:function(){return"score"==this.order}}},w=b,y=(e("2695"),Object(u["a"])(w,C,_,!1,null,"fd5af65c",null)),x=y.exports,$=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"l-container"},[e("h4",{staticClass:"con-title"},[t._v(t._s(t.post.title))]),e("div",{staticClass:"con-info"},[t._v(t._s(t.post.content))]),t._m(1)])])])])},L=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post"},[e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-up"})]),e("span",{staticClass:"text"},[t._v("50.2k")]),e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-down"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-btn"},[e("span",{staticClass:"btn-item"},[e("i",{staticClass:"iconfont icon-comment"}),t._v("comment ")])])}],O={name:"Content",data:function(){return{post:{}}},methods:{getPostDetail:function(){var t=this;this.$axios({method:"get",url:"/post/"+this.$route.params.id}).then((function(s){console.log(1,s.data),1e3==s.code?t.post=s.data:console.log(s.msg)})).catch((function(t){console.log(t)}))}},mounted:function(){this.getPostDetail()}},P=O,k=(e("1d76"),Object(u["a"])(P,$,L,!1,null,"5e8e461a",null)),S=k.exports,N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"post-name"},[t._v("我好想写点什么")]),e("div",{staticClass:"post-type"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectCommunity.name,expression:"selectCommunity.name"}],staticClass:"post-type-value",attrs:{type:"text",placeholder:"选择一个频道"},domProps:{value:t.selectCommunity.name},on:{click:function(s){return t.showCommunity()},input:function(s){s.target.composing||t.$set(t.selectCommunity,"name",s.target.value)}}}),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.showCommunityList,expression:"showCommunityList"}],staticClass:"post-type-options"},t._l(t.communityList,(function(s,n){return e("li",{key:s.id,staticClass:"post-type-cell",on:{click:function(s){return t.selected(n)}}},[t._v(" "+t._s(s.name)+" ")])})),0),e("i",{staticClass:"p-icon"})]),e("div",{staticClass:"post-content"},[t._m(0),e("div",{staticClass:"post-sub-container"},[e("div",{staticClass:"post-sub-header"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"post-title",attrs:{id:"",cols:"30",rows:"10",placeholder:"标题"},domProps:{value:t.title},on:{input:function(s){s.target.composing||(t.title=s.target.value)}}}),e("span",{staticClass:"textarea-num"},[t._v("0/300")])]),e("div",{staticClass:"post-text-con"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"post-content-t",attrs:{id:"",cols:"30",rows:"10",placeholder:"内容"},domProps:{value:t.content},on:{input:function(s){s.target.composing||(t.content=s.target.value)}}})])]),e("div",{staticClass:"post-footer"},[e("div",{staticClass:"btns"},[e("button",{staticClass:"btn"},[t._v("取消")]),e("button",{staticClass:"btn",on:{click:function(s){return t.submit()}}},[t._v("发表")])])])])]),t._m(1)])},j=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"cat"},[e("li",{staticClass:"cat-item active"},[e("i",{staticClass:"iconfont icon-edit"}),t._v("post ")]),e("li",{staticClass:"cat-item"},[e("i",{staticClass:"iconfont icon-image"}),t._v("image/video ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"right"},[e("div",{staticClass:"post-rank"},[e("h5",{staticClass:"p-r-title"},[e("i",{staticClass:"p-r-icon"}),t._v("发帖规范 ")]),e("ul",{staticClass:"p-r-content"},[e("li",{staticClass:"p-r-item"},[t._v("1.网络不是法外之地")]),e("li",{staticClass:"p-r-item"},[t._v("2.网络不是法外之地")]),e("li",{staticClass:"p-r-item"},[t._v("3.网络不是法外之地")])])])])}],R={name:"Publish",data:function(){return{title:"",content:"",showCommunityList:!1,selectCommunity:{},communityList:[]}},methods:{submit:function(){var t=this;this.$axios({method:"post",url:"/post",data:JSON.stringify({title:this.title,content:this.content,community_id:this.selectCommunity.id})}).then((function(s){console.log(s.data),1e3==s.code?t.$router.push({path:t.redirect||"/"}):console.log(s.msg)})).catch((function(t){console.log(t)}))},getCommunityList:function(){var t=this;this.$axios({method:"get",url:"/community"}).then((function(s){console.log(s.data),1e3==s.code?t.communityList=s.data:console.log(s.msg)})).catch((function(t){console.log(t)}))},showCommunity:function(){this.showCommunityList=!this.showCommunityList},selected:function(t){this.selectCommunity=this.communityList[t],this.showCommunityList=!1,console.log(this.selectCommunity)}},mounted:function(){this.getCommunityList()}},E=R,I=(e("12be"),Object(u["a"])(E,N,j,!1,null,"6620057e",null)),J=I.exports,U=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"form-title"},[t._v("登录")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("用户名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"pass"}},[t._v("密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"pass",id:"pass",placeholder:"密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),e("div",{staticClass:"form-btn"},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.submit}},[t._v("提交")])])])])},H=[],B={name:"Login",data:function(){return{username:"",password:"",submitted:!1}},computed:{},created:function(){},methods:{submit:function(){var t=this;this.$axios({method:"post",url:"/login",data:JSON.stringify({username:this.username,password:this.password})}).then((function(s){console.log(s.data),1e3==s.code?(localStorage.setItem("loginResult",JSON.stringify(s.data)),t.$store.commit("login",s.data),t.$router.push({path:t.redirect||"/"})):console.log(s.msg)})).catch((function(t){console.log(t)}))}}},D=B,M=(e("b103"),Object(u["a"])(D,U,H,!1,null,"18c22d5f",null)),T=M.exports,q=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"form-title"},[t._v("注册")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("用户名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"pass"}},[t._v("密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"pass",id:"pass",placeholder:"密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"re_pass"}},[t._v("确认密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.re_password,expression:"re_password"}],staticClass:"form-control",attrs:{type:"password",name:"re_pass",id:"re_pass",placeholder:"确认密码"},domProps:{value:t.re_password},on:{input:function(s){s.target.composing||(t.re_password=s.target.value)}}})]),e("div",{staticClass:"form-btn"},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.submit}},[t._v("提交")])])])])},A=[],z={name:"SignUp",data:function(){return{username:"",password:"",re_password:"",submitted:!1}},computed:{},created:function(){},methods:{submit:function(){var t=this;this.$axios({method:"post",url:"/signup",data:JSON.stringify({username:this.username,password:this.password,re_password:this.re_password})}).then((function(s){console.log(s.data),1e3==s.code?(console.log("signup success"),t.$router.push({name:"Login"})):console.log(s.msg)})).catch((function(t){console.log(t)}))}}},G=z,W=(e("99b3"),Object(u["a"])(G,q,A,!1,null,"43662fcc",null)),F=W.exports,K=h["a"].prototype.push;h["a"].prototype.push=function(t){return K.call(this,t).catch((function(t){return t}))},n["a"].use(h["a"]);var Q=[{path:"/",name:"Home",component:x},{path:"/post/:id",name:"Content",component:S},{path:"/publish",name:"Publish",component:J,meta:{requireAuth:!0}},{path:"/login",name:"Login",component:T},{path:"/signup",name:"SignUp",component:F}],V=new h["a"]({mode:"history",base:"/",routes:Q}),X=V,Y=e("2f62");n["a"].use(Y["a"]);var Z={token:null,user_id:null,user_name:null},tt=new Y["a"].Store({state:{isLogin:!1,loginResult:Z},mutations:{init:function(t){var s=JSON.parse(localStorage.getItem("loginResult"));console.log(localStorage.getItem("loginResult")),null!=s&&(t.loginResult=s)},login:function(t,s){t.loginResult=s},logout:function(t){localStorage.removeItem("loginResult"),t.loginResult=Z}},actions:{},getters:{isLogin:function(t){return null!==t.loginResult.user_id},userID:function(t){return t.loginResult.user_id},username:function(t){return t.loginResult.user_name},accessToken:function(t){return t.loginResult.token}}}),st=(e("d3b7"),e("bc3a")),et=e.n(st);et.a.defaults.baseURL="/api/v1/",et.a.interceptors.request.use((function(t){var s=JSON.parse(localStorage.getItem("loginResult"));if(s){var e=s.access_token;t.headers.Authorization="Bearer ".concat(e)}return t}),(function(t){return Promise.reject(t)})),et.a.interceptors.response.use((function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t.data)}),(function(t){console.log("error",t)}));var nt=et.a;n["a"].prototype.$axios=nt,n["a"].config.productionTip=!1,X.beforeEach((function(t,s,e){console.log(t),console.log(s),t.meta.requireAuth?localStorage.getItem("loginResult")||"/login"===t.path?e():e({path:"/login"}):e(),"/login"==t.fullPath&&(localStorage.getItem("loginResult")?e({path:s.fullPath}):e())})),new n["a"]({router:X,store:tt,render:function(t){return t(g)}}).$mount("#app")},"69ef":function(t,s,e){},"7c55":function(t,s,e){"use strict";var n=e("2395"),o=e.n(n);o.a},"99b3":function(t,s,e){"use strict";var n=e("3137"),o=e.n(n);o.a},b103:function(t,s,e){"use strict";var n=e("22ad"),o=e.n(n);o.a},bcfb:function(t,s,e){},e4c4:function(t,s,e){}});
//# sourceMappingURL=app.a1ea3c2c.js.map