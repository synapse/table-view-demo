(function(e){function a(a){for(var r,i,s=a[0],l=a[1],c=a[2],m=0,u=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(a);while(u.length)u.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],r=!0,s=1;s<t.length;s++){var l=t[s];0!==o[l]&&(r=!1)}r&&(n.splice(a--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},n=[];function i(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)i.d(t,r,function(a){return e[a]}.bind(null,r));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"0534":function(e,a,t){"use strict";var r=t("3fcb"),o=t.n(r);o.a},"2e36":function(e,a,t){"use strict";var r=t("cfda"),o=t.n(r);o.a},"3e6e":function(e,a,t){},"3fcb":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("Custom Vue")]),t("Table"),t("div",{staticStyle:{height:"100px"}}),t("h1",[e._v("Vuetify")]),t("VuetifyTable"),t("div",{staticStyle:{height:"100px"}}),t("h1",[e._v("BryntumTable")]),t("BryntumTable")],1)},n=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",[t("table",{staticClass:"table"},[t("thead",{directives:[{name:"columns-resizable",rawName:"v-columns-resizable"}]},[t("draggable",{attrs:{tag:"tr"},model:{value:e.headers,callback:function(a){e.headers=a},expression:"headers"}},e._l(e.headers,(function(a){return t("th",{key:a,attrs:{scope:"col"}},[e._v(" "+e._s(a)+" ")])})),0)],1),t("draggable",{attrs:{tag:"tbody"},model:{value:e.list,callback:function(a){e.list=a},expression:"list"}},e._l(e.list,(function(a){return t("tr",{key:a.name},e._l(e.headers,(function(r){return t("td",{key:r},[e._v(" "+e._s(a[r])+" "),"sport"===r?t("v-btn",{attrs:{color:"primary",dark:""}},[e._v(" Click me ")]):e._e()],1)})),0)})),0)],1)]),t("div",{staticClass:"scroll"},[t("table",{staticClass:"table"},[t("thead",[t("th",{staticClass:"headcol"},[e._v("Fixed column")]),t("draggable",{attrs:{tag:"tr"},model:{value:e.headers,callback:function(a){e.headers=a},expression:"headers"}},e._l(e.headers,(function(a){return t("th",{key:a,attrs:{scope:"col"}},[e._v(" "+e._s(a)+" ")])})),0)],1),t("draggable",{attrs:{tag:"tbody"},model:{value:e.list,callback:function(a){e.list=a},expression:"list"}},e._l(e.list,(function(a){return t("tr",{key:a.name},[t("td",{staticClass:"headcol"},[e._v("HEAD COL")]),e._l(e.headers,(function(r){return t("td",{key:r},[e._v(" "+e._s(a[r])+" "),"name"===r?t("v-btn",{attrs:{color:"primary",dark:""}},[e._v(" Click me ")]):e._e()],1)}))],2)})),0)],1)])])},s=[],l=t("310e"),c=t.n(l),d=t("a9b2"),m=t.n(d);r["default"].use(m.a);var u={name:"table-example",display:"Table",order:9,components:{draggable:c.a},data:function(){return{headers:["id","name","sport","col1","col2","col3","col4","col5","col6","col7"],list:[{id:1,name:"Abby",sport:"basket",col1:"Col 1",col2:"Col 2",col3:"Col 3",col4:"Col 4",col5:"Col 5",col6:"Col 6",col7:"Col 7"},{id:2,name:"Brooke",sport:"foot",col1:"Col 1",col2:"Col 2",col3:"Col 3",col4:"Col 4",col5:"Col 5",col6:"Col 6",col7:"Col 7"},{id:3,name:"Courtenay",sport:"volley",col1:"Col 1",col2:"Col 2",col3:"Col 3",col4:"Col 4",col5:"Col 5",col6:"Col 6",col7:"Col 7"},{id:4,name:"David",sport:"rugby",col1:"Col 1",col2:"Col 2",col3:"Col 3",col4:"Col 4",col5:"Col 5",col6:"Col 6",col7:"Col 7"}],dragging:!1}}},f=u,g=(t("0534"),t("2877")),T=Object(g["a"])(f,i,s,!1,null,"56eda251",null),h=T.exports,p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h3",[e._v("Simple Table")]),t("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",{directives:[{name:"columns-resizable",rawName:"v-columns-resizable"}]},[t("draggable",{attrs:{tag:"tr"},model:{value:e.headers,callback:function(a){e.headers=a},expression:"headers"}},e._l(e.headers,(function(a){return t("th",{key:a.value,attrs:{scope:"col"}},[e._v(" "+e._s(a.text)+" ")])})),0)],1),t("draggable",{attrs:{tag:"tbody"},model:{value:e.desserts,callback:function(a){e.desserts=a},expression:"desserts"}},e._l(e.desserts,(function(a){return t("tr",{key:a.name},e._l(e.headers,(function(r){return t("td",{key:r.value},[e._v(" "+e._s(a[r.value])+" ")])})),0)})),0)]},proxy:!0}])}),t("h3",[e._v("Data Table")]),t("v-data-table",{attrs:{headers:e.headers,items:e.desserts,"sort-by":["name"],"sort-desc":[!1,!0]},scopedSlots:e._u([{key:"header",fn:function(a){return[t("thead",{directives:[{name:"columns-resizable",rawName:"v-columns-resizable"}]},[t("draggable",{attrs:{tag:"tr"},model:{value:e.headers,callback:function(a){e.headers=a},expression:"headers"}},e._l(a.props.headers,(function(a){return t("th",{key:a.value,attrs:{scope:"col"}},[e._v(" "+e._s(a.text)+" ")])})),0)],1)]}},{key:"item",fn:function(a){return[t("draggable",{attrs:{tag:"tr"},model:{value:e.desserts,callback:function(a){e.desserts=a},expression:"desserts"}},e._l(a.headers,(function(r){return t("td",{key:r.value},[e._v(" "+e._s(a.item[r.value])+" ")])})),0)]}}])}),t("h3",[e._v("Data Table + directive")]),t("v-data-table",{directives:[{name:"sortable-table",rawName:"v-sortable-table",value:{onEnd:e.sortTheHeadersAndUpdateTheKey},expression:"{onEnd:sortTheHeadersAndUpdateTheKey}"}],key:e.anIncreasingNumber,attrs:{headers:e.headers,items:e.desserts,"sort-by":["name"],"sort-desc":[!1,!0]}})],1)},k=[],Z=(t("4160"),t("a434"),t("159b"),t("5530")),y=t("8a23");function b(e,a){var t=e.classList.contains(a),r=new MutationObserver((function(e){for(var r=0;r<e.length;r++){var o=e[r];if("attributes"===o.type&&"class"===o.attributeName){var n=o.target.classList.contains(a);t!==n&&(t=n,n||o.target.classList.add("sortHandle"))}}}));r.observe(e,{attributes:!0})}var N={components:{draggable:c.a},data:function(){return{anIncreasingNumber:1,headers:[{text:"Dessert (100g serving)",value:"name",width:"200px",fixed:!0,sortable:!0},{text:"Calories",value:"calories",width:"200px",fixed:!0},{text:"Fat (g)",value:"fat",width:"300px"},{text:"Carbs (g)",value:"carbs",width:"300px"},{text:"Protein (g)",value:"protein",width:"300px"},{text:"New Protein (g)",value:"nprotein",width:"300px"},{text:"Iron (%)",value:"iron",width:"300px"},{text:"New Iron (%)",value:"niron",width:"300px"}],desserts:[{value:!1,name:"Orange Juice",category:"Beverage",calories:262,fat:16,carbs:23,protein:6,nprotein:6,iron:"7%",niron:"7%"},{value:!1,name:"Larabar",category:"Snack",calories:408,fat:3.2,carbs:87,protein:6.5,nprotein:6.5,iron:"45%",niron:"45%"},{value:!1,name:"Donut",category:"Breakfast",calories:452,fat:25,carbs:51,protein:4.9,nprotein:4.9,iron:"22%",niron:"22%"},{value:!1,name:"Bagel",category:"Breakfast",calories:999,fat:28,carbs:151,protein:2.9,nprotein:2.9,iron:"29%",niron:"29%"},{value:!1,name:"KitKat",category:"Snack",calories:518,fat:26,carbs:65,protein:7,nprotein:7,iron:"6%",niron:"6%"}]}},methods:{sortTheHeadersAndUpdateTheKey:function(e){var a=this.headers,t=e.oldIndex,r=e.newIndex;if(r>=a.length){var o=r-a.length+1;while(o--)a.push(void 0)}a.splice(r,0,a.splice(t,1)[0]),this.table=a,this.anIncreasingNumber+=1}},directives:{"sortable-table":{inserted:function(e,a){e.querySelectorAll("th").forEach((function(e){b(e,"sortHandle"),e.classList.add("sortHandle")})),y["default"].create(e.querySelector("tr"),a.value?Object(Z["a"])(Object(Z["a"])({},a.value),{},{handle:".sortHandle"}):{})}}}},w=N,v=(t("e79a"),Object(g["a"])(w,p,k,!1,null,"2990830b",null)),D=v.exports,B=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("grid",{ref:"grid",staticClass:"fill-height",attrs:{columns:e.headers,minHeight:e.minheight,data:e.list,selectionMode:e.selectionMode,columnLines:!1,searchFeature:!0},on:{selectionchange:e.onSelectionChange}})},R=[],x=t("2c29"),M=t("ce5b"),C=t.n(M),J=[{id:1,title:"Row 0",name:"Don A Taylor",firstName:"Don",surName:"Taylor",city:"Moscow",team:"Paris Tigers",age:30,food:"Salad",color:"Black",score:880,rank:99,start:"2019-02-05T23:00:00.000Z",finish:"2019-02-20T23:00:00.000Z",time:"2020-01-01T01:10:00.000Z",percent:13,done:!1,rating:2,relatedTo:3},{id:2,title:"Row 1",name:"John B Adams",firstName:"John",surName:"Adams",city:"Paris",team:"Washington Horses",age:64,food:"Bolognese",color:"Orange",score:850,rank:55,start:"2019-01-25T23:00:00.000Z",finish:"2019-02-22T23:00:00.000Z",time:"2020-01-01T19:00:00.000Z",percent:13,done:!1,rating:2,relatedTo:9},{id:3,title:"Row 2",name:"Doug C Jones",firstName:"Doug",surName:"Jones",city:"Stockholm",team:"New York Hens",age:30,food:"Pancake",color:"Pink",score:330,rank:100,start:"2019-02-07T23:00:00.000Z",finish:"2019-02-18T23:00:00.000Z",time:"2020-01-01T01:55:00.000Z",percent:85,done:!0,rating:3,relatedTo:3},{id:4,title:"Row 3",name:"James D Davis",firstName:"James",surName:"Davis",city:"Barcelona",team:"Moscow Lions",age:87,food:"Pancake",color:"Green",score:790,rank:33,start:"2019-01-26T23:00:00.000Z",finish:"2019-02-21T23:00:00.000Z",time:"2020-01-01T02:55:00.000Z",percent:30,done:!0,rating:0,relatedTo:11},{id:5,title:"Row 4",name:"Mike E Johnson",firstName:"Mike",surName:"Johnson",city:"Moscow",team:"New York Roosters",age:14,food:"Pancake",color:"Green",score:780,rank:60,start:"2019-02-04T23:00:00.000Z",finish:"2019-03-02T23:00:00.000Z",time:"2020-01-01T21:35:00.000Z",percent:26,done:!0,rating:2,relatedTo:12},{id:6,title:"Row 5",name:"Don F Johnson",firstName:"Don",surName:"Johnson",city:"Dubai",team:"Paris Tigers",age:18,food:"Fish n chips",color:"Red",score:640,rank:5,start:"2019-02-09T23:00:00.000Z",finish:"2019-02-21T23:00:00.000Z",time:"2020-01-01T16:40:00.000Z",percent:78,done:!0,rating:4,relatedTo:6},{id:7,title:"Row 6",name:"Jane G McGregor",firstName:"Jane",surName:"McGregor",city:"Stockholm",team:"Moscow Eagles",age:78,food:"Fish n chips",color:"Green",score:290,rank:3,start:"2019-01-24T23:00:00.000Z",finish:"2019-02-04T23:00:00.000Z",time:"2020-01-01T10:55:00.000Z",percent:64,done:!0,rating:0,relatedTo:12},{id:8,title:"Row 7",name:"Jane H Thomas",firstName:"Jane",surName:"Thomas",city:"New York",team:"Paris Cougars",age:65,food:"Fish n chips",color:"Black",score:400,rank:50,start:"2019-01-14T23:00:00.000Z",finish:"2019-02-06T23:00:00.000Z",time:"2020-01-01T19:00:00.000Z",percent:13,done:!1,rating:2,relatedTo:16},{id:9,title:"Row 8",name:"Lisa I Anderson",firstName:"Lisa",surName:"Anderson",city:"New York",team:"Stockholm Tigers",age:14,food:"Burger",color:"Orange",score:890,rank:70,start:"2019-01-24T23:00:00.000Z",finish:"2019-02-09T23:00:00.000Z",time:"2020-01-01T10:10:00.000Z",percent:30,done:!1,rating:3,relatedTo:11},{id:10,title:"Row 9",name:"Don J Thomas",firstName:"Don",surName:"Thomas",city:"Stockholm",team:"Barcelona Cougars",age:45,food:"Salad",color:"Black",score:10,rank:96,start:"2019-01-25T23:00:00.000Z",finish:"2019-02-11T23:00:00.000Z",time:"2020-01-01T06:30:00.000Z",percent:24,done:!1,rating:4,relatedTo:11},{id:11,title:"Row 10",name:"Doug K Jackson",firstName:"Doug",surName:"Jackson",city:"Barcelona",team:"Moscow Cats",age:16,food:"Fish n chips",color:"Red",score:270,rank:3,start:"2019-01-29T23:00:00.000Z",finish:"2019-02-07T23:00:00.000Z",time:"2020-01-01T07:15:00.000Z",percent:38,done:!0,rating:1,relatedTo:14},{id:12,title:"Row 11",name:"James L Ewans",firstName:"James",surName:"Ewans",city:"Moscow",team:"Dubai Dogs",age:30,food:"Salad",color:"Black",score:140,rank:87,start:"2019-01-25T23:00:00.000Z",finish:"2019-02-14T23:00:00.000Z",time:"2020-01-01T04:05:00.000Z",percent:64,done:!1,rating:1,relatedTo:18},{id:13,title:"Row 12",name:"Jenny M Brown",firstName:"Jenny",surName:"Brown",city:"Dubai",team:"Stockholm Eagles",age:56,food:"Waffles",color:"Orange",score:560,rank:69,start:"2019-01-07T23:00:00.000Z",finish:"2019-01-16T23:00:00.000Z",time:"2020-01-01T03:20:00.000Z",percent:99,done:!0,rating:4,relatedTo:14},{id:14,title:"Row 13",name:"Doug N Ewans",firstName:"Doug",surName:"Ewans",city:"Barcelona",team:"New York Dogs",age:61,food:"Pancake",color:"Teal",score:550,rank:34,start:"2019-01-19T23:00:00.000Z",finish:"2019-01-30T23:00:00.000Z",time:"2019-12-31T23:10:00.000Z",percent:97,done:!1,rating:2,relatedTo:20},{id:15,title:"Row 14",name:"Mike O Ewans",firstName:"Mike",surName:"Ewans",city:"Stockholm",team:"New York Roosters",age:78,food:"Burger",color:"Green",score:70,rank:43,start:"2019-02-19T23:00:00.000Z",finish:"2019-03-07T23:00:00.000Z",time:"2020-01-01T08:30:00.000Z",percent:75,done:!1,rating:0,relatedTo:22},{id:16,title:"Row 15",name:"Linda P McGregor",firstName:"Linda",surName:"McGregor",city:"Washington",team:"Stockholm Tigers",age:72,food:"Mac n cheese",color:"Purple",score:60,rank:87,start:"2019-01-23T23:00:00.000Z",finish:"2019-02-22T23:00:00.000Z",time:"2020-01-01T07:25:00.000Z",percent:15,done:!0,rating:1,relatedTo:20},{id:17,title:"Row 16",name:"Jenny Q Jones",firstName:"Jenny",surName:"Jones",city:"Stockholm",team:"Barcelona Panthers",age:46,food:"Carbonara",color:"Green",score:290,rank:53,start:"2019-02-07T23:00:00.000Z",finish:"2019-03-10T23:00:00.000Z",time:"2020-01-01T08:00:00.000Z",percent:51,done:!0,rating:4,relatedTo:21},{id:18,title:"Row 17",name:"Linda R Taylor",firstName:"Linda",surName:"Taylor",city:"Paris",team:"Moscow Ducks",age:82,food:"Carbonara",color:"Orange",score:390,rank:16,start:"2019-01-08T23:00:00.000Z",finish:"2019-02-08T23:00:00.000Z",time:"2020-01-01T19:30:00.000Z",percent:26,done:!1,rating:1,relatedTo:20},{id:19,title:"Row 18",name:"Daniel S Wilson",firstName:"Daniel",surName:"Wilson",city:"Paris",team:"Dubai Ducks",age:39,food:"Fish n chips",color:"Green",score:80,rank:49,start:"2019-02-25T23:00:00.000Z",finish:"2019-03-25T23:00:00.000Z",time:"2020-01-01T03:50:00.000Z",percent:40,done:!1,rating:0,relatedTo:21},{id:20,title:"Row 19",name:"Melissa T Johnson",firstName:"Melissa",surName:"Johnson",city:"Barcelona",team:"Barcelona Cougars",age:73,food:"Mac n cheese",color:"Purple",score:450,rank:77,start:"2019-02-13T23:00:00.000Z",finish:"2019-02-17T23:00:00.000Z",time:"2020-01-01T18:20:00.000Z",percent:47,done:!0,rating:4,relatedTo:25},{id:21,title:"Row 20",name:"Karen U McGregor",firstName:"Karen",surName:"McGregor",city:"Barcelona",team:"Stockholm Ducks",age:88,food:"Salad",color:"Black",score:690,rank:80,start:"2019-02-09T23:00:00.000Z",finish:"2019-02-13T23:00:00.000Z",time:"2020-01-01T03:45:00.000Z",percent:0,done:!1,rating:0,relatedTo:23},{id:22,title:"Row 21",name:"Daniel V Thomas",firstName:"Daniel",surName:"Thomas",city:"Moscow",team:"Washington Lions",age:41,food:"Bolognese",color:"Orange",score:620,rank:1,start:"2019-01-13T23:00:00.000Z",finish:"2019-02-10T23:00:00.000Z",time:"2020-01-01T01:25:00.000Z",percent:63,done:!0,rating:4,relatedTo:23},{id:23,title:"Row 22",name:"Don W Jackson",firstName:"Don",surName:"Jackson",city:"Moscow",team:"Stockholm Lions",age:15,food:"Pancake",color:"Pink",score:570,rank:11,start:"2019-01-02T23:00:00.000Z",finish:"2019-01-21T23:00:00.000Z",time:"2020-01-01T13:00:00.000Z",percent:26,done:!1,rating:0,relatedTo:25},{id:24,title:"Row 23",name:"Don X Taylor",firstName:"Don",surName:"Taylor",city:"Paris",team:"Paris Lions",age:55,food:"Pancake",color:"Green",score:0,rank:90,start:"2019-02-26T23:00:00.000Z",finish:"2019-03-01T23:00:00.000Z",time:"2020-01-01T13:00:00.000Z",percent:43,done:!1,rating:4,relatedTo:31},{id:25,title:"Row 24",name:"Jane Y Taylor",firstName:"Jane",surName:"Taylor",city:"Paris",team:"Paris Eagles",age:14,food:"Pancake",color:"Green",score:600,rank:30,start:"2019-02-03T23:00:00.000Z",finish:"2019-02-25T23:00:00.000Z",time:"2020-01-01T17:55:00.000Z",percent:23,done:!1,rating:0,relatedTo:25},{id:26,title:"Row 25",name:"Daniel A Adams",firstName:"Daniel",surName:"Adams",city:"New York",team:"Barcelona Tigers",age:61,food:"Fish n chips",color:"Red",score:470,rank:24,start:"2019-02-02T23:00:00.000Z",finish:"2019-02-10T23:00:00.000Z",time:"2020-01-01T19:00:00.000Z",percent:14,done:!0,rating:2,relatedTo:33},{id:27,title:"Row 26",name:"Jane B Brown",firstName:"Jane",surName:"Brown",city:"San Francisco",team:"Barcelona Horses",age:51,food:"Fish n chips",color:"Green",score:740,rank:77,start:"2019-01-09T23:00:00.000Z",finish:"2019-02-02T23:00:00.000Z",time:"2020-01-01T05:00:00.000Z",percent:16,done:!1,rating:4,relatedTo:34},{id:28,title:"Row 27",name:"Mike C More",firstName:"Mike",surName:"More",city:"Dubai",team:"Moscow Hens",age:43,food:"Fish n chips",color:"Black",score:430,rank:50,start:"2019-02-06T23:00:00.000Z",finish:"2019-02-08T23:00:00.000Z",time:"2020-01-01T19:25:00.000Z",percent:64,done:!1,rating:3,relatedTo:28},{id:29,title:"Row 28",name:"Lisa D More",firstName:"Lisa",surName:"More",city:"Barcelona",team:"Moscow Lions",age:82,food:"Burger",color:"Orange",score:900,rank:75,start:"2019-01-11T23:00:00.000Z",finish:"2019-02-05T23:00:00.000Z",time:"2020-01-01T06:10:00.000Z",percent:45,done:!1,rating:1,relatedTo:34},{id:30,title:"Row 29",name:"Mary E Brown",firstName:"Mary",surName:"Brown",city:"Stockholm",team:"Paris Roosters",age:42,food:"Salad",color:"Black",score:980,rank:57,start:"2019-01-08T23:00:00.000Z",finish:"2019-01-27T23:00:00.000Z",time:"2019-12-31T23:35:00.000Z",percent:19,done:!1,rating:3,relatedTo:38},{id:31,title:"Row 30",name:"David F McGregor",firstName:"David",surName:"McGregor",city:"Barcelona",team:"Paris Tigers",age:35,food:"Fish n chips",color:"Red",score:460,rank:8,start:"2019-01-25T23:00:00.000Z",finish:"2019-02-18T23:00:00.000Z",time:"2020-01-01T05:05:00.000Z",percent:90,done:!1,rating:0,relatedTo:33},{id:32,title:"Row 31",name:"Don G Ewans",firstName:"Don",surName:"Ewans",city:"Dubai",team:"New York Eagles",age:15,food:"Salad",color:"Black",score:740,rank:4,start:"2019-01-01T23:00:00.000Z",finish:"2019-01-12T23:00:00.000Z",time:"2020-01-01T09:35:00.000Z",percent:81,done:!1,rating:1,relatedTo:33},{id:33,title:"Row 32",name:"Adam H More",firstName:"Adam",surName:"More",city:"Moscow",team:"San Francisco Cougars",age:16,food:"Waffles",color:"Orange",score:210,rank:100,start:"2019-01-24T23:00:00.000Z",finish:"2019-01-31T23:00:00.000Z",time:"2020-01-01T22:55:00.000Z",percent:21,done:!1,rating:0,relatedTo:36},{id:34,title:"Row 33",name:"Linda I Adams",firstName:"Linda",surName:"Adams",city:"Barcelona",team:"Dubai Tigers",age:53,food:"Pancake",color:"Teal",score:170,rank:34,start:"2019-02-16T23:00:00.000Z",finish:"2019-02-19T23:00:00.000Z",time:"2020-01-01T13:00:00.000Z",percent:11,done:!0,rating:2,relatedTo:40},{id:35,title:"Row 34",name:"Mike J Brown",firstName:"Mike",surName:"Brown",city:"Paris",team:"Barcelona Cougars",age:29,food:"Burger",color:"Green",score:420,rank:55,start:"2019-02-09T23:00:00.000Z",finish:"2019-03-04T23:00:00.000Z",time:"2020-01-01T03:35:00.000Z",percent:45,done:!1,rating:2,relatedTo:36},{id:36,title:"Row 35",name:"Don K Jones",firstName:"Don",surName:"Jones",city:"Dubai",team:"Stockholm Cats",age:24,food:"Mac n cheese",color:"Purple",score:590,rank:19,start:"2019-01-29T23:00:00.000Z",finish:"2019-02-05T23:00:00.000Z",time:"2020-01-01T21:00:00.000Z",percent:21,done:!0,rating:4,relatedTo:42},{id:37,title:"Row 36",name:"Barbara L Anderson",firstName:"Barbara",surName:"Anderson",city:"Paris",team:"Barcelona Dogs",age:59,food:"Carbonara",color:"Green",score:730,rank:76,start:"2019-01-15T23:00:00.000Z",finish:"2019-01-24T23:00:00.000Z",time:"2020-01-01T08:10:00.000Z",percent:11,done:!1,rating:3,relatedTo:44},{id:38,title:"Row 37",name:"Doug M Thomas",firstName:"Doug",surName:"Thomas",city:"Washington",team:"Dubai Eagles",age:36,food:"Carbonara",color:"Orange",score:350,rank:94,start:"2019-02-15T23:00:00.000Z",finish:"2019-03-11T23:00:00.000Z",time:"2020-01-01T04:55:00.000Z",percent:57,done:!1,rating:2,relatedTo:42},{id:39,title:"Row 38",name:"Doug N Wilson",firstName:"Doug",surName:"Wilson",city:"New York",team:"Moscow Dogs",age:72,food:"Fish n chips",color:"Green",score:530,rank:54,start:"2019-02-07T23:00:00.000Z",finish:"2019-02-25T23:00:00.000Z",time:"2020-01-01T17:25:00.000Z",percent:42,done:!0,rating:1,relatedTo:43},{id:40,title:"Row 39",name:"Karen O Brown",firstName:"Karen",surName:"Brown",city:"Dubai",team:"Barcelona Roosters",age:62,food:"Mac n cheese",color:"Purple",score:340,rank:23,start:"2019-01-20T23:00:00.000Z",finish:"2019-02-11T23:00:00.000Z",time:"2020-01-01T22:15:00.000Z",percent:3,done:!0,rating:0,relatedTo:42},{id:41,title:"Row 40",name:"Adam P Johnson",firstName:"Adam",surName:"Johnson",city:"Washington",team:"Paris Tigers",age:80,food:"Salad",color:"Black",score:450,rank:36,start:"2019-02-03T23:00:00.000Z",finish:"2019-02-22T23:00:00.000Z",time:"2020-01-01T20:10:00.000Z",percent:18,done:!1,rating:1,relatedTo:43},{id:42,title:"Row 41",name:"Adam Q Jackson",firstName:"Adam",surName:"Jackson",city:"Paris",team:"Dubai Panthers",age:89,food:"Bolognese",color:"Orange",score:370,rank:83,start:"2019-02-15T23:00:00.000Z",finish:"2019-02-24T23:00:00.000Z",time:"2020-01-01T03:05:00.000Z",percent:41,done:!1,rating:4,relatedTo:47},{id:43,title:"Row 42",name:"Jenny R Williams",firstName:"Jenny",surName:"Williams",city:"Washington",team:"Paris Ducks",age:81,food:"Pancake",color:"Pink",score:290,rank:10,start:"2019-02-23T23:00:00.000Z",finish:"2019-03-02T23:00:00.000Z",time:"2020-01-01T03:35:00.000Z",percent:78,done:!0,rating:1,relatedTo:45},{id:44,title:"Row 43",name:"John S Miller",firstName:"John",surName:"Miller",city:"Paris",team:"Washington Ducks",age:57,food:"Pancake",color:"Green",score:760,rank:1,start:"2019-01-26T23:00:00.000Z",finish:"2019-02-22T23:00:00.000Z",time:"2020-01-01T20:05:00.000Z",percent:98,done:!1,rating:2,relatedTo:45},{id:45,title:"Row 44",name:"Barbara T Jackson",firstName:"Barbara",surName:"Jackson",city:"San Francisco",team:"New York Cougars",age:19,food:"Pancake",color:"Green",score:370,rank:89,start:"2019-02-05T23:00:00.000Z",finish:"2019-03-01T23:00:00.000Z",time:"2020-01-01T09:20:00.000Z",percent:49,done:!1,rating:1,relatedTo:47},{id:46,title:"Row 45",name:"James U Smith",firstName:"James",surName:"Smith",city:"Moscow",team:"Dubai Ducks",age:38,food:"Fish n chips",color:"Red",score:950,rank:8,start:"2019-02-28T23:00:00.000Z",finish:"2019-03-23T23:00:00.000Z",time:"2020-01-01T22:55:00.000Z",percent:73,done:!0,rating:2,relatedTo:49},{id:47,title:"Row 46",name:"Doug V McGregor",firstName:"Doug",surName:"McGregor",city:"Dubai",team:"Washington Lions",age:56,food:"Fish n chips",color:"Green",score:360,rank:22,start:"2019-02-18T23:00:00.000Z",finish:"2019-03-18T23:00:00.000Z",time:"2020-01-01T18:40:00.000Z",percent:77,done:!1,rating:3,relatedTo:47},{id:48,title:"Row 47",name:"Jane W Anderson",firstName:"Jane",surName:"Anderson",city:"Barcelona",team:"Paris Lions",age:41,food:"Fish n chips",color:"Black",score:280,rank:20,start:"2019-02-23T23:00:00.000Z",finish:"2019-03-18T23:00:00.000Z",time:"2020-01-01T22:30:00.000Z",percent:53,done:!1,rating:0,relatedTo:49},{id:49,title:"Row 48",name:"Jenny X Anderson",firstName:"Jenny",surName:"Anderson",city:"San Francisco",team:"Washington Lions",age:32,food:"Burger",color:"Orange",score:540,rank:55,start:"2019-01-22T23:00:00.000Z",finish:"2019-02-12T23:00:00.000Z",time:"2020-01-01T22:10:00.000Z",percent:72,done:!0,rating:2,relatedTo:49},{id:50,title:"Row 49",name:"Mary Y Davis",firstName:"Mary",surName:"Davis",city:"Stockholm",team:"Paris Eagles",age:11,food:"Salad",color:"Black",score:530,rank:71,start:"2019-02-09T23:00:00.000Z",finish:"2019-02-16T23:00:00.000Z",time:"2019-12-31T23:10:00.000Z",percent:39,done:!1,rating:2,relatedTo:49}];r["default"].use(C.a);var _={name:"bryntum-table-example",display:"BryntumTable",components:{Grid:x["a"]},data:function(){return{selectionMode:{row:!0},minheight:"20em",headers:[{text:"First name",field:"firstName",flex:1,fixed:!0},{text:"Surname",field:"surName",flex:1},{text:"Team",field:"team",flex:1,type:"template",template:function(){return"<button>click me</button>"}},{text:"Favorite color",field:"color",flex:1},{text:"Age",field:"age",flex:1,type:"number"},{text:"Start",field:"start",type:"date",flex:1}],list:J}},methods:{onSelectionChange:function(e){var a=e.action;console.log("Action",a)}}},P=_,S=(t("2e36"),Object(g["a"])(P,B,R,!1,null,"bb3bd3ee",null)),O=S.exports,A={name:"App",components:{Table:h,VuetifyTable:D,BryntumTable:O}},G=A,L=(t("034f"),Object(g["a"])(G,o,n,!1,null,null,null)),F=L.exports;t("bf40");r["default"].use(C.a),r["default"].use(m.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(F)},vuetify:new C.a({})}).$mount("#app")},"85ec":function(e,a,t){},cfda:function(e,a,t){},e79a:function(e,a,t){"use strict";var r=t("3e6e"),o=t.n(r);o.a}});
//# sourceMappingURL=app.6efb8ff5.js.map