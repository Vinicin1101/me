(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{334:function(t,e,r){var content=r(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("7ee5c22c",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r.r(e);r(336);var l=r(69),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("header",[e("a",{staticClass:"profile-link",attrs:{href:"profile"}},[e("img",{staticClass:"profile_pic rounded-circle",attrs:{src:"http://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=90&r=g&d=identicon",alt:"profile_picture",id:"profile_pic"}})]),t._v(" "),e("nav",{staticClass:"btns d-flex justify-content-center mb-3"},[e("ul",[e("li",{staticClass:"btn-link mr-3"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),e("li",{staticClass:"btn-link mr-3"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"projects"}},[t._v("Projetos")])])])]),t._v(" "),e("div",{staticClass:"clearfix"})])}],!1,null,"3a457ccb",null);e.default=component.exports;installComponents(component,{Header:r(335).default})},336:function(t,e,r){"use strict";r(334)},337:function(t,e,r){var l=r(61)(!1);l.push([t.i,"header[data-v-3a457ccb]{padding:10px}#profile_pic[data-v-3a457ccb]{width:50px;height:50px}.profile-link[data-v-3a457ccb]{float:left;line-height:65px}",""]),t.exports=l},338:function(t,e,r){"use strict";r.r(e);r(22);var l={name:"Profile-Header",data:function(){return{profile:{name:"Vinicius Serafim",email:"vserafim_o@outlook.com",picture:{HIGH:"http://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=512&r=g&d=identicon",LOW:"http://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=90&r=g&d=identicon"},bio:"Você vive hoje uma vida que gostaria de viver por toda a eternidade?",tags:["Aprendiz","DEV","Python","Spring","Nuxt"]},isProfileVisible:!0}},methods:{showProfile:function(){var img=document.querySelector("#profile_pic"),t=document.querySelector("#close_pic"),div=document.querySelector("div.picture.position-relative");div.classList.contains("active")?(img.setAttribute("src",this.profile.picture.LOW),div.classList.remove("active"),document.body.style.overflow="auto",t.style.display="none"):(img.setAttribute("src",this.profile.picture.HIGH),div.classList.add("active"),document.body.style.overflow="hidden",t.style.display="block",t.style.position="absolute",t.style.left="calc(50% + 120px)",t.style.top="calc(50% - 150px)",t.style.zIndex="10000")}}},o=r(69),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("header",[e("section",{staticClass:"profile d-flex flex-column align-items-center"},[e("div",{staticClass:"picture position-relative",on:{click:t.showProfile}},[e("img",{staticClass:"profile_pic rounded-circle",attrs:{src:"".concat(t.profile.picture.LOW),alt:"profile_picture",id:"profile_pic","data-toggle":"modal","data-target":"#myModal"}}),t._v(" "),e("button",{staticClass:"bx bx-x",attrs:{id:"close_pic"}})]),t._v(" "),e("label",{staticClass:"profile_name mt-3 mb-0"},[t._v(t._s(t.profile.name))]),t._v(" "),e("bio",{staticClass:"text-muted mt-2 mb-3"},[t._v(t._s(t.profile.bio))]),t._v(" "),e("nav",{staticClass:"profile_tags d-flex flex-wrap mb-3"},[e("ul",t._l(t.profile.tags,(function(r){return e("li",{key:r,staticClass:"badge badge-secondary mr-2 mb-2"},[t._v("\n          "+t._s(r)+"\n        ")])})),0)]),t._v(" "),e("nav",{staticClass:"btns d-flex justify-content-center mb-3"},[e("ul",[t._m(0),t._v(" "),e("li",{staticClass:"btn-link"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"mailto: ".concat(t.profile.email)}},[t._v("Contato")])])])])],1)])}),[function(){var t=this._self._c;return t("li",{staticClass:"btn-link mr-3"},[t("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("Home")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(335).default})}}]);