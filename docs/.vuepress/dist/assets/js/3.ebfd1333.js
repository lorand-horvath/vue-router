(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{249:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：")]),t._m(1),t._m(2),n("p",[t._v("接着上节创建的 app：")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),n("p",[t._v("提供以上案例的可运行代码请"),n("a",{attrs:{href:"https://jsfiddle.net/yyx990803/L7hscd8h/",target:"_blank",rel:"noopener noreferrer"}},[t._v("移步这里"),n("OutboundLink")],1),t._v("。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"嵌套路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由","aria-hidden":"true"}},[this._v("#")]),this._v(" 嵌套路由")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("/user/foo/profile                     /user/foo/posts\n+------------------+                  +-----------------+\n| User             |                  | User            |\n| +--------------+ |                  | +-------------+ |\n| | Profile      | |  +------------\x3e  | | Posts       | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("借助 "),s("code",[this._v("vue-router")]),this._v("，使用嵌套路由配置，就可以很简单地表达这种关系。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'<div>User {{ $route.params.id }}</div>'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/user/:id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("这里的 "),n("code",[t._v("<router-view>")]),t._v(" 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 "),n("code",[t._v("<router-view>")]),t._v("。例如，在 "),n("code",[t._v("User")]),t._v(" 组件的模板添加一个 "),n("code",[t._v("<router-view>")]),t._v("：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v('`\n    <div class="user">\n      <h2>User {{ $route.params.id }}</h2>\n      <router-view></router-view>\n    </div>\n  `')])]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("要在嵌套的出口中渲染组件，需要在 "),s("code",[this._v("VueRouter")]),this._v(" 的参数中使用 "),s("code",[this._v("children")]),this._v(" 配置：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/user/:id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token comment"}},[t._v("// 当 /user/:id/profile 匹配成功，")]),t._v("\n          "),n("span",{attrs:{class:"token comment"}},[t._v("// UserProfile 会被渲染在 User 的 <router-view> 中")]),t._v("\n          path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'profile'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UserProfile\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token comment"}},[t._v("// 当 /user/:id/posts 匹配成功")]),t._v("\n          "),n("span",{attrs:{class:"token comment"}},[t._v("// UserPosts 会被渲染在 User 的 <router-view> 中")]),t._v("\n          path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'posts'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UserPosts\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("要注意，以 "),s("code",[this._v("/")]),this._v(" 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你会发现，"),s("code",[this._v("children")]),this._v(" 配置就是像 "),s("code",[this._v("routes")]),this._v(" 配置一样的路由配置数组，所以呢，你可以嵌套多层路由。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("此时，基于上面的配置，当你访问 "),s("code",[this._v("/user/foo")]),this._v(" 时，"),s("code",[this._v("User")]),this._v(" 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/user/:id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 当 /user/:id 匹配成功，")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// UserHome 会被渲染在 User 的 <router-view> 中")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("''")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UserHome "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// ...其他子路由")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);