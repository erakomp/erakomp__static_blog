(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{297:function(t,e,n){"use strict";n.r(e);n(84);var r={fetch:function(){this.fetchPostList(),this.fetchPopular(),this.fetchPopularList(),this.fetchCategoryList(),this.fetchCategories()},fetchOnServer:!1,data:function(){return{posts:[],posties:[],lists:[],cats:[],categoris:[]}},methods:{fetchPostList:function(){var t=this;this.$axios.$post("/newsList",{limit:10}).then((function(e){t.posts=e.data}))},fetchPopular:function(){var t=this;this.$axios.$post("/newsList",{limit:1,sort_by:"like"}).then((function(e){t.posties=e.data}))},fetchPopularList:function(){var t=this;this.$axios.$post("/newsList",{limit:10,sort_by:"like"}).then((function(e){t.lists=e.data}))},fetchCategoryList:function(){var t=this;this.$axios.$post("/newsList",{limit:3}).then((function(e){t.cats=e.data}))},fetchCategories:function(){var t=this;this.$axios.$get("/newsCategory",{limit:10}).then((function(e){t.categoris=e.data}))},getResizedImage:function(t){return"https://cdn.erakomp.co.id/eraoffice/news/".concat(t,"?").concat("x-oss-process=image/resize,m_fill,h_250,w_250")}}},o=n(40),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3l-searchblock w3l-homeblock1 py-5"},[n("div",{staticClass:"container py-lg-4 py-md-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-7 most-recent mr-4"},[n("h3",{staticClass:"section-title-left"},[t._v("\n          HRD\n        ")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.posts,(function(e){return n("div",{key:e.news_id,staticClass:" mb-2 "},["HRD"===e.category?n("div",{staticClass:"tm-timeline-item-inner"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[n("img",{staticClass:"tm-img-timeline",staticStyle:{"border-radius":"20px"},attrs:{src:t.getResizedImage(e.image),alt:"Image"}})]),t._v(" "),t._m(0,!0),t._v(" "),n("div",{staticClass:"tm-timeline-description-wrap"},[n("div",{staticClass:"tm-bg-dark tm-timeline-description"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[n("h3",{staticClass:"tm-text-green tm-font-400",staticStyle:{color:"#0085ad"}},[t._v("\n                      "+t._s(e.title)+"\n                    ")])]),t._v(" "),n("p",[t._v(t._s(e.description.slice(0,100))+"..")]),t._v(" "),n("p",{staticClass:"tm-text-green float-right mb-0",staticStyle:{color:"#0085ad"}},[t._v("\n                    By "+t._s(e.user_name)+", "),n("i",[t._v(t._s(e.date_created))])])],1)])],1):t._e()])})),0)]),t._v(" "),n("div",{staticClass:"col-lg-4 trending mt-lg-0 mt-5 mb-lg-5"},[n("h3",{staticClass:"section-title-left"},[t._v("\n          Hot Trending\n        ")]),t._v(" "),t.$fetchState.pending?t._e():n("div",t._l(t.lists,(function(e){return n("div",{key:e.news_id,staticClass:" "},[n("div",{staticClass:"grids5-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[n("b-card",{attrs:{"img-src":t.getResizedImage(e.image),alt:"Card image cap","img-height":"50"}})],1),t._v(" "),n("div",{staticClass:"blog-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"author align-items-center mt-2 mb-1",staticStyle:{"font-size":"14px"}},[n("i",[n("a",{attrs:{href:"#author"}},[t._v("By "+t._s(e.user_name))])])]),t._v(" "),n("ul",{staticClass:"blog-meta"},[n("li",{staticClass:"meta-item blog-lesson"},[n("span",{staticClass:"meta-value"},[t._v(" "+t._s(e.date_created)+" ")])])])],1)],1)])})),0),t._v(" "),n("h3",{staticClass:"section-title-left"},[t._v("\n          #TechTrends\n        ")]),t._v(" "),t.$fetchState.pending?t._e():n("div",t._l(t.posts,(function(e){return n("div",{key:e.news_id,staticClass:" "},["IT"===e.category?n("div",{staticClass:"grids5-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[n("b-card",{attrs:{"img-src":t.getResizedImage(e.image),alt:"Card image cap","img-height":"50"}})],1),t._v(" "),n("div",{staticClass:"blog-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"author align-items-center mt-2 mb-1",staticStyle:{"font-size":"14px"}},[n("i",[n("a",{attrs:{href:"#author"}},[t._v("By "+t._s(e.user_name))])])]),t._v(" "),n("ul",{staticClass:"blog-meta"},[n("li",{staticClass:"meta-item blog-lesson"},[n("span",{staticClass:"meta-value"},[t._v(" "+t._s(e.date_created)+" ")])])])],1)],1):t._e()])})),0),t._v(" "),n("h3",{staticClass:"section-title-left"},[t._v("\n          #HelloWorld\n        ")]),t._v(" "),t.$fetchState.pending?t._e():n("div",t._l(t.cats,(function(e){return n("div",{key:e.news_id,staticClass:" "},["Other"===e.category?n("div",{staticClass:"grids5-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[n("b-card",{attrs:{"img-src":t.getResizedImage(e.image),alt:"Card image cap","img-height":"50"}})],1),t._v(" "),n("div",{staticClass:"blog-info"},[n("router-link",{attrs:{to:"/posts/"+e.news_id}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"author align-items-center mt-2 mb-1",staticStyle:{"font-size":"14px"}},[n("i",[n("a",{attrs:{href:"#author"}},[t._v("By "+t._s(e.user_name))])])]),t._v(" "),n("ul",{staticClass:"blog-meta"},[n("li",{staticClass:"meta-item blog-lesson"},[n("span",{staticClass:"meta-value"},[t._v(" "+t._s(e.date_created)+" ")])])])],1)],1):t._e()])})),0),t._v(" "),n("h3",{staticClass:"section-title-left "},[t._v("\n          Categories\n        ")]),t._v(" "),n("div",{staticClass:"mb-3",staticStyle:{"margin-top":"-7%"}},[n("router-link",{attrs:{to:"/posts/category"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#IT")])]),t._v(" "),n("router-link",{attrs:{to:"/posts/finance"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#Finance")])]),t._v(" "),n("router-link",{attrs:{to:"/posts/hrd"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#HRD")])]),t._v(" "),n("router-link",{attrs:{to:"/posts/sales"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#Sales")])]),t._v(" "),n("router-link",{attrs:{to:"/posts/other"}},[n("span",{staticClass:" badge badge-primary"},[t._v("#Other")])])],1),t._v(" "),n("h3",{staticClass:"section-title-left "},[t._v("\n          Today's Weather\n        ")]),t._v(" "),t.$fetchState.pending?t._e():n("div",[t._l(t.posts,(function(t){return n("div",{key:t.news_id,staticClass:" "})})),t._v(" "),n("img",{attrs:{src:"https://www.theweather.com/wimages/foto03eeb73cd4bd5b2b1648aa27ad24ed9d.png"}})],2),t._v(" "),n("h3",{staticClass:"section-title-left mt-4"},[t._v("\n          Shop To Our Website\n        ")]),t._v(" "),n("a",{staticClass:"btnn b-2",attrs:{href:"https://erakomp.co.id/"}},[t._v("\n          Erakomp.co.id\n        ")]),t._v(" "),n("h3",{staticClass:"section-title-left mt-4"},[t._v("\n          Visit Our Website\n        ")]),t._v(" "),n("a",{staticClass:"btnn b-2",attrs:{href:"https://erakomp.com/"}},[t._v("\n          Erakomp.com\n        ")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tm-timeline-connector"},[e("p",{staticClass:"mb-0"})])}],!1,null,null,null);e.default=component.exports}}]);