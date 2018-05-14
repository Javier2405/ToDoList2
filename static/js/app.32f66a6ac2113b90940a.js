webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"nav-wrapper green"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("To Do List")])],1)])])},staticRenderFns:[]},i={name:"App",components:{Navbar:a("VU/8")(null,s,!1,null,null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},o=a("VU/8")(i,r,!1,null,null,null).exports,l=a("/ocq"),c=a("kxiW"),u=a.n(c),d=(a("881v"),u.a.initializeApp({apiKey:"AIzaSyDhnHNoL0HDvmYajgOau9y29EwI-uNdh34",authDomain:"todolist-bea94.firebaseapp.com",databaseURL:"https://todolist-bea94.firebaseio.com",projectId:"todolist-bea94",storageBucket:"todolist-bea94.appspot.com",messagingSenderId:"991381005928"}));u.a.firestore().settings({timestampsInSnapshots:!0});var m=d.firestore(),p={name:"dashboard",data:function(){return{tasks:[]}},created:function(){var t=this;m.collection("tasks").orderBy("task_number").get().then(function(e){e.forEach(function(e){var a={id:e.id,task_name:e.data().task_name,task_number:e.data().task_number,completed:e.data().completed};t.tasks.push(a)})})},methods:{deleteTask:function(t){confirm("Are you sure?")&&(console.log(t.task_name),console.log(t.task_number),console.log(t.completed),m.collection("tasks").doc(t.id).delete().then(function(){}))},addImage:function(){var t=null;$.get("http://api.giphy.com/v1/gifs/search?q=unicorn&api_key=DBCfPhi0wvbUxmmKfZ9Iueib8CikwIJP&limit=100").done(function(e){for(var a=0;a<e.data.length;a++){var n=e.data[a];t=n.images.original.url}console.log("gifID",t);var s=document.createElement("IMG");s.setAttribute("src",t),console.log("we did it",t),document.getElementById("dashboard").appendChild(s),console.log("gifID2",t)})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.tasks,function(e){return a("li",{key:e.id,staticClass:"collection-item"},[t._v("\n      "+t._s(e.task_number)+": "+t._s(e.task_name)+"\n\n      "),a("button",{staticClass:"btn green",staticStyle:{float:"right"},on:{click:function(a){t.deleteTask(e),t.addImage()}}},[t._v("\n      Complete task")]),t._v(" "),a("input",{attrs:{type:"hidden",role:"uploadcare-uploader",name:"content","data-public-key":"demopublickey","data-image-shrink":"falsexfalse","data-preview-step":"true","data-multiple":"true"}})])})],2),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating\n    btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Tasks")])])}]},_=a("VU/8")(p,v,!1,null,null,null).exports,f={name:"new-task",data:function(){return{task_number:null,task_name:null,completed:!1}},methods:{saveTask:function(){var t=this;m.collection("tasks").add({task_number:this.task_number,task_name:this.task_name,completed:!1}).then(function(e){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-task"}},[a("h3",[t._v("New Task")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveTask(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task_number,expression:"task_number"}],attrs:{type:"text",required:""},domProps:{value:t.task_number},on:{input:function(e){e.target.composing||(t.task_number=e.target.value)}}}),t._v(" "),a("label",[t._v("Task #")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task_name,expression:"task_name"}],attrs:{type:"text",required:""},domProps:{value:t.task_name},on:{input:function(e){e.target.composing||(t.task_name=e.target.value)}}}),t._v(" "),a("label",[t._v("Task Name")])])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn red",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},k=a("VU/8")(f,h,!1,null,null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"gif"}},[e("h3",[this._v("Task completed")]),this._v(" "),e("ul",{staticClass:"container",attrs:{id:"cont"}},[this._v("\n    Congratulations\n  ")])])}]},g=a("VU/8")({name:"auth",data:function(){return{}}},b,!1,null,null,null).exports;n.a.use(l.a);var C=new l.a({routes:[{path:"/",name:"dashboard",component:_},{path:"/new",name:"new-task",component:k},{path:"/task_completed",name:"gif",component:g}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:C,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.32f66a6ac2113b90940a.js.map