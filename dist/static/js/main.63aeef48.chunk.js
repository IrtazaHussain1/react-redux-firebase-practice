(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{214:function(e,t,a){e.exports=a(405)},219:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(86),i=a.n(c),l=(a(219),a(5)),o=a(32),s=a(6),u=function(e){return console.log(e),function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){t({type:"LOGIN_ERROR",err:e})}))}},m=Object(s.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials))))})),d=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signup"},"SignUp")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signin"},"SignIn")))},h=Object(s.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(m,{profile:a}):r.a.createElement(d,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo"},"MarioPlan"),n))})),p=a(26),E=a(27),f=a(30),b=a(28),g=a(31),N=a(49),v=a.n(N),j=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content),r.a.createElement("p",null,"Posted By ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},v()(t.createdAt.toDate()).calendar())))},O=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(l.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(j,{project:e}))})))},y=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notification"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},v()(e.time.toDate()).fromNow()))}))))))},S=a(18),C=a(13),w=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(O,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(y,{notifications:n})))):r.a.createElement(o.a,{to:"/signin"})}}]),t}(n.Component),R=Object(C.d)(Object(s.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(S.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(w),F=Object(C.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(S.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-detail"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey=text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,v()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Project...")):r.a.createElement(o.a,{to:"/signin"})})),I=a(29),B=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"SignIn"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"SignIn")),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null)))}}]),t}(n.Component),P=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e(u(t))}}}))(B),x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(o.a,{to:"/signin"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"SignUp"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"SignUp")),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)))}}]),t}(n.Component),k=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(a){return l.collection("users").doc(a.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]}).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(x),U=a(40),A=function(e){return function(t,a,n){var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(U.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}},_=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{className:"materialize-textarea",id:"content",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(o.a,{to:"/signin"})}}]),t}(n.Component),T=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(A(t))}}}))(_);var L=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:R}),r.a.createElement(o.b,{path:"/project/:id",component:F}),r.a.createElement(o.b,{path:"/signin",component:P}),r.a.createElement(o.b,{path:"/signup",component:k}),r.a.createElement(o.b,{path:"/create",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G={authError:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("success"),Object(U.a)({},e,{authError:null});case"LOGIN_ERROR":return console.log("Error login"),Object(U.a)({},e,{authError:"Login Failed"});case"SIGNOUT_SUCCESS":return console.log("Signed Out successfully"),e;case"SIGNUP_SUCCESS":return console.log("SignUp Success"),Object(U.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("Error Signing up"),Object(U.a)({},e,{authError:t.err.message});default:return e}},D={projects:[{id:1,title:"Test1",content:"Blah Blah Blah Blah"},{id:2,title:"Test2",content:"Blah Blah Blah Blah"},{id:3,title:"Test3",content:"Blah Blah Blah Blah"},{id:4,title:"Test4",content:"Blah Blah Blah Blah"},{id:5,title:"Test5",content:"Blah Blah Blah Blah"}]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("Project Created",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("Project create error: ".action.err),e;default:return e}},W=a(50),K=Object(C.c)({auth:z,project:J,firestore:W.firestoreReducer,firebase:S.firebaseReducer}),M=a(213),Q=(a(208),a(88)),Y=a.n(Q);a(403);Y.a.initializeApp({apiKey:"AIzaSyAcb4IhbR7ej28YLe14i033NWu4-dABrsQ",authDomain:"marioplan-c6c07.firebaseapp.com",databaseURL:"https://marioplan-c6c07.firebaseio.com",projectId:"marioplan-c6c07",storageBucket:"marioplan-c6c07.appspot.com",messagingSenderId:"398070425354",appId:"1:398070425354:web:287ac4aba043be068c7cf3"}),Y.a.firestore().settings({timestampsInSnapshots:!0});var $=Y.a,q=Object(C.e)(K,Object(C.d)(Object(C.a)(M.a.withExtraArgument({getFirebase:S.getFirebase,getFirestore:W.getFirestore})),Object(W.reduxFirestore)($))),H={firebase:$,config:{userProfile:"users",attachAuthIsReady:!0,useFirestoreForProfile:!0},dispatch:q.dispatch,createFirestoreInstance:W.createFirestoreInstance};i.a.render(r.a.createElement(s.a,{store:q},r.a.createElement(S.ReactReduxFirebaseProvider,H,r.a.createElement((function(e){var t=e.children,a=Object(s.c)((function(e){return e.firebase.auth}));return Object(S.isLoaded)(a)?t:r.a.createElement("div",{className:"container center"},"Loading Screen...")}),null,r.a.createElement(L,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[214,1,2]]]);
//# sourceMappingURL=main.63aeef48.chunk.js.map