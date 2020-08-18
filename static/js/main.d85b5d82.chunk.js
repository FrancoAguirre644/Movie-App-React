(this["webpackJsonpmovie-app-react"]=this["webpackJsonpmovie-app-react"]||[]).push([[0],{119:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(10),l=t.n(c),o=(t(64),t(65),t(66),t(67),t(68),t(50)),i=t.n(o),s=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"https://es.reactjs.org/"}," ",r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:i.a,width:"30",height:"30",alt:"React",className:" d-inline-block align-top"}),"Movie Finder ")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"}))},m=t(22),u=t.n(m),d=t(51),b=t(12),v=t(18),p=t.n(v),f=t(26),E=t(52),g=t.n(E),h=t(124),N=t(11),w=function(e){var a=e.movie,t=Object(n.useState)({Released:"",Actors:"",Director:"",Plot:"",Genre:"",Runtime:"",number:1}),c=Object(b.a)(t,2),l=c[0],o=c[1],i=Object(n.useState)(!1),s=Object(b.a)(i,2),m=s[0],u=s[1],d=function(e){p.a.get("http://localhost:3000/Movie-App-React/http://www.omdbapi.com/?i="+e+"&apikey=7cba9c29").then((function(e){o(Object(f.a)(Object(f.a)({},l),{},{Released:e.data.Released,Actors:e.data.Actors,Director:e.data.Director,Plot:e.data.Plot,Genre:e.data.Genre,Runtime:e.data.Runtime,imdbRating:e.data.imdbRating})),u(!0)})).catch((function(e){console.log(e)}))},v=r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"movie_card"},r.a.createElement("div",{className:"info_section"},r.a.createElement("button",{onClick:function(){return u(!1)}},"X"),r.a.createElement("div",{className:"movie_header"},r.a.createElement("img",{className:"locandina",src:a.Poster,alt:a.Title}),r.a.createElement("h1",null,a.Title),r.a.createElement("h4",null,a.Year,", ",l.Director)),r.a.createElement("div",{className:"movie_desc"},r.a.createElement(g.a,{count:10,size:24,edit:!1,isHalf:!0,value:l.imdbRating,activeColor:"#ffd700"}),r.a.createElement("span",{className:"minutes"},l.Runtime),r.a.createElement("p",{className:"type"},a.Type),r.a.createElement("p",{className:"text"},l.Plot))),r.a.createElement("div",{className:"blur_back bright_back",style:{backgroundImage:"url(".concat(a.Poster,")")}})));return r.a.createElement(N.c,{className:"card2 bg-transparent border-white",onClick:function(){return d(a.imdbID)}},r.a.createElement("img",{hover:!0,overlay:"white-slight",src:a.Poster,alt:a.Title}),r.a.createElement(N.d,null,r.a.createElement("h5",{className:"white-text"},r.a.createElement(N.g,{icon:"film"})," ",a.Title),r.a.createElement(N.f,{className:"lead"},a.Year),r.a.createElement(N.f,{className:"lead"},a.Type)),r.a.createElement(h.a,{className:"Modal",isOpen:m,style:{position:"absolute",left:"20%",transform:"translate(-50%, 20%)"}},v))},k=t(123),j=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(b.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(!1),v=Object(b.a)(m,2),f=v[0],E=v[1],g=Object(n.useState)(""),h=Object(b.a)(g,2),j=h[0],O=h[1];Object(n.useEffect)((function(){document.title="Movie Finder"}),[]);var y=function(){var e=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==t){e.next=5;break}return O("Please insert a name movie."),s([]),e.abrupt("return",i);case 5:return E(!0),e.next=8,p.a.get("http://www.omdbapi.com/?s="+t+"&apikey=7cba9c29").then((function(e){s(e.data.Search),O(e.data.Error),E(!1)})).catch((function(e){console.log(e)}));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"form_group field m-3"},r.a.createElement("form",{onSubmit:function(e){return y(e)}},r.a.createElement("input",{type:"input",className:"form_field",placeholder:"Search",onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{className:"form_label"},"Search")),""===j?"":r.a.createElement("div",{className:"mt-4 text-center"},j))),r.a.createElement(N.e,null,r.a.createElement(N.l,{className:"row justify-content-center"},f?r.a.createElement("div",{className:"mx-auto"},r.a.createElement(k.a,{animation:"border",variant:"info"})):i&&i.map((function(e){return r.a.createElement(w,{key:e.imdbID,movie:e})})))))};var O=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(s,null),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(118);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},59:function(e,a,t){e.exports=t(119)},64:function(e,a,t){},65:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.d85b5d82.chunk.js.map