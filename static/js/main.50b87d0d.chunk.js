(this["webpackJsonpaviasales-test"]=this["webpackJsonpaviasales-test"]||[]).push([[0],{12:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/logo.0c089234.svg"},24:function(e,t,a){e.exports=a(51)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),i=a.n(r),s=a(8),l=(a(29),a(30),function(e){return c.a.createElement("div",{className:"filters"},c.a.createElement("div",{className:"filter-item"},c.a.createElement("div",{className:"filter-item__title"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),c.a.createElement("div",{className:"filter-item__list"},e.filters.data.map((function(t){return c.a.createElement("div",{key:t.id,className:"filter-item__element",onClick:function(a){return e.handleClick(a,t)}},c.a.createElement("div",{className:"filter-item__value"},c.a.createElement("label",{className:"checkbox-container"},t.text,c.a.createElement("input",{type:"checkbox",checked:t.isChecked,onChange:function(a){return e.handleClick(a,t)}}),c.a.createElement("span",{className:"checkmark"}))))})))))}),o=c.a.memo((function(e){return c.a.createElement(l,Object.assign({},e,{handleClick:function(t,a){t.stopPropagation(),e.handleClick(a)}}))})),u=(a(31),function(e){return c.a.createElement("ul",{className:"tabs"},e.tabs.data.map((function(t){return c.a.createElement("li",{key:t.id,className:"tab ".concat(t.isActive?"tab__is-active":""),onClick:function(){return e.handleClick(t)}},t.text)})))}),d=c.a.memo((function(e){return c.a.createElement(u,e)})),m=a(23),f=a(10);function v(e,t){return e.price>t.price?1:-1}function p(e,t){var a=0,n=0;return e.segments.forEach((function(e){a+=e.duration})),t.segments.forEach((function(e){n+=e.duration})),a>n?1:-1}a(12);var E=function(e){var t=e.data;return c.a.createElement("div",{className:"Tickets"},t.map((function(e,t){return c.a.createElement("div",{className:"ticket",key:t},c.a.createElement("div",{className:"ticket__top"},c.a.createElement("div",{className:"ticket__price"},(a=e.price,"".concat(a.toLocaleString("ru-RU",{style:"decimal",currency:"RUB"})," \u0420"))),c.a.createElement("div",{className:"ticket__logo"},c.a.createElement("img",{className:"ticket-carrier__img",src:"//pics.avs.io/99/36/".concat(e.carrier,".png"),width:"99",height:"36",alt:"IrAero"}))),c.a.createElement("div",{className:"ticket__bottom"},e.segments.map((function(e,t){return c.a.createElement("div",{className:"ticket-info",key:t},c.a.createElement("div",{className:"ticket-endpoint"},c.a.createElement("div",{className:"ticket-endpoint__title"},e.origin," - ",e.destination),c.a.createElement("div",null," ",function(e,t){var a=Object(m.a)(new Date(e),{seconds:t});return"".concat(Object(f.a)(new Date(e),"HH:mm")," : ").concat(Object(f.a)(new Date(a),"HH:mm"))}(e.date,e.duration))),c.a.createElement("div",{className:"ticket-endpoint"},c.a.createElement("div",{className:"ticket-endpoint__title"},"\u0412 \u043f\u0443\u0442\u0438"),c.a.createElement("div",null,function(e){var t=e/3600^0,a=(e-3600*t)/60^0;return"".concat(0===t?"":t<10?"0"+t+"\u0447":t+"\u0447"," ").concat(0===a?"":a<10?"0"+a+" \u043c":a+" \u043c")}(e.duration))),c.a.createElement("div",{className:"ticket-endpoint"},c.a.createElement("div",{className:"ticket-endpoint__title"},function(e){switch(e){case 0:return"\u041f\u0440\u044f\u043c\u043e\u0439";case 1:return"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430";case 2:return"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438";case 3:return"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438";case 4:return"4 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438";default:return e}}(e.stops.length)),c.a.createElement("div",null," ",e.stops.join(", "))))}))));var a})))},h=c.a.memo((function(e){var t,a,n=e.tickets,r=n.data,i=n.isLoaded,s=n.isError,l=e.filters.data,o=e.tabs.data,u=function(e,t){var a=e.map((function(e){return e.value}));return a.length>0?t.filter((function(e){var t=e.segments.map((function(e){return e.stops})).sort((function(e,t){return e.length<t.length?1:-1}))[0].length;return!!a.includes(t)})):t}(l.filter((function(e){return e.isChecked})),r||[]),d=o.findIndex((function(e){return!0===e.isActive})),m=(t=o[d].id,a=u,1===t?a.sort(p):2===t?a.sort(v):a);return s?c.a.createElement("div",{className:"ticker-error"}," Error , please reload page"):i?c.a.createElement(E,{data:m}):c.a.createElement("div",null,"....Loading data ")})),k=a(5),b=a.n(k),N=a(7),_="SET_FILTERS",g="SET_TABS",y="SET_TICKETS",C="SET_TICKETS_ERROR",w=a(9),x=a.n(w);function j(){return O.apply(this,arguments)}function O(){return(O=Object(N.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://front-test.beta.aviasales.ru/search");case 3:return t=e.sent,e.next=6,t.data.searchId;case 6:return a=e.sent,e.next=9,x.a.get("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(a));case 9:return n=e.sent,e.abrupt("return",n.data.tickets.slice(0,20));case 13:throw e.prev=13,e.t0=e.catch(0),new Error("");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}var T={setFilters:function(e,t,a){var n,c=t.data;if(1===a.id){var r=!a.isChecked;n=c.map((function(e){return e.isChecked=r,e}))}else n=c.map((function(e){return 1===e.id&&(e.isChecked=!1),a.id===e.id&&(e.isChecked=!e.isChecked),e}));e({type:_,payload:n})},setTabs:function(e,t,a){var n=t.data.map((function(e){return a.id===e.id?(e.isActive=!0,e):(e.isActive=!1,e)}));e({type:g,payload:n})},fetchTickets:function(){var e=Object(N.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:return a=e.sent,e.next=6,t({type:y,payload:a});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,t({type:C});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},A=a(6);var R=function(e,t){switch(t.type){case y:return Object(A.a)({},e,{isLoaded:!0,data:t.payload});case C:return Object(A.a)({},e,{isError:!0,isLoaded:!1,data:[]});default:throw new Error}};var S=function(e,t){switch(t.type){case _:return Object(A.a)({},e,{data:t.payload});default:throw new Error}};var I=function(e,t){switch(t.type){case g:return{data:t.payload};default:throw new Error}},L={isLoaded:!1,isError:!1},H={data:[{id:1,text:"\u0412\u0441\u0435",isChecked:!1,value:-1},{id:2,text:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",isChecked:!1,value:0},{id:3,text:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",isChecked:!1,value:1},{id:4,text:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",isChecked:!1,value:2},{id:5,text:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",isChecked:!1,value:3}]},B={data:[{id:1,text:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439",isActive:!0},{id:2,text:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439",isActive:!1}]},D=a(22),F=a.n(D),J=(a(50),function(){var e=Object(n.useReducer)(R,L),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useReducer)(I,B),l=Object(s.a)(i,2),u=l[0],m=l[1],f=Object(n.useReducer)(S,H),v=Object(s.a)(f,2),p=v[0],E=v[1];Object(n.useEffect)((function(){T.fetchTickets(r)}),[]);return c.a.createElement("div",{className:"wrap"},c.a.createElement("div",{className:"header"},c.a.createElement("img",{src:F.a,className:"App-logo",alt:"logo"})),c.a.createElement("div",{className:"container"},c.a.createElement(o,{handleClick:function(e){T.setFilters(E,p,e)},filters:p}),c.a.createElement("div",{className:"results"},c.a.createElement("div",{className:"sort"},c.a.createElement(d,{handleClick:function(e){T.setTabs(m,u,e)},tabs:u}),c.a.createElement(h,{tickets:a,filters:p,tabs:u})))))});i.a.render(c.a.createElement(J,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.50b87d0d.chunk.js.map