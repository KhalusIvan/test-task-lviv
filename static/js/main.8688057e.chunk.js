(this.webpackJsonptesttask=this.webpackJsonptesttask||[]).push([[0],{27:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),l=c(21),n=c.n(l),i=(c(27),c(7)),r=c.n(i),d=c(9),o=c(5),b=c(0),j=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],l=Object(s.useState)(""),n=Object(o.a)(l,2),i=n[0],j=n[1],m=Object(s.useState)(""),h=Object(o.a)(m,2),u=h[0],x=h[1],O=Object(s.useState)(""),p=Object(o.a)(O,2),f=p[0],N=p[1],v=Object(s.useState)(""),g=Object(o.a)(v,2),y=g[0],w=g[1],F=Object(s.useState)(""),k=Object(o.a)(F,2),L=k[0],C=k[1],S=Object(s.useState)(""),U=Object(o.a)(S,2),M=U[0],E=U[1];function P(){return(P=Object(d.a)(r.a.mark((function e(){var t,s,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://60955b88e806f60017116688.mockapi.io/api/v1",{method:"POST",body:{imageUrl:i,name:c,descripion:u,count:f,width:y,height:L,weight:M}});case 2:return t=e.sent,e.next=5,t.status;case 5:return s=e.sent,e.next=8,t.json();case 8:a=e.sent,console.log(s),console.log(a),200===s||201===s||(400===s?alert("\u041d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"):alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"modal fade",id:"addModal",tabIndex:"-1","aria-labelledby":"addModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"addModalLabel",children:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"imageUrl",className:"form-label",children:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"}),Object(b.jsx)("input",{type:"text",id:"imageUrl",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c url \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f",value:i,onChange:function(e){j(e.target.value)}})]}),Object(b.jsxs)("div",{className:"mb-3 d-flex justify-content-between",children:[Object(b.jsxs)("div",{className:"w-50",children:[Object(b.jsx)("label",{htmlFor:"name",className:"form-label",children:"\u041d\u0430\u0437\u0432\u0430"}),Object(b.jsx)("input",{type:"text",id:"name",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443",value:c,onChange:function(e){a(e.target.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"count",className:"form-label",children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),Object(b.jsx)("input",{type:"number",id:"count",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443",value:f,onChange:function(e){N(e.target.value)}})]})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"\u041e\u043f\u0438\u0441"}),Object(b.jsx)("input",{type:"text",id:"description",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u043f\u0438\u0441 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443",value:u,onChange:function(e){x(e.target.value)}})]}),"\u0420\u043e\u0437\u043c\u0456\u0440\u0438",Object(b.jsxs)("div",{className:"mb-3 d-flex justify-content-between w-100",children:[Object(b.jsx)("input",{type:"number",id:"height",className:"form-control w-25",placeholder:"\u0412\u0438\u0441\u043e\u0442\u0430",value:L,onChange:function(e){C(e.target.value)}}),Object(b.jsx)("input",{type:"number",id:"width",className:"form-control w-25",placeholder:"\u0428\u0438\u0440\u0438\u043d\u0430",value:y,onChange:function(e){w(e.target.value)}}),Object(b.jsx)("input",{type:"number",id:"weight",className:"form-control w-25",placeholder:"\u0412\u0430\u0433\u0430",value:M,onChange:function(e){E(e.target.value)}})]})]})}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){!function(){P.apply(this,arguments)}()},children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"})]})]})})})},m=function(e){function t(){return(t=Object(d.a)(r.a.mark((function t(){var c,s,a,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://60955b88e806f60017116688.mockapi.io/api/v1/products/"+e.id,{method:"DELETE"});case 2:return c=t.sent,t.next=5,c.status;case 5:200===(s=t.sent)||201===s?(a=e.productList.findIndex((function(t){return t.id===e.id})),(l=e.productList.slice()).splice(a,1),e.setProductList(l)):404===s?alert("\u041d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"):alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"modal fade",id:"deleteModal"+e.id,tabIndex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"deleteModalLabel",children:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsxs)("div",{className:"modal-body m-auto w-50 text-center",children:[Object(b.jsx)("h5",{className:"mt-2 mb-3",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),Object(b.jsxs)("div",{className:"d-flex justify-content-between mt-4 mb-3",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-secondary mr-3",onClick:function(){return function(){return t.apply(this,arguments)}()},"data-bs-dismiss":"modal",children:"\u0422\u0430\u043a"}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\u041d\u0456"})]})]}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"})})]})})})},h=c(2),u=function(e){var t=e.product,c=Object(h.f)();return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsx)("img",{alt:"product__photo",src:t.imageUrl})}),Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.description}),Object(b.jsx)("td",{children:t.count}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){c.push("/"+t.id)},children:"\u0434\u0435\u0442\u0430\u043b\u0456"})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#deleteModal"+t.id,children:"delete"}),Object(b.jsx)(m,{id:t.id,productList:e.productList,setProductList:e.setProductList})]})]})},x=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];function l(){return(l=Object(d.a)(r.a.mark((function e(){var t,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://60955b88e806f60017116688.mockapi.io/api/v1",{method:"GET"});case 2:return t=e.sent,e.next=5,t.status;case 5:return c=e.sent,e.next=8,t.json();case 8:s=e.sent,console.log(c),console.log(s),200===c||201===c?a(s):400===c?alert("\u041d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"):alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return c.map((function(e){return Object(b.jsx)(u,{product:e,productList:c,setProductList:a},e.id)}))}return Object(s.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),Object(b.jsx)(b.Fragment,{children:0!==c.length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"w-100",children:[Object(b.jsx)("th",{scope:"col-3",children:"\u0424\u043e\u0442\u043e"}),Object(b.jsx)("th",{scope:"col-2",children:"\u041d\u0430\u0437\u0432\u0430"}),Object(b.jsx)("th",{scope:"col-3",children:"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043e\u043f\u0438\u0441"}),Object(b.jsx)("th",{scope:"col-2",children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),Object(b.jsx)("th",{scope:"col-1",children:"\u0414\u0435\u0442\u0430\u043b\u0456"}),Object(b.jsx)("th",{scope:"col-1",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsx)(n,{})})]}),Object(b.jsx)("button",{type:"button",className:"position-fixed",style:{bottom:"5%",right:"5%"},"data-bs-toggle":"modal","data-bs-target":"#addModal",children:"addNew"}),Object(b.jsx)(j,{})]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:"Loading"})})})},O=function(){var e=Object(h.f)(),t=Object(s.useState)(!1),c=Object(o.a)(t,2),a=c[0],l=c[1],n=Object(s.useState)(!1),i=Object(o.a)(n,2),j=i[0],m=i[1],u=e.location.pathname.split("/")[1];function x(){return(x=Object(d.a)(r.a.mark((function e(){var t,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://60955b88e806f60017116688.mockapi.io/api/v1/"+u,{method:"GET"});case 2:return t=e.sent,e.next=5,t.status;case 5:return c=e.sent,e.next=8,t.json();case 8:s=e.sent,200===c||201===c?m(s):400===c?alert("\u041d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"):alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),Object(b.jsx)("div",{children:!1===j?Object(b.jsx)("div",{children:"loading"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("form",{className:"w-75 m-auto mt-4",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"imageUrl",className:"form-label",children:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"}),Object(b.jsx)("input",{type:"text",id:"imageUrl",className:"form-control",value:j.imageUrl})]}),Object(b.jsxs)("div",{className:"mb-3 d-flex justify-content-between",children:[Object(b.jsxs)("div",{className:"w-75",children:[Object(b.jsx)("label",{htmlFor:"name",className:"form-label",children:"\u041d\u0430\u0437\u0432\u0430"}),Object(b.jsx)("input",{type:"text",id:"name",className:"form-control",value:j.name})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"count",className:"form-label",children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),Object(b.jsx)("input",{type:"number",id:"count",className:"form-control",value:j.count})]})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"\u041e\u043f\u0438\u0441"}),Object(b.jsx)("input",{type:"text",id:"description",className:"form-control",value:j.description})]}),Object(b.jsxs)("div",{className:"mb-3 d-flex justify-content-between w-100",children:[Object(b.jsxs)("div",{className:"w-25",children:[Object(b.jsx)("label",{htmlFor:"height",className:"form-label",children:"\u0412\u0438\u0441\u043e\u0442\u0430"}),Object(b.jsx)("input",{type:"number",id:"height",className:"form-control",value:j.size.height})]}),Object(b.jsxs)("div",{className:"w-25",children:[Object(b.jsx)("label",{htmlFor:"width",className:"form-label",children:"\u0428\u0438\u0440\u0438\u043d\u0430"}),Object(b.jsx)("input",{type:"number",id:"width",className:"form-control",value:j.size.width})]}),Object(b.jsxs)("div",{className:"w-25",children:[Object(b.jsx)("label",{htmlFor:"weight",className:"form-label",children:"\u0412\u0430\u0433\u0430"}),Object(b.jsx)("input",{type:"number",id:"weight",className:"form-control",value:j.weight})]})]})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"imageUrl",className:"form-label",children:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"}),Object(b.jsx)("input",{type:"text",id:"imageUrl",className:"form-control",value:j.imageUrl,disabled:!0})]}),Object(b.jsxs)("div",{className:"mb-3 d-flex justify-content-between",children:[Object(b.jsxs)("div",{className:"w-75",children:[Object(b.jsx)("label",{htmlFor:"name",className:"form-label",children:"\u041d\u0430\u0437\u0432\u0430"}),Object(b.jsx)("input",{type:"text",id:"name",className:"form-control",value:j.name,disabled:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"name",className:"form-label",children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),Object(b.jsx)("input",{type:"text",id:"name",className:"form-control",value:j.count,disabled:!0})]})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"\u041e\u043f\u0438\u0441"}),Object(b.jsx)("input",{type:"text",id:"description",className:"form-control",value:j.description,disabled:!0})]}),Object(b.jsxs)("div",{className:"mb-3 d-flex justify-content-between w-100",children:[Object(b.jsxs)("div",{className:"w-25",children:[Object(b.jsx)("label",{htmlFor:"height",className:"form-label",children:"\u0412\u0438\u0441\u043e\u0442\u0430"}),Object(b.jsx)("input",{type:"number",id:"height",className:"form-control",value:j.size.height,disabled:!0})]}),Object(b.jsxs)("div",{className:"w-25",children:[Object(b.jsx)("label",{htmlFor:"width",className:"form-label",children:"\u0428\u0438\u0440\u0438\u043d\u0430"}),Object(b.jsx)("input",{type:"number",id:"width",className:"form-control",value:j.size.width,disabled:!0})]}),Object(b.jsxs)("div",{className:"w-25",children:[Object(b.jsx)("label",{htmlFor:"weight",className:"form-label",children:"\u0412\u0430\u0433\u0430"}),Object(b.jsx)("input",{type:"number",id:"weight",className:"form-control",value:j.weight,disabled:!0})]})]})]})}),Object(b.jsxs)("div",{className:"m-auto d-flex justify-content-end w-75",children:[Object(b.jsx)("button",{className:"me-3",onClick:function(){return l(!0)},children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),Object(b.jsx)("button",{children:"\u041a\u043e\u043c\u0435\u043d\u0442\u0443\u0432\u0430\u0442\u0438"})]})]})})};var p=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{exact:!0,path:"/:id",component:O}),Object(b.jsx)(h.a,{path:"/",component:x})]})})},f=(c(35),c(36),c(11));n.a.render(Object(b.jsx)(f.a,{children:Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.8688057e.chunk.js.map