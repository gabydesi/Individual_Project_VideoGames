(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){e.exports={form_back:"Form_form_back__gBhTS",container:"Form_container__2LFmv",logo:"Form_logo__2FQ_x",error_message:"Form_error_message__1O0Pj"}},16:function(e,t,a){e.exports={container:"CardsContainer_container__OllmI",filters:"CardsContainer_filters__3ZJ1I",filter:"CardsContainer_filter__1Z37B",notFound:"CardsContainer_notFound__2lMXu"}},19:function(e,t,a){e.exports={crumbs:"Paginate_crumbs__2VOkS",crumb:"Paginate_crumb__1sWN4",crumb__active:"Paginate_crumb__active__1T2gn",nav:"Paginate_nav__1PQEt",arrow:"Paginate_arrow__2FozE",arrow__active:"Paginate_arrow__active__15yRo"}},26:function(e,t,a){e.exports={mainContainer:"Navbar_mainContainer__1hS29",button:"Navbar_button__2aVL3",button__active:"Navbar_button__active__3HfdY",logo:"Navbar_logo__30qNg"}},27:function(e,t,a){e.exports={detail_back:"Detail_detail_back__1qPP8",container:"Detail_container__1TSmg",imageSize:"Detail_imageSize__gVc6O",description:"Detail_description__3BUpU",button:"Detail_button__1Y7jT",button__active:"Detail_button__active__146xo"}},34:function(e,t,a){e.exports={searchBarObject:"Searchbar_searchBarObject__2vbI2",input:"Searchbar_input__37E88",button:"Searchbar_button__3Pjus",button__active:"Searchbar_button__active__2aelT"}},35:function(e,t,a){e.exports={card:"Card_card__1BTLl",card_img:"Card_card_img__PSQlw",trashCan:"Card_trashCan__2PVRZ"}},36:function(e,t,a){e.exports={container:"Navbartwo_container__2_cGx",logo:"Navbartwo_logo__3_4It",button:"Navbartwo_button__2y8rp",button__active:"Navbartwo_button__active__2tsmJ"}},41:function(e,t,a){e.exports={landingVideo:"LandingPage_landingVideo__3GXR0",start:"LandingPage_start__2dbj1"}},45:function(e,t,a){e.exports={content:"Footer_content__2OxYk"}},46:function(e,t,a){e.exports={home_back:"Home_home_back__20zKN"}},52:function(e,t,a){},53:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(29),i=a.n(r),s=(a(52),a(53),a(6)),o=a(8),l=a(11),d=a(14),j=a(20),u=a(68),b="GET_VIDEOGAMES",m="GET_GAME_DETAIL",O="GET_GAME_GENRES",h="SEARCH_GAME",g="FILTER_BY_GENRES",v="FILTER_BY_ORIGIN",p="ALPHABETICAL_ORDER",_="RATING_ORDER",x="RESET";function f(){return function(){var e=Object(j.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/videogames");case 3:a=e.sent,t({type:b,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function y(){return function(e){u.a.get("/genres").then((function(t){return e({type:O,payload:t.data})}))}}var N=a(7),C=a(34),S=a.n(C),w=a(0),E=function(){var e=Object(N.b)(""),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(w.jsx)("div",{children:Object(w.jsxs)("form",{className:S.a.searchBarObject,onSubmit:function(t){var a;t.preventDefault(),e((a=c,function(){var e=Object(j.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/videogames?name=".concat(a));case 3:if(n=e.sent){e.next=6;break}throw Error;case 6:return e.abrupt("return",t({type:h,payload:n.data}));case 9:e.prev=9,e.t0=e.catch(0),t({type:h,payload:"404"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(w.jsx)("input",{className:S.a.input,type:"text",placeholder:"Search videogames by name...",size:"30",onChange:function(e){r(e.target.value)},value:c}),Object(w.jsx)("input",{className:S.a.button,type:"submit",value:"Search"})]})})},P=a(26),k=a.n(P),A=a.p+"static/media/logotwo.d22f81e0.png",D=function(){return Object(w.jsxs)("div",{className:k.a.mainContainer,children:[Object(w.jsx)(o.b,{to:"/",children:Object(w.jsx)("img",{className:k.a.logo,src:A,alt:""})}),Object(w.jsx)(o.b,{className:k.a.button,to:"/form",children:"Create a new videogame"}),Object(w.jsx)("div",{className:k.a.mainContainer,children:Object(w.jsx)(E,{})})]})},L=a(35),T=a.n(L),F=function(e){var t=Object(N.b)(),a=e.id.toString().includes("-");return Object(w.jsxs)("div",{className:T.a.card,children:[a&&Object(w.jsx)("div",{children:Object(w.jsx)(o.b,{to:"/home",className:T.a.trashCan,onClick:function(){var a;t((a=e.id,Object(j.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.delete("/videogames/".concat(a));case 3:t=e.sent,alert(t.data.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("This game cannot be deleted");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))))),t(f()),setTimeout((function(){window.location.reload()}),3e3)},children:"x"})}),Object(w.jsxs)(o.b,{to:"/detail/".concat(e.id.toString()),className:T.a.card_img,children:[Object(w.jsx)("img",{src:e.image,alt:e.name,height:"190px",width:"190px"}),Object(w.jsx)("h3",{children:e.name}),Object(w.jsx)("h5",{children:e.genres.join(" - ")})]})]})},R=a(19),B=a.n(R),G=function(e){for(var t=e.gamesPerPage,a=e.videogames,n=e.pagination,c=e.currentPage,r=[],i=1;i<=Math.ceil(a/t);i++)r.push(i);function s(e){"prev"===e.target.value&&1!==c&&n(c-1),"next"===e.target.value&&c!==Math.ceil(a/t)&&n(c+1)}return Object(w.jsx)("nav",{children:Object(w.jsxs)("ul",{className:B.a.crumbs,children:[Object(w.jsx)("button",{className:B.a.arrow,onClick:s,disabled:1===c,value:"prev",children:"\u2190"}),r&&r.map((function(e){return Object(w.jsx)("li",{className:B.a.number,children:Object(w.jsxs)("div",{className:c===e?B.a.crumb__active:B.a.crumb,onClick:function(){return n(e)},children:[" ",e," "]})},e)})),Object(w.jsx)("button",{className:B.a.arrow,onClick:s,disabled:c===r.length,value:"next",children:"\u2192"})]})})},I=a(16),V=a.n(I),M=a.p+"static/media/notFound.610aec97.mp4",q=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e.videogames})),a=Object(N.c)((function(e){return e.genres})),c=Object(n.useState)(1),r=Object(l.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)(15),d=Object(l.a)(o,1)[0],j=i*d,u=j-d,b=t.slice(u,j),m=Object(n.useState)([]),O=Object(l.a)(m,2)[1];Object(n.useEffect)((function(){e((function(e){e({type:x})})),e(f()),e(y())}),[e]);var h=function(t){var a;t.preventDefault(),e((a=t.target.value,{type:g,payload:a})),s(1)},C=function(t){var a;e((a=t.target.value,{type:v,payload:a})),s(1)},S=function(t){var a;t.preventDefault(),e((a=t.target.value,{type:p,payload:a})),s(1),O("order".concat(t.target.value))},E=function(t){var a;t.preventDefault(),e((a=t.target.value,{type:_,payload:a})),s(1)};return Object(w.jsxs)("div",{className:V.a.container,children:[Object(w.jsxs)("div",{className:V.a.filters,children:[Object(w.jsxs)("div",{className:V.a.filter,children:[Object(w.jsx)("h6",{children:"Find videogames by genres: "}),Object(w.jsxs)("select",{onChange:function(e){return h(e)},children:[Object(w.jsx)("option",{value:"All",children:"All genres"}),null===a||void 0===a?void 0:a.map((function(e){return Object(w.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),Object(w.jsxs)("div",{className:V.a.filter,children:[Object(w.jsx)("h6",{children:"Find videogames by origin: "}),Object(w.jsxs)("select",{onChange:function(e){return C(e)},children:[Object(w.jsx)("option",{value:"All",children:"All sources"}),Object(w.jsx)("option",{value:"createdDB",children:"DB"}),Object(w.jsx)("option",{value:"created",children:"API"})]})]}),Object(w.jsxs)("div",{className:V.a.filter,children:[Object(w.jsx)("h6",{children:"Order videogames alphabetically: "}),Object(w.jsxs)("select",{onChange:function(e){return S(e)},children:[Object(w.jsx)("option",{value:"asc",children:"A - Z"}),Object(w.jsx)("option",{value:"desc",children:"Z - A"})]})]}),Object(w.jsxs)("div",{className:V.a.filter,children:[Object(w.jsx)("h6",{children:"Order videogames by rating: "}),Object(w.jsxs)("select",{onChange:function(e){return E(e)},children:[Object(w.jsx)("option",{value:"asc",children:"1 - 5"}),Object(w.jsx)("option",{value:"desc",children:"5 - 1"})]})]})]}),Object(w.jsx)("div",{className:V.a.container,children:"404"===b?Object(w.jsxs)("div",{className:V.a.notFound,children:[Object(w.jsx)("h1",{children:"Game not found!"}),Object(w.jsx)("video",{src:M,autoplay:"true",muted:"true",loop:"true"})]}):null===b||void 0===b?void 0:b.map((function(e){return Object(w.jsx)(F,{image:null===e||void 0===e?void 0:e.image,name:null===e||void 0===e?void 0:e.name,genres:null===e||void 0===e?void 0:e.genres,id:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.id)}))}),Object(w.jsx)("div",{children:Object(w.jsx)(G,{gamesPerPage:d,videogames:t.length,pagination:function(e){s(e)},currentPage:i})})]})},z=a(45),X=a.n(z),H=function(){return Object(w.jsx)("div",{className:X.a.content,children:Object(w.jsx)("h6",{children:"Made by Gabriela Acevedo"})})},Z=a(46),U=a.n(Z),Y=function(){var e=Object(N.b)();return Object(n.useEffect)((function(){e(f())}),[e]),Object(w.jsxs)("div",{className:U.a.home_back,children:[Object(w.jsx)(D,{}),Object(w.jsx)(q,{}),Object(w.jsx)(H,{})]})},J=a(41),Q=a.n(J),$=a.p+"static/media/landingVideo.52f12408.mp4",K=a.p+"static/media/startButton.188fce27.png",W=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("video",{src:$,autoplay:"true",muted:"true",loop:"true",className:Q.a.landingVideo}),Object(w.jsx)(o.b,{to:"/home",children:Object(w.jsx)("img",{className:Q.a.start,src:K,alt:""})}),Object(w.jsx)(H,{})]})},ee=a(27),te=a.n(ee),ae=a(36),ne=a.n(ae),ce=function(){return Object(w.jsxs)("div",{className:ne.a.container,children:[Object(w.jsx)("div",{children:Object(w.jsx)(o.b,{className:ne.a.button,to:"/home",children:"Back Home"})}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{className:ne.a.logo,src:A,alt:""})})]})},re=function(){var e=Object(N.b)(),t=Object(s.f)().id;Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(j.a)(Object(d.a)().mark((function t(a){return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/videogames/".concat(e)).then((function(e){return a({type:m,payload:e.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e,t]);var a=Object(N.c)((function(e){return e.detail}));return e({type:"reset"}),a.id?Object(w.jsxs)("div",{className:te.a.detail_back,children:[Object(w.jsx)(ce,{}),Object(w.jsxs)("div",{className:te.a.container,children:[Object(w.jsx)("h1",{children:a.name}),Object(w.jsx)("img",{src:a.image,alt:"",className:te.a.imageSize}),Object(w.jsxs)("h3",{children:["Genres: ",a.genres.join(", ")]}),Object(w.jsxs)("h4",{children:["Launch date: ",a.released]}),Object(w.jsxs)("h4",{children:["Rating: ",a.rating]}),Object(w.jsx)("h4",{children:"Platforms where you can play this game:"}),Object(w.jsx)("p",{children:a.platforms.join(", ")}),Object(w.jsx)("h4",{children:"About this game: "}),Object(w.jsx)("p",{className:te.a.description,children:a.description})]})]}):Object(w.jsx)("div",{children:Object(w.jsx)("h1",{children:"Loading..."})})},ie=a(25),se=a(24),oe=a(4),le=/^[a-zA-Z0-9 ]+$/,de=/^([1-5])$/,je=function(e){var t={};return e.name?le.test(e.name)||(t.name="*Name is invalid"):t.name="*Name is required",e.released||(t.released="*Please add the released date"),e.rating?de.test(e.rating)||(t.rating="Rating invalid"):t.rating="*Please rate the videogame",e.description||(t.description="*The description must contain at least 10 characters"),e.platforms||(t.rating="*Please choose at least one platform"),e.genres||(t.rating="*Please choose at least one genre for this videogame"),t},ue=a(15),be=a.n(ue),me=function(){var e=Object(N.b)();Object(n.useEffect)((function(){e(y())}),[e]);var t=Object(N.c)((function(e){return e.genres})),a=Object(n.useState)({name:"",released:"",rating:"",image:"",description:"",platforms:[],genres:[]}),c=Object(l.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)({}),d=Object(l.a)(o,2),j=d[0],b=d[1],m=Object(s.e)(),O=function(e){b(je(Object(oe.a)(Object(oe.a)({},r),{},Object(se.a)({},e.target.name,e.target.value)))),i(Object(oe.a)(Object(oe.a)({},r),{},Object(se.a)({},e.target.name,e.target.value)))},h=function(e){e.preventDefault(),r.genres.map((function(e){return console.log(e)})),i(Object(oe.a)(Object(oe.a)({},r),{},{genres:r.genres.filter((function(t){return e.target.id!==t}))}))},g=function(e){var t=r[e.target.name];if(e.target.checked)i(Object(oe.a)(Object(oe.a)({},r),{},{platforms:t.concat(e.target.value)}));else{var a=r.platforms.filter((function(t){return t!==e.target.value}));i(Object(oe.a)(Object(oe.a)({},r),{},{platforms:a}))}};return Object(w.jsxs)("div",{className:be.a.form_back,children:[Object(w.jsx)(ce,{}),Object(w.jsx)("h2",{children:"Let's create a new Videogame for our database:"}),Object(w.jsx)("form",{className:be.a.container,onSubmit:function(e){e.preventDefault(),u.a.post("http://localhost:3001/videogames/",r).then(alert("Videogame created successfully!")),m.push("/home"),window.location.reload()},children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Add a name: "}),Object(w.jsx)("input",{className:be.a.form_input,type:"text",name:"name",value:r.name,onChange:O,minLength:"5",maxLength:"20",required:!0}),j.name?Object(w.jsx)("span",{className:be.a.error_message,children:j.name}):null]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Launch date was in: "}),Object(w.jsx)("input",{type:"date",name:"released",value:r.released,placeholder:"dd-mm-yyyy",min:"1990-01-01",max:"2023-12-31",onChange:O,required:!0}),j.released?Object(w.jsx)("span",{className:be.a.error_message,children:j.released}):null]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{form:"points",children:"How many points do you give it: "}),Object(w.jsx)("input",{type:"number",name:"rating",value:r.rating,id:"points",min:"1",max:"5",onChange:O,required:!0}),j.rating?Object(w.jsx)("span",{className:be.a.error_message,children:j.rating}):null]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Add an image URL, or you can leave the space blank:"}),Object(w.jsx)("input",{type:"text",name:"image",value:r.image,onChange:O})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Made a little description about the game: "}),Object(w.jsx)("input",{type:"text",name:"description",minLength:"10",maxLength:"200",value:r.description,onChange:O,required:!0}),j.description?Object(w.jsx)("span",{className:be.a.error_message,children:j.description}):null]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"On which platforms can be played: "}),["PC","Nintendo","Nintendo switch","Xbox Series","PlayStation 2","PlayStation 3","PlayStation 4","PlayStation 5","Xbox One","Xbox360"].map((function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{name:e,children:e}),Object(w.jsx)("input",{type:"checkbox",name:"platforms",value:e,onChange:g})]},e)})),j.platforms?Object(w.jsx)("span",{className:be.a.error_message,children:j.platforms}):null]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"The genres types are: "}),Object(w.jsxs)("select",{name:"genres",onChange:function(e){r.genres.includes(e.target.value)||i(Object(oe.a)(Object(oe.a)({},r),{},{genres:[].concat(Object(ie.a)(r.genres),[e.target.value])}))},id:"",value:r.genres.join(""),children:[Object(w.jsx)("option",{value:"Empty",children:"Choose a genre"}),t.map((function(e){return Object(w.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(w.jsx)("div",{children:Object(w.jsx)("span",{children:"Genres selected: "})}),Object(w.jsx)("div",{children:r.genres.map((function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{children:e}),Object(w.jsx)("button",{onClick:h,id:e,children:"x"})]})}))}),j.genres?Object(w.jsx)("span",{className:be.a.error_message,children:j.genres}):null]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"submit",disabled:!r.name||!r.released||!r.rating||!r.description||0===r.platforms.length||0===r.genres.length,children:"Create"})})]})})]})};u.a.defaults.baseURL="http://localhost:3001/";var Oe=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(s.a,{exact:!0,path:"/",children:Object(w.jsx)(W,{})}),Object(w.jsx)(s.a,{path:"/home",children:Object(w.jsx)(Y,{})}),Object(w.jsx)(s.a,{path:"/detail/:id",children:Object(w.jsx)(re,{})}),Object(w.jsx)(s.a,{path:"/form",children:Object(w.jsx)(me,{})})]})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},ge=a(37),ve={videogames:[],allgames:[],detail:{},genres:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(oe.a)(Object(oe.a)({},e),{},{videogames:t.payload,allgames:t.payload});case m:return Object(oe.a)(Object(oe.a)({},e),{},{allgames:t.payload,detail:t.payload});case x:return Object(oe.a)(Object(oe.a)({},e),{},{detail:{}});case O:return Object(oe.a)(Object(oe.a)({},e),{},{genres:t.payload});case h:return Object(oe.a)(Object(oe.a)({},e),{},{videogames:t.payload});case g:var a=e.allgames;return"All"!==t.payload&&(a=a.filter((function(e){return e.genres.includes(t.payload)}))),Object(oe.a)(Object(oe.a)({},e),{},{videogames:a});case v:var n=e.allgames,c="createdDB"===t.payload?n.filter((function(e){return!0===e.createdDB})):n.filter((function(e){return!e.createdDB}));return Object(oe.a)(Object(oe.a)({},e),{},{videogames:c});case p:var r=e.videogames;return r="asc"===t.payload?r.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):r.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0})),Object(oe.a)(Object(oe.a)({},e),{},{videogames:r});case _:var i="asc"===t.payload?Object(ie.a)(e.allgames).sort((function(e,t){return null===e.rating?0:e.rating<t.rating?-1:t.rating<e.rating?1:0})):Object(ie.a)(e.allgames).sort((function(e,t){return null===e.rating?0:e.rating<t.rating?1:t.rating<e.rating?-1:0}));return Object(oe.a)(Object(oe.a)({},e),{},{videogames:i});default:return Object(oe.a)({},e)}},_e=a(47),xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ge.b,fe=Object(ge.c)(pe,xe(Object(ge.a)(_e.a)));i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(N.a,{store:fe,children:Object(w.jsx)(o.a,{children:Object(w.jsx)(Oe,{})})})}),document.getElementById("root")),he()}},[[67,1,2]]]);
//# sourceMappingURL=main.12fb5d25.chunk.js.map