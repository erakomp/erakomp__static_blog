(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4],{293:function(t,e,r){"use strict";r.r(e);r(57),r(47),r(48),r(85),r(56),r(86);var n=r(44);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"LoginForm",data:function(){return{form:{username:"",password:""}}},methods:{handleLogin:function(){var t=this,data=c(c({},this.form),{},{app:"eratrack"});this.$auth.loginWith("local",{data:data}).then((function(){t.$message({message:"Login success",type:"success"})})).catch((function(e){t.$message({message:"Failed to login: ".concat(e),type:"danger"})}))}}},m=r(40),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container row mx-auto justify-content-center mt-5 mb-5"},[r("b-card",{staticClass:"col-4 shadow ",attrs:{title:""}},[r("b-card-body",[r("form",{on:{submit:function(e){return e.preventDefault(),t.handleLogin(e)}}},[r("div",{staticClass:"mb-3",staticStyle:{"font-size":"25px","font-weight":"bold","text-align":"center"}},[t._v("\n          Login Here\n        ")]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label",attrs:{for:"username"}},[t._v("Username")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{id:"username",type:"username"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group d-flex justify-content-center"},[r("button",{staticClass:"btnn btn-primary",attrs:{type:"submit"}},[t._v("\n            Login\n          ")])])])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,r){"use strict";r.r(e);var n={components:{LoginForm:r(293).default}},o=r(40),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("LoginForm")}),[],!1,null,null,null);e.default=component.exports}}]);