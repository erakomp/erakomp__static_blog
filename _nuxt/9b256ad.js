(window.webpackJsonp=window.webpackJsonp||[]).push([[1,8,13],{290:function(t,e,n){"use strict";var o=n(28),r=n(22),l=n(118),c=n(36),d=n(29),h=n(59),m=n(216),f=n(100),v=n(24),_=n(102),x=n(101).f,w=n(58).f,C=n(35).f,k=n(304).trim,y="Number",$=r.Number,S=$.prototype,I=h(_(S))==y,N=function(t){var e,n,o,r,l,c,d,code,h=f(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=k(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(c=(l=h.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>r)return NaN;return parseInt(l,o)}return+h};if(l(y,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var E,P=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof P&&(I?v((function(){S.valueOf.call(n)})):h(n)!=y)?m(new $(N(e)),n,P):N(e)},T=o?x($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;T.length>L;L++)d($,E=T[L])&&!d(P,E)&&C(P,E,w($,E));P.prototype=S,S.constructor=P,c(r,y,P)}},291:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("89d08734",content,!0,{sourceMap:!1})},300:function(t,e,n){"use strict";n.r(e);var o={fetch:function(){this.fetchPostComment();var t=parseInt(this.$route.params.id);this.form.news_id=t},fetchOnServer:!1,data:function(){return{comments:[],form:{new_id:null,title:"",flag:"comment"}}},methods:{fetchPostComment:function(){var t=this,e=parseInt(this.$route.params.id);this.$axios.$post("/commentList",{news_id:e,limit:100}).then((function(e){t.comments=e.data}))},addLike:function(){var t=this,data={news_id:parseInt(this.$route.params.id),type:"like"};this.$axios.$post("/addNewsStatistic",data).then((function(e){e.status&&t.$fetch()}))}}},r=n(40),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"border-radius":"20px","margin-top":"-5%"}},[n("div",{staticClass:"card-body"},[t.$auth.loggedIn?n("div",{staticClass:"comment-form row mb-3"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-danger float-right",on:{click:t.addLike}},[n("i",{staticClass:"fas fa-heart"})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);var o={fetch:function(){this.fetchPostComment();var t=parseInt(this.$route.params.id);this.form.news_id=t},fetchOnServer:!1,data:function(){return{comments:[],form:{new_id:null,title:"",flag:"comment"}}},methods:{fetchPostComment:function(){var t=this,e=parseInt(this.$route.params.id);this.$axios.$post("/commentList",{news_id:e,limit:100}).then((function(e){t.comments=e.data}))},addComment:function(){var t=this,data=this.form;this.$axios.$post("/addComment",data).then((function(e){e.status&&(t.form.title="",t.$fetch())}))}}},r=n(40),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card shadow",staticStyle:{"border-radius":"20px","margin-top":"-10%","margin-bottom":"5%"}},[n("div",{staticClass:"card-body"},[n("h1",{staticClass:"mb-4"},[t._v("\n      Give us your opinion?\n    ")]),t._v(" "),t.$auth.loggedIn?n("div",{staticClass:"comment-form row mb-3"},[n("div",{staticClass:"col-md-12 mb-2 float-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Leave a comment?"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btnn float-right",on:{click:t.addComment}},[n("b",[t._v("\n            Comment")])])])]):t._e(),t._v(" "),t.comments?n("div",t._l(t.comments,(function(e){return n("div",{key:e.comment_id,staticClass:"col-sm-5 col-md-12 col-12 mb-2 p-3",staticStyle:{border:"1px solid #d3d3d3","border-radius":"10px"}},[n("img",{staticClass:"card-img-top",attrs:{src:"https://cdn.erakomp.co.id/eraoffice/comment/"+e.sales_image,alt:""}}),n("b",[t._v(" "+t._s(e.sales_name)+" ")]),t._v(" - "+t._s(e.title)+"\n        "),n("br"),t._v("\n        "+t._s(e.date_created)+"\n      ")])})),0):n("div",[n("p",[t._v("No comment")])])])])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,n){var o=n(38),r="["+n(305)+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},305:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},306:function(t,e,n){"use strict";n(291)},307:function(t,e,n){var o=n(69)(!1);o.push([t.i,'.share-button *[data-v-734808e0]{-webkit-box-sizing:border-box;box-sizing:border-box}.share-button[data-v-734808e0]{display:inline-block;min-width:42px;min-height:42px;padding:10px 8px;margin:4px;color:#fff;background-color:#1ca0f2;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-weight:400;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;text-rendering:auto;text-indent:0;text-align:center;letter-spacing:normal;word-spacing:normal;text-shadow:none;-webkit-transition:color .3s ease-in-out,background-color .3s ease-in-out,border-color .3s ease-in-out;transition:color .3s ease-in-out,background-color .3s ease-in-out,border-color .3s ease-in-out}.share-button[data-v-734808e0]:disabled{opacity:.9}.share-button[data-v-734808e0]:focus{outline:none;-webkit-box-shadow:0 0 0 3px rgba(153,210,245,.4);box-shadow:0 0 0 3px rgba(153,210,245,.4)}.share-button[data-v-734808e0]:hover{background-color:rgba(28,160,242,.9)}.share-button[data-v-734808e0]:not(:disabled):not(.disabled){cursor:pointer}.share-button[data-v-734808e0]:last-child{margin-right:0}.share-button__icon[data-v-734808e0]{display:inline-block;padding:0;margin:0 7px;font-size:0;vertical-align:middle}.share-button__icon path[data-v-734808e0]{fill:#fff}.share-button__icon[data-v-734808e0]:last-child{margin:0}.share-button__text[data-v-734808e0]{display:inline-block;margin:0 7px;font-size:16px;vertical-align:middle}.share-button__counter[data-v-734808e0]{display:inline-block;padding:3px 10px;margin-left:4px;font-size:12px;border-left:1px solid #fff;vertical-align:middle}.share-button--circle[data-v-734808e0]{min-width:42px;min-height:42px;padding:10px;border-radius:42px}.share-button--outline[data-v-734808e0]{background-color:transparent;border:1px solid #1ca0f2}.share-button--outline .share-button__text[data-v-734808e0]{color:#1ca0f2}.share-button--outline .share-button__icon path[data-v-734808e0]{fill:#1ca0f2}.share-button--outline .share-button__counter[data-v-734808e0]{color:rgba(28,160,242,.9);border-color:rgba(28,160,242,.9)}.share-button--outline[data-v-734808e0]:hover{background-color:transparent;border-color:rgba(28,160,242,.9)}.share-button--outline:hover .share-button__text[data-v-734808e0]{color:#1ca0f2}.share-button--outline:hover .share-button__icon path[data-v-734808e0]{fill:rgba(28,160,242,.9)}.share-button--painted[data-v-734808e0]{position:relative;min-width:42px;min-height:42px;padding:15px;margin-bottom:30px;border-radius:42px;background-color:transparent;border:3px solid #2581b6}.share-button--painted[data-v-734808e0]:before{content:"";z-index:-1;position:absolute;top:-1.5px;left:-1.5px;display:block;width:calc(100% + 3px);height:calc(100% + 3px);background-color:#1ca0f2;border-radius:50%;-webkit-transform:translate3d(3px,2px,0);transform:translate3d(3px,2px,0);-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.share-button--painted .share-button__icon[data-v-734808e0]{width:30px;height:30px;margin:0}.share-button--painted .share-button__text[data-v-734808e0]{display:none}.share-button--painted .share-button__counter[data-v-734808e0]{position:absolute;bottom:-30px;right:-7px;margin:0;padding:4px 10px;font-size:8px;border-radius:15px;color:#fff;border:3px solid #2581b6}.share-button--painted .share-button__counter[data-v-734808e0]:before{content:"";z-index:-1;position:absolute;top:-1.65px;left:-1.5px;display:block;width:calc(100% + 3px);height:calc(100% + 3px);border-radius:15px;-webkit-transform:translate3d(-3px,1.5px,0);transform:translate3d(-3px,1.5px,0);-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out;background-color:#1ca0f2}.share-button--painted:focus .share-button__counter[data-v-734808e0]:before,.share-button--painted[data-v-734808e0]:focus:before,.share-button--painted:hover .share-button__counter[data-v-734808e0]:before,.share-button--painted[data-v-734808e0]:hover:before{-webkit-transform:translateZ(0);transform:translateZ(0)}@media (max-width:768px){.share-button[data-v-734808e0]{min-width:38px;min-height:38px;padding:8px;margin:2px}.share-button__icon[data-v-734808e0]{width:18px;height:18px;margin:0 4px}.share-button__text[data-v-734808e0]{margin:0 4px;font-size:14px}.share-button--circle[data-v-734808e0]{border-radius:38px}.share-button--painted[data-v-734808e0]{min-width:48px;min-height:48px;margin:4px 4px 20px}.share-button--painted[data-v-734808e0]:before{-webkit-transform:translate3d(2.5px,1.5px,0);transform:translate3d(2.5px,1.5px,0)}.share-button--painted .share-button__icon[data-v-734808e0]{width:20px;height:20px}.share-button--painted .share-button__counter[data-v-734808e0]{bottom:-24px;right:-8px;padding:2px 7px}.share-button--painted .share-button__counter[data-v-734808e0]:before{-webkit-transform:translate3d(-2px,1.75px,0);transform:translate3d(-2px,1.75px,0)}}',""]),t.exports=o},310:function(t,e,n){"use strict";n.r(e);n(47),n(68),n(76),n(154),n(84);var o=n(303),r=n(311),l=(n(290),{props:{iconName:{type:String},viewBoxWidth:{type:[Number,String],default:24},viewBoxHeight:{type:[Number,String],default:24},width:{type:[Number,String],default:20},height:{type:[Number,String],default:20}}}),c=n(40),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 "+t.viewBoxWidth+" "+t.viewBoxHeight,"aria-labelledby":t.iconName,role:"presentation"}},[n("title",{attrs:{lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports;var h={name:"TwitterShareButton",components:{Icon:d},props:{url:{type:String,default:()=>document.location.href},description:{type:String,default:()=>document.title},btnText:{type:String,default:"Twitter"},modalWidth:{type:Number,default:500},modalHeight:{type:Number,default:500},hasIcon:{type:Boolean,default:!0},isBlank:{type:Boolean,default:!0}},methods:{openShareWindow:function(){((t,e="",option={})=>{t.$emit(e,option)})(this,"onShare",{name:"Twitter"});var t=((t=500,e=500,n="")=>`width=${t},height=${e},left=${screen.width/2-t/2},top=${screen.height/2-e/2},${n}`)(this.$props.modalWidth,this.$props.modalHeight),e="https://twitter.com/share?url=".concat(encodeURIComponent(this.$props.url),"&text=").concat(encodeURIComponent(this.$props.description));return this.$props.isBlank?window.open(e,"_blank"):window.open(e,"Share this",t)}}},m=(n(306),{components:{TwitterButton:Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"share-button share-button--twitter",attrs:{type:"button",url:t.url,description:t.description,btnText:t.btnText,modalWidth:t.modalWidth,modalHeight:t.modalHeight,hasIcon:t.hasIcon,isBlank:t.isBlank},on:{click:t.openShareWindow}},[!0===t.hasIcon?n("icon",{staticClass:"share-button__icon",attrs:{iconName:"Twitter"}},[n("path",{attrs:{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"}})]):t._e(),t._v(" "),t.btnText?n("span",{staticClass:"share-button__text"},[t._v(t._s(t.btnText))]):t._e()],1)}),[],!1,null,"734808e0",null).exports},filters:{formatDate:function(t){return t&&Object(o.a)(new Date(t))?Object(r.a)(new Date(t),"ccc Y-MM-dd"):""}},fetch:function(){this.fetchPostList(),this.fetchPostList2(),this.fetchPostDetail(),this.fecthStatistics(),this.fetchPopularList(),this.fetchCategoryList(),this.fetchCategories()},fetchOnServer:!1,data:function(){return{posts:[],like:{},postDetail:{},format:r.a,lists:[],cats:[],categoris:[]}},computed:{postImage:function(){return"https://cdn.erakomp.co.id/eraoffice/news/".concat(this.postDetail.image)},userPhoto:function(){return"https://cdn.erakomp.co.id/eraoffice/users/".concat(this.postDetail.user_photo,"?x-oss-process=image/resize,h_200")},splittedPostContent:function(){return(this.postDetail.description||"").split("\n")}},methods:{fetchPostList:function(){var t=this;this.$axios.$post("/newsList",{limit:10}).then((function(e){t.posts=e.data}))},fetchPostList2:function(){var t=this;this.$axios.$post("/newsList",{limit:10}).then((function(e){t.postie=e.data}))},getResizedImage:function(t){return"https://cdn.erakomp.co.id/eraoffice/news/".concat(t,"?").concat("x-oss-process=image/resize,m_fill,h_250,w_250")},fetchPostDetail:function(){var t=this,e=parseInt(this.$route.params.id);this.$axios.$post("/newsSingle",{news_id:e}).then((function(e){t.postDetail=e.data}))},fetchPopularList:function(){var t=this;this.$axios.$post("/newsList",{limit:10,sort_by:"like"}).then((function(e){t.lists=e.data}))},fetchCategoryList:function(){var t=this;this.$axios.$post("newsList",{limit:3}).then((function(e){t.cats=e.data}))},fetchCategories:function(){var t=this;this.$axios.$get("/newsCategory",{limit:10}).then((function(e){t.categoris=e.data}))},fecthStatistics:function(){var t=this,data={news_id:parseInt(this.$route.params.id)};this.$axios.$post("/getNewsStatistic",data).then((function(e){e.status&&(t.like=e.data[0])}))}}}),f=Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3l-searchblock w3l-homeblock1 py-5"},[n("div",{staticClass:"container py-lg-4 py-md-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 most-recent mr-0"},[n("h3",{staticClass:"section-title-left"},[t._v("\n          Articles\n        ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-11 item"},[n("div",{staticClass:"card"},[n("div",{staticClass:"container mb-5"},[t.$fetchState.pending?t._e():n("div",[n("div",{staticClass:"card-header p-0 position-relative"},[n("a",{attrs:{href:"#blog-single"}},[n("img",{staticClass:"card-img-bottom d-block radius-image shadow",attrs:{src:t.postImage,alt:"Card image cap"}})])]),t._v(" "),n("div",{staticClass:"card-body p-0 blog-details mb-3"},[n("a",{staticClass:"blog-desc",attrs:{href:"#blog-single"}},[t._v(t._s(t.postDetail.title)+"\n                    ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-1"},[n("img",{staticClass:"img-fluid shadow",staticStyle:{"border-radius":"10px"},attrs:{src:t.userPhoto,alt:""}})]),t._v(" "),n("div",{staticClass:"col mt-0",staticStyle:{"margin-bottom":"5%"}},[t._v("\n                        Created By: "),n("b",[t._v(t._s(t.postDetail.user_name))]),n("br"),t._v("\n                        Created At : "),n("b",[t._v(t._s(t._f("formatDate")(t.postDetail.date_created))),n("br"),t._v(" "),n("span",{staticClass:"text-danger"},[n("i",{staticClass:"fa fa-heart"}),t._v(" "+t._s(t.like.value))])]),t._v(" "),n("br"),t._v(" "),n("twitter-button",{attrs:{"is-blank":!0,"btn-text":""}})],1)]),t._v(" "),t._l(t.splittedPostContent,(function(content,e){return n("p",{key:e,staticStyle:{"font-size":"17px"}},[t._v("\n                      "+t._s(content)+"\n                    ")])}))],2),t._v(" "),n("h3",{staticClass:"section-title-left"},[t._v("\n                    Comments\n                  ")])]),t._v(" "),n("PostLike")],1),t._v(" "),n("PostComment")],1)])])]),t._v(" "),n("div",{staticClass:"col-lg-4 trending mt-lg-0 mt-5 "},[n("h3",{staticClass:"section-title-left"},[t._v("\n          Hot Trending\n        ")]),t._v(" "),t.$fetchState.pending?t._e():n("div",t._l(t.lists,(function(e){return n("div",{key:e.news_id,staticClass:" "},[n("div",{staticClass:"grids5-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[n("b-card",{attrs:{"img-src":t.getResizedImage(e.image),alt:"Card image cap","img-height":"50"}})],1),t._v(" "),n("div",{staticClass:"blog-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"author align-items-center mt-2 mb-1",staticStyle:{"font-size":"14px"}},[n("i",[n("a",{attrs:{href:"#author"}},[t._v("By "+t._s(e.user_name))])])]),t._v(" "),n("ul",{staticClass:"blog-meta"},[n("li",{staticClass:"meta-item blog-lesson"},[n("span",{staticClass:"meta-value"},[t._v(" "+t._s(t._f("formatDate")(e.date_created))+" ")])])])],1)],1)])})),0),t._v(" "),n("h3",{staticClass:"section-title-left"},[t._v("\n          #TechTrends\n        ")]),t._v(" "),t.$fetchState.pending?t._e():n("div",t._l(t.posts,(function(e){return n("div",{key:e.news_id,staticClass:" "},["IT"===e.category?n("div",{staticClass:"grids5-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[n("b-card",{attrs:{"img-src":t.getResizedImage(e.image),alt:"Card image cap","img-height":"50"}})],1),t._v(" "),n("div",{staticClass:"blog-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"author align-items-center mt-2 mb-1",staticStyle:{"font-size":"14px"}},[n("i",[n("a",{attrs:{href:"#author"}},[t._v("By "+t._s(e.user_name))])])]),t._v(" "),n("ul",{staticClass:"blog-meta"},[n("li",{staticClass:"meta-item blog-lesson"},[n("span",{staticClass:"meta-value"},[t._v(" "+t._s(e.date_created)+" ")])])])],1)],1):t._e()])})),0),t._v(" "),n("h3",{staticClass:"section-title-left"},[t._v("\n          #HelloWorld\n        ")]),t._v(" "),t.$fetchState.pending?t._e():n("div",t._l(t.cats,(function(e){return n("div",{key:e.news_id,staticClass:" "},["Other"===e.category?n("div",{staticClass:"grids5-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[n("b-card",{attrs:{"img-src":t.getResizedImage(e.image),alt:"Card image cap","img-height":"50"}})],1),t._v(" "),n("div",{staticClass:"blog-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"author align-items-center mt-2 mb-1",staticStyle:{"font-size":"14px"}},[n("i",[n("a",{attrs:{href:"#author"}},[t._v("By "+t._s(e.user_name))])])]),t._v(" "),n("ul",{staticClass:"blog-meta"},[n("li",{staticClass:"meta-item blog-lesson"},[n("span",{staticClass:"meta-value"},[t._v(" "+t._s(e.date_created)+" ")])])])],1)],1):t._e()])})),0),t._v(" "),n("h3",{staticClass:"section-title-left "},[t._v("\n          Categories\n        ")]),t._v(" "),n("div",{staticClass:"mb-3",staticStyle:{"margin-top":"-7%"}},[n("router-link",{attrs:{to:"/posts/category"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#IT")])]),t._v(" "),n("router-link",{attrs:{to:"/posts/finance"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#Finance")])]),t._v(" "),n("router-link",{attrs:{to:"/posts/category"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#HRD")])]),t._v(" "),n("router-link",{attrs:{to:"/posts/category"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#Sales")])]),t._v(" "),n("router-link",{attrs:{to:"/posts/other"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#Other")])])],1),t._v(" "),n("h3",{staticClass:"section-title-left "},[t._v("\n          Today's Weather\n        ")]),t._v(" "),t.$fetchState.pending?t._e():n("div",[t._l(t.posts,(function(t){return n("div",{key:t.news_id,staticClass:" "})})),t._v(" "),n("img",{attrs:{src:"https://www.theweather.com/wimages/foto03eeb73cd4bd5b2b1648aa27ad24ed9d.png"}})],2),t._v(" "),n("h3",{staticClass:"section-title-left mt-4"},[t._v("\n          Shop To Our Website\n        ")]),t._v(" "),n("a",{staticClass:"btnn b-2",attrs:{href:"https://erakomp.co.id/"}},[t._v("\n          Erakomp.co.id\n        ")]),t._v(" "),n("h3",{staticClass:"section-title-left mt-4"},[t._v("\n          Visit Our Website\n        ")]),t._v(" "),n("a",{staticClass:"btnn b-2",attrs:{href:"https://erakomp.com/"}},[t._v("\n          Erakomp.com\n        ")])])])])])}),[],!1,null,null,null);e.default=f.exports;installComponents(f,{PostLike:n(300).default,PostComment:n(301).default})}}]);