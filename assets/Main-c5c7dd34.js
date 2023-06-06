import{o as s,c as r,a as c,F as k,b as e,r as I,w as b,d as G,e as V,u as B,l as U,t as g,g as q,n as j,p as A,f as F,h as T,v as E,i as N,K as M,j as $,y as J,k as L,I as K,m as R,q as Q,s as w,x as X,z as H,A as Y}from"./index-3c604b32.js";import{N as Z}from"./Navbar-44c6e0eb.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const ee=e("section",{id:"hero"},null,-1),te={__name:"Home",setup(t){return(d,n)=>(s(),r(k,null,[c(Z),ee],64))}};const D=t=>(A("data-v-bd08aab9"),t=t(),F(),t),ne={class:"event-catcher"},le=["onClick"],se={id:"nav",class:"nav"},ae={class:"nav-list"},oe={class:"logo"},ce=D(()=>e("span",null,"Training Lab",-1)),ie=D(()=>e("hr",null,null,-1)),ue=["onClick"],de={class:"bottom"},re={class:"nav-item"},_e=D(()=>e("span",null,"Logout",-1)),pe=D(()=>e("hr",null,null,-1)),fe={class:"account"},ve={class:"nav-link",href:""},me=D(()=>e("p",null,"Logged as",-1)),he={class:"email"},ke={__name:"Sidebar",props:{pages:{type:Array,default:[]},selectedPageIndex:{type:Number,default:0},selectPageIndex:{type:Function,default:()=>{}}},setup(t){function d(){const n=document.getElementById("nav"),i=document.querySelector(".toggle-btn");n.classList.toggle("active"),i.classList.toggle("active")}return window.addEventListener("click",function(n){if(!n.target.closest(".event-catcher")){const i=document.getElementById("nav"),u=document.querySelector(".toggle-btn");i&&i.classList.contains("active")&&i.classList.remove("active"),u&&u.classList.contains("active")&&u.classList.remove("active")}}),(n,i)=>{const u=I("font-awesome-icon"),f=I("RouterLink");return s(),r("div",ne,[e("a",{onClick:b(d,["prevent"]),class:"toggle-btn"},[c(u,{icon:"fa-solid fa-angle-right"})],8,le),e("nav",se,[e("ul",ae,[e("li",oe,[c(f,{to:"/",class:"nav-link"},{default:G(()=>[c(u,{icon:"fa-solid fa-dumbbell"}),ce]),_:1})]),ie,(s(!0),r(k,null,V(t.pages,(_,h)=>(s(),r("li",{key:h,class:"nav-item"},[e("a",{class:j(["nav-link",{active:t.selectedPageIndex==h}]),onClick:b(v=>t.selectPageIndex(h),["prevent"])},[c(u,{icon:"fa-solid "+_.icon},null,8,["icon"]),e("span",null,g(_.title),1)],10,ue)]))),128)),e("ul",de,[e("li",re,[e("a",{class:"nav-link",onClick:i[0]||(i[0]=b((..._)=>B(U)&&B(U)(..._),["prevent"]))},[c(u,{icon:"fa-solid fa-sign-out-alt"}),_e])]),pe,e("li",fe,[e("p",ve,[c(u,{icon:"fa-solid fa-circle-user",size:"lg"}),e("span",null,[me,e("p",he,g(B(q)().currentUser.email),1)])])])])])])])}}},ge=C(ke,[["__scopeId","data-v-bd08aab9"]]);const ye=t=>(A("data-v-367aea69"),t=t(),F(),t),be={class:"content title"},xe=ye(()=>e("hr",null,null,-1)),$e={__name:"Header",props:{title:{type:String,default:"Title"}},setup(t){return(d,n)=>(s(),r(k,null,[e("h1",be,g(t.title),1),xe],64))}},O=C($e,[["__scopeId","data-v-367aea69"]]);const we={__name:"IconButton",props:{icon:{type:String,default:"fa-xmark"},iconSize:{type:String,default:"fa-lg"},backgroundColorVar:{type:String,default:"color60"},onClick:{type:Function,default:()=>{}}},setup(t){return(d,n)=>{const i=I("font-awesome-icon");return s(),r("a",{onClick:n[0]||(n[0]=b((...u)=>t.onClick&&t.onClick(...u),["prevent"])),class:j(["icon-button",t.backgroundColorVar])},[c(i,{icon:["fa-solid",t.icon],size:t.iconSize},null,8,["icon","size"])],2)}}},x=C(we,[["__scopeId","data-v-1ffa6622"]]);const Ce={class:"plan-item"},Pe={class:"plan-section"},Ie={class:"plan-indicators"},Se={class:"plan-section"},Ve={class:"text"},Le={__name:"PlanTile",props:{plan:{type:Object,default:{}},selectPlan:{type:Function,default:()=>{}},totalVolume:{type:Number,default:0}},setup(t){const d=t;function n(f){N($(d.plan.id),{title:f===""?M():f})}function i(f){N($(d.plan.id),{description:f===""?M():f})}function u(){J($(d.plan.id))}return(f,_)=>{const h=I("font-awesome-icon");return s(),r("li",Ce,[e("div",Pe,[e("div",Ie,[e("span",null,[c(h,{icon:"fa-solid fa-calendar-day"}),e("p",null,g(t.plan.days?t.plan.days.length:0),1)]),e("span",null,[c(h,{icon:"fa-solid fa-bolt"}),e("p",null,g(t.plan.days?t.totalVolume:0),1)])]),c(x,{onClick:b(u,["prevent"]),icon:"fa-trash-can"},null,8,["onClick"])]),e("div",Se,[e("div",Ve,[T(e("input",{"onUpdate:modelValue":_[0]||(_[0]=v=>t.plan.title=v),class:"plan-title",type:"text",maxlength:"16",spellcheck:"false",onInput:_[1]||(_[1]=v=>n(v.target.value))},null,544),[[E,t.plan.title]]),T(e("input",{"onUpdate:modelValue":_[2]||(_[2]=v=>t.plan.description=v),class:"plan-description",type:"text",maxlength:"32",spellcheck:"false",onInput:_[3]||(_[3]=v=>i(v.target.value))},null,544),[[E,t.plan.description]])]),c(x,{onClick:()=>t.selectPlan(t.plan.id),icon:"fa-angle-right"},null,8,["onClick"])])])}}},De=C(Le,[["__scopeId","data-v-52aa4ddb"]]);const Be=t=>(A("data-v-a94aa313"),t=t(),F(),t),ze={class:"day-list"},Te={class:"index"},Ee={key:0,class:"workout-list"},Ne={class:"exercise-list"},Ae={class:"exercise-item"},Fe=["onInput"],We={class:"right"},Ue={class:"total-volume"},Me=Be(()=>e("hr",null,null,-1)),He=["onInput"],qe={class:"right"},je=["onUpdate:modelValue"],Ke={class:"exercise-item"},Re=["onClick"],Oe=["onClick"],Ge={__name:"DayList",props:{planId:{type:String,default:""},totalWorkoutVolume:{type:Function,default:()=>{}},clearSelectedPlan:{type:Function,default:()=>{}}},setup(t){const d=t,n=L({});function i(){let l=n.value.days;l?l.push({}):l=[{}],n.value.days=l}function u(l){n.value.days=n.value.days.filter(a=>a!==l),n.value.days.length===0&&delete n.value.days}function f(l){let a=n.value.days[l];const o={title:"New Workout"};a.workouts?a.workouts.push(o):a.workouts=[o],n.value.days[l]=a}function _(l,a){let o=n.value.days[l];o.workouts=o.workouts.filter(m=>m!==a),o.workouts.length===0&&delete o.workouts,n.value.days[l]=o}function h(l,a){let o=n.value.days[l].workouts[a].exercises;const m={title:"New Exercise",volume:1};o?o.push(m):o=[m],n.value.days[l].workouts[a].exercises=o}function v(l,a,o){n.value.days[l].workouts[a].exercises=n.value.days[l].workouts[a].exercises.filter(m=>m!==o)}function p(){Q($(d.planId),n.value),d.clearSelectedPlan()}return K($(d.planId),l=>{n.value=l.data()}),(l,a)=>{const o=I("font-awesome-icon");return s(),r(k,null,[e("ul",ze,[(s(!0),r(k,null,V(n.value.days,(m,S)=>(s(),r("li",{key:m,class:"day-item"},[e("p",Te,"#"+g(S+1),1),m.workouts?(s(),r("ul",Ee,[(s(!0),r(k,null,V(m.workouts,(P,W)=>(s(),r("li",{key:P,class:"workout-item"},[e("ul",Ne,[e("li",Ae,[e("p",{class:"contenteditable workout-title",role:"textbox",spellcheck:"false",onInput:y=>{P.title=y.target.innerText},contenteditable:""},g(P.title),41,Fe),e("div",We,[e("span",Ue,g(t.totalWorkoutVolume(P)),1),c(x,{"on-click":()=>_(S,P),icon:"fa-xmark","background-color-var":"color30"},null,8,["on-click"])])]),Me,(s(!0),r(k,null,V(P.exercises,y=>(s(),r("li",{key:y,class:"exercise-item"},[e("p",{class:"contenteditable exercise-title",role:"textbox",spellcheck:"false",onInput:z=>{y.title=z.target.innerText},contenteditable:""},g(y.title),41,He),e("div",qe,[T(e("input",{"onUpdate:modelValue":z=>y.volume=z,class:"volume",type:"number",min:"1",max:"99"},null,8,je),[[E,y.volume]]),c(x,{"on-click":()=>v(S,W,y),icon:"fa-minus","background-color-var":"color30"},null,8,["on-click"])])]))),128)),e("li",Ke,[c(x,{"on-click":()=>h(S,W),icon:"fa-plus","background-color-var":"color30"},null,8,["on-click"])])])]))),128))])):R("",!0),c(x,{"on-click":()=>f(S),icon:"fa-plus"},null,8,["on-click"]),c(x,{"on-click":()=>u(m),class:"delete-day-btn",icon:"fa-trash-can"},null,8,["on-click"])]))),128)),e("a",{onClick:b(i,["prevent"]),class:"add-day-button"},[c(o,{icon:"fa-solid fa-plus",size:"xl"})],8,Re)]),e("a",{onClick:b(p,["prevent"]),class:"floating-btn"},[c(o,{icon:"fa-solid fa-save",size:"lg"})],8,Oe)],64)}}},Je=C(Ge,[["__scopeId","data-v-a94aa313"]]);const Qe={class:"content"},Xe={key:0,class:"plan-list"},Ye=["onClick"],Ze={class:"new-plan-button"},et={__name:"Dashboard",setup(t){const d=L([]),n=L(null),i=L(null);function u(){X(H,{title:"My plan",description:"My description"}).then(p=>{N($(p.id),{id:p.id})})}function f(p){n.value=p,Y($(p)).then(l=>{i.value=l.data().title})}function _(){n.value=null}function h(p){let l=0;return p.days&&p.days.map(a=>{a.workouts&&a.workouts.map(o=>{l+=v(o)})}),l}function v(p){let l=0;return p.exercises&&p.exercises.map(a=>{l+=a.volume}),l}return K(H,p=>{let l=[];p.forEach(a=>{l.push(a.data())}),d.value=l}),(p,l)=>{const a=I("font-awesome-icon");return s(),r(k,null,[c(O,{title:i.value!=null?i.value:"Dashboard"},null,8,["title"]),e("div",Qe,[n.value==null?(s(),r("ul",Xe,[(s(!0),r(k,null,V(d.value,o=>(s(),w(De,{key:o.id,plan:o,"select-plan":f,"total-volume":h(o),class:"plan-item"},null,8,["plan","total-volume"]))),128)),e("a",{onClick:b(u,["prevent"]),class:"plan-item"},[e("span",Ze,[c(a,{icon:"fa-solid fa-plus",size:"xl"})])],8,Ye)])):(s(),w(Je,{key:1,"plan-id":n.value,"total-workout-volume":v,"clear-selected-plan":_},null,8,["plan-id"]))])],64)}}},tt=C(et,[["__scopeId","data-v-b37d0d8e"]]),nt={__name:"Profile",setup(t){return(d,n)=>(s(),w(O,{title:"Profile"}))}};const lt={id:"app"},st={__name:"App",setup(t){const d=[{title:"Dashboard",icon:"fa-cube"},{title:"Profile",icon:"fa-user"}],n=L(0);function i(u){n.value=u}return(u,f)=>(s(),r(k,null,[c(ge,{pages:d,"selected-page-index":n.value,"select-page-index":i},null,8,["selected-page-index"]),e("section",lt,[n.value===0?(s(),w(tt,{key:0})):n.value===1?(s(),w(nt,{key:1})):R("",!0)])],64))}},at=C(st,[["__scopeId","data-v-acba0c60"]]),ut={__name:"Main",setup(t){return(d,n)=>B(q)().currentUser==null?(s(),w(te,{key:0})):(s(),w(at,{key:1}))}};export{ut as default};
