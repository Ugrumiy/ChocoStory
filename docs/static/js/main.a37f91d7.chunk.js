(this.webpackJsonpchoco=this.webpackJsonpchoco||[]).push([[0],{25:function(e,a,t){e.exports=t(47)},30:function(e,a,t){},35:function(e,a){},37:function(e,a){},47:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(23),r=t.n(c),o=t(5),s=(t(30),t(24));const m=[{id:"roseCounter",name:"\u041f\u043e\u0434\u0441\u0447\u0435\u0442 \u0440\u043e\u0437"},{id:"skuGenerator",name:"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0410\u0440\u0442\u0438\u043a\u0443\u043b\u043e\u0432"}],i=[{id:"roses",name:"\u0420\u043e\u0437\u044b"},{id:"packaging",name:"\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430"}],d={},u={B:{name:"\u0411\u0435\u043b\u044b\u0439",color:"white"},G:{name:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439",color:"blue"},J:{name:"\u0416\u0435\u043b\u0442\u044b\u0439",color:"yellow"},K:{name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439",color:"red"},O:{name:"\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439",color:"orange"},R:{name:"\u0420\u043e\u0437\u043e\u0432\u044b\u0439",color:"pink"},F:{name:"\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439",color:"#8b00ff"},SH:{name:"\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u044b\u0439",color:"#4f2811"},ZL:{name:"\u0417\u043e\u043b\u043e\u0442\u043e\u0439",color:"#d4af37"}},E=Object.keys(u),p=[7,19,37,61].sort((e,a)=>e-a),h={A:{name:"\u0410\u043a\u0432\u0430\u043c\u0430\u0440\u0438\u043d",color:"#7fffd4"},B:{name:"\u0411\u0435\u043b\u044b\u0439",color:"white"},G:{name:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439",color:"#add8e6"},J:{name:"\u0416\u0435\u043b\u0442\u044b\u0439",color:"yellow"},Z:{name:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439",color:"green"},K:{name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439",color:"red"},O:{name:"\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439",color:"orange"},R:{name:"\u0420\u043e\u0437\u043e\u0432\u044b\u0439",color:"pink"},S:{name:"\u0421\u0438\u043d\u0438\u0439",color:"blue"},T:{name:"\u0422\u0435\u043c\u043d\u043e-\u0433\u043e\u043b\u0443\u0431\u043e\u0439",color:"#72bcd4"},F:{name:"\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439",color:"#8b00ff"},ZL:{name:"\u0417\u043e\u043b\u043e\u0442\u043e\u0439",color:"#d4af37"},C:{name:"\u0421\u0438\u0440\u0435\u043d\u0435\u0432\u044b\u0439",color:"#c8a2c8"},CH:{name:"\u0427\u0451\u0440\u043d\u044b\u0439",color:"black"},M:{name:"\u041c\u0430\u043b\u0438\u043d\u043e\u0432\u044b\u0439",color:"maroon"},SH:{name:"\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u044b\u0439",color:"#4f2811"}},g=Object.keys(h).sort(),b={B:"\u0411\u0443\u043a\u0435\u0442",M:"\u041c\u0438\u043d\u0438-\u043a\u043e\u0440\u043e\u0431\u043a\u0430",MS:"\u041c\u0438\u043d\u0438-\u043a\u043e\u0440\u043e\u0431\u043a\u0430 (\u0441\u0435\u0440\u0434\u0446\u0435)",K:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430",SH:"\u0428\u043b\u044f\u043f\u043d\u0430\u044f \u043a\u043e\u0440\u043e\u0431\u043a\u0430",Z:"\u0428\u043b\u044f\u043f\u043d\u0430\u044f \u043a\u043e\u0440\u043e\u0431\u043a\u0430 (\u0437\u0430\u043a\u0440\u044b\u0442\u0430\u044f)",ZS:"\u0421\u0435\u0440\u0434\u0446\u0435 (\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0435)",S:"\u0421\u0435\u0440\u0434\u0446\u0435"},k={SH:{37:"12",51:"16",73:"20",101:"25"},Z:{19:"16",27:"18",29:"20",37:"20"}},f=(e,a)=>{const t={},l=(e=>{let a=e.replace(" ",""),t=[];for(;0!==a.length;)E.forEach(e=>{0===a.indexOf(e)&&(t.push(e),a=a.slice(e.length))});return t})(a);return l.forEach((a,n)=>{const c=d[e]&&d[e][l.length]?d[e][l.length]:((e,a)=>{let t=[];const l=e/a;if(e%a===0)t=new Array(a).fill(l);else{t.push(Math.ceil(l));for(let e=2;e<=a;e++)t.push(Math.floor(l))}return t})(e,l.length);t[a]=parseInt(c[n],10)}),t},y=e=>Object.keys(e).reduce((a,t)=>a+parseFloat(e[t]||0),0),O=e=>{let a={totalOrders:0,totalRoses:0,roseStats:{},roseDetails:{},packagingDetails:{}};e.forEach((e,t)=>{try{const t=e[2],l=t.replace("ZS","S").split("-"),n=e[3],c=l[0].replace(/^\D+/g,""),r=l[0].replace(/\d/g,"");a.totalOrders=a.totalOrders+=1,a.totalRoses=a.totalRoses+=parseInt(c,10)*n;const o=2===l.length||"K"===r?l[1]:l[2],s=f(c,o);Object.keys(s).forEach(e=>{const t=s[e]*n;a.roseDetails[e]?a.roseDetails[e]+=t:a.roseDetails[e]=t});const m=((e,a)=>"K"!==e?a[1]:"plain")(r,l);"R"!==r&&(a.packagingDetails[r]||(a.packagingDetails[r]={}),a.packagingDetails[r][m]||(a.packagingDetails[r][m]={}),a.packagingDetails[r][m][c]?a.packagingDetails[r][m][c]=a.packagingDetails[r][m][c]+1:a.packagingDetails[r][m][c]=1)}catch(l){const a="\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 ".concat(e,". \u0421\u0442\u0440\u043e\u043a\u0430 ").concat(t+1);throw alert(a),new Error(a)}}),a.packagingDetails=(e=>{let a={};return Object.keys(e).forEach(t=>{a[t]={};Object.keys(e[t]).forEach(l=>{switch(t){case"B":{const n=y(e[t][l]);a[t][l]="".concat(n/2," \u043b\u0438\u0441\u0442\u043e\u0432 (").concat(n,"\u0448\u0442.)");break}case"K":a[t][l]="".concat(e[t].plain[27]," \u0448\u0442.");break;case"M":case"MS":{const n=y(e[t][l]);a[t][l]="".concat(n," \u0448\u0442.");break}case"SH":case"Z":{const n=e[t][l];let c="";Object.keys(n).forEach(e=>{c="".concat(c).concat(k[t][e],"\u0441\u043c - ").concat(n[e]," \u0448\u0442.\n")}),a[t][l]=c;break}case"ZS":case"S":{const n=e[t][l];let c="";Object.keys(n).forEach(e=>{c="".concat(c).concat(e," - ").concat(n[e]," \u0448\u0442.\n")}),a[t][l]=c;break}default:return}})}),a})(a.packagingDetails);let t=[];for(let l in a.roseDetails)t.push([l,a.roseDetails[l]]);return t.sort((e,a)=>a[1]-e[1]),a.roseDetails=Object.fromEntries(t),a};var v=({children:e,style:a,className:t=""})=>n.a.createElement("table",{style:a,className:"mx-auto table table-bordered mt-3 ".concat(t)},n.a.createElement("tbody",null,e)),D=({children:e})=>n.a.createElement("th",{scope:"row",style:{textAlign:"left"}},e),j=t(8),x=e=>{let a=e.children,t=Object(j.a)(e,["children"]);return n.a.createElement("td",t,a)},w=({children:e})=>n.a.createElement("tr",null,e),S=e=>{let a=e.color,t=Object(j.a)(e,["color"]);return n.a.createElement("td",t,n.a.createElement("div",{style:{width:"25px",height:"25px",backgroundColor:a,border:"1px solid #dee2e6",margin:"0 auto"}}))},N=({data:e})=>n.a.createElement(v,{style:{maxWidth:"500px"}},Object.keys(e.roseDetails).map(a=>n.a.createElement(w,{key:a},n.a.createElement(D,null,u[a].name),n.a.createElement(S,{color:u[a].color}),n.a.createElement(x,null,e.roseDetails[a]," \u0448\u0442."))),n.a.createElement(w,null,n.a.createElement(D,null,"\u0412\u0441\u0435\u0433\u043e \u0420\u043e\u0437:"),n.a.createElement(x,null),n.a.createElement(x,null,e.totalRoses," \u0448\u0442.")),n.a.createElement(w,null,n.a.createElement(D,null,"\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432:"),n.a.createElement(x,null),n.a.createElement(x,null,e.totalOrders," \u0448\u0442."))),R=({data:e})=>n.a.createElement(v,{className:"table__package",style:{maxWidth:"700px"}},Object.keys(e.packagingDetails).sort().map(a=>n.a.createElement(w,{key:a},n.a.createElement(x,{width:"200px"},b[a]),n.a.createElement(x,null,n.a.createElement(v,null,Object.keys(e.packagingDetails[a]).sort().map(t=>n.a.createElement(w,{key:t},n.a.createElement(x,{width:"150px"},h[t]?h[t].name:"\u041d\u0435\u0442 \u0446\u0432\u0435\u0442\u0430"),h[t]?n.a.createElement(S,{width:"70px",height:"100%",color:h[t].color}):n.a.createElement(x,{width:"70px"},"\xa0"),n.a.createElement(x,null,n.a.createElement("div",null,e.packagingDetails[a][t]))))))))),Z=()=>{let e;const a=Object(l.useState)(null),t=Object(o.a)(a,2),c=t[0],r=t[1],m=Object(l.useState)(i[0].id),d=Object(o.a)(m,2),u=d[0],E=d[1],p=a=>{const t=e.result;let l=s.parse(t).filter(e=>!e.every(e=>""===e));r(O(l)),a.target.value=null};return n.a.createElement("div",null,n.a.createElement("h5",{className:"mt-4"},"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),n.a.createElement("div",{className:"mx-auto mt-2"},n.a.createElement("label",{htmlFor:"file",className:"btn btn-warning"},c?"\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0435\u0449\u0435":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0444\u0430\u0439\u043b"),n.a.createElement("input",{style:{position:"absolute",left:"-999px"},type:"file",id:"file",accept:".csv",onChange:a=>{return t=a.target.files[0],e=new FileReader,e.onloadend=p,void(t&&e.readAsText(t));var t}}),c&&n.a.createElement("div",{className:"tabs mt-1"},n.a.createElement("ul",{className:"nav nav-pills nav-fill"},i.map(e=>n.a.createElement("li",{className:"nav-item",key:e.id},n.a.createElement("div",{className:"nav-link ".concat(u===e.id?"active":""),href:"#",onClick:()=>{E(e.id)}},e.name))))),c&&u===i[0].id&&n.a.createElement(N,{data:c}),c&&u===i[1].id&&n.a.createElement(R,{data:c})))},M=()=>{const e=Object.keys(u).sort(),a=(t=e,t.reduceRight((e,a)=>[...e,...e.map(e=>[a,...e])],[[]])).filter(e=>e.length&&e.length<=3).map(e=>e.join("")).sort();var t;const l=p.reduce((e,a)=>[...e,...g.map(e=>"".concat("B").concat(a,"-").concat(e))],[]).sort().reduce((e,t)=>[...e,...a.map(e=>"".concat(t,"-").concat(e))],[]);return n.a.createElement("div",null,n.a.createElement("table",{style:{maxWidth:"500px"},className:"mx-auto table table-bordered mt-3"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"\u0422\u0438\u043f\u044b"),n.a.createElement("td",null,"B")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"\u0420\u0430\u0437\u043c\u0435\u0440\u044b"),p.map(e=>n.a.createElement("td",{key:e},e))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"\u0426\u0432\u0435\u0442\u0430 \u0440\u043e\u0437"),e.map(e=>n.a.createElement("td",{key:e},e))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"\u0426\u0432\u0435\u0442\u0430 \u0431\u0443\u043c\u0430\u0433\u0438"),g.map(e=>n.a.createElement("td",{key:e},e))))),n.a.createElement("p",{className:"text-left",style:{padding:"0 20px"}},l.join(" ")))};function B(){const e=Object(l.useState)(m[0].id),a=Object(o.a)(e,2),t=a[0],c=a[1];return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"tabs mt-1"},n.a.createElement("ul",{className:"nav nav-fill"},m.map(e=>n.a.createElement("li",{className:"nav-item",key:e.id},n.a.createElement("a",{className:"nav-link",href:"#",onClick:()=>{c(e.id)}},e.name))))),t===m[0].id?n.a.createElement(Z,null):n.a.createElement(M,null))}const C=document.getElementById("root");r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),C)}},[[25,1,2]]]);
//# sourceMappingURL=main.a37f91d7.chunk.js.map