System.register(["./index-legacy-416f4956.js"],(function(l,e){"use strict";var u,a,t,n,d,o,i,r,f,s,v,c,_,g,h,p,m,y,w,C,I,V,U,b,x,P,k,M,A,W;return{setters:[l=>{u=l.a,a=l.A,t=l.r,n=l.o,d=l.d,o=l.c,i=l.w,r=l.u,f=l.b,s=l.e,v=l.I,c=l.f,_=l.g,g=l.h,h=l.i,p=l.t,m=l.j,y=l.k,w=l.l,C=l.m,I=l.n,V=l.p,U=l.q,b=l.s,x=l.v,P=l.x,k=l.y,M=l.z,A=l.B,W=l.C}],execute:function(){function e(){const l=t(),e=async()=>{try{l.value=await async function(){const l={withCredentials:!0};try{return(await u.get(a+"/api/userInfo",l)).data}catch(e){return e}}()}catch(e){console.log(e)}},d=t(!1),o=t(0),i=t(0),r=t(0),f=l=>{d.value=l};return n((()=>{e().then((()=>{var e,u,a,t;null!==(e=l.value)&&void 0!==e&&e.age&&l.value.height&&l.value.weight&&(o.value=null===(u=l.value)||void 0===u?void 0:u.age,i.value=null===(a=l.value)||void 0===a?void 0:a.height,r.value=null===(t=l.value)||void 0===t?void 0:t.weight)}))})),{userInfo:l,openProfile:d,age:o,height:i,weight:r,openCloseModal:f,updateUserInfos:async()=>{let l={height:i.value,weight:r.value,age:o.value,bmi:parseFloat((r.value/(i.value/100*(i.value/100))).toFixed(1))};await async function(l){const e={withCredentials:!0};try{await u.post(a+"/api/updateUser",l,e)}catch(t){throw t}}(l),await e(),f(!1)},getTheUserInfos:e}}const j={style:{"text-align":"center"}};l("default",d({__name:"Profile",setup(l){const{userInfo:u,age:a,height:t,weight:n,openProfile:d,openCloseModal:z,updateUserInfos:B,getTheUserInfos:E}=e();return(l,e)=>(f(),o(r(W),null,{default:i((()=>[s(r(g),null,{default:i((()=>[s(r(v),null,{default:i((()=>[s(r(c),null,{default:i((()=>[_("Profile")])),_:1})])),_:1})])),_:1}),s(r(P),{class:"ion-padding",fullscreen:!0},{default:i((()=>{var l;return[s(r(g),{collapse:"condense"},{default:i((()=>[s(r(v),null,{default:i((()=>[s(r(c),{size:"large"},{default:i((()=>[_("Profile")])),_:1})])),_:1})])),_:1}),h("h1",null,"Welcome, "+p(null===(l=r(u))||void 0===l?void 0:l.loginName)+"!",1),s(r(m),null,{default:i((()=>[s(r(y),null,{default:i((()=>[s(r(w),null,{default:i((()=>[s(r(C),{color:"primary"},{default:i((()=>[s(r(I),null,{default:i((()=>[s(r(V),null,{default:i((()=>{var l;return[_("Weight: "+p(null===(l=r(u))||void 0===l?void 0:l.weight),1)]})),_:1})])),_:1})])),_:1})])),_:1}),s(r(w),null,{default:i((()=>[s(r(C),{color:"primary"},{default:i((()=>[s(r(I),null,{default:i((()=>[s(r(V),null,{default:i((()=>{var l;return[_("BMI: "+p(null===(l=r(u))||void 0===l?void 0:l.bmi),1)]})),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),s(r(y),null,{default:i((()=>[s(r(w),null,{default:i((()=>[s(r(C),{color:"primary"},{default:i((()=>[s(r(I),null,{default:i((()=>[s(r(V),null,{default:i((()=>{var l;return[_("Height: "+p(null===(l=r(u))||void 0===l?void 0:l.height),1)]})),_:1})])),_:1})])),_:1})])),_:1}),s(r(w),null,{default:i((()=>[s(r(C),{color:"primary"},{default:i((()=>[s(r(I),null,{default:i((()=>[s(r(V),null,{default:i((()=>{var l;return[_("Age: "+p(null===(l=r(u))||void 0===l?void 0:l.age),1)]})),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),h("div",j,[s(r(U),{onClick:e[0]||(e[0]=l=>r(z)(!0))},{default:i((()=>[_("Edit")])),_:1})]),s(r(b),{"is-open":r(d)},{default:i((()=>[s(r(g),null,{default:i((()=>[s(r(v),null,{default:i((()=>[s(r(c),null,{default:i((()=>[_("Edit")])),_:1}),s(r(x),{slot:"end"},{default:i((()=>[s(r(U),{onClick:e[1]||(e[1]=l=>r(z)(!1))},{default:i((()=>[_("Close")])),_:1})])),_:1})])),_:1})])),_:1}),s(r(P),{class:"ion-padding"},{default:i((()=>[s(r(k),null,{default:i((()=>[s(r(M),{type:"number",placeholder:"Age",modelValue:r(a),"onUpdate:modelValue":e[2]||(e[2]=l=>A(a)?a.value=l:null)},null,8,["modelValue"])])),_:1}),s(r(k),null,{default:i((()=>[s(r(M),{type:"number",placeholder:"Heigth in CM",modelValue:r(t),"onUpdate:modelValue":e[3]||(e[3]=l=>A(t)?t.value=l:null)},null,8,["modelValue"])])),_:1}),s(r(k),null,{default:i((()=>[s(r(M),{type:"number",placeholder:"Weight in KG",modelValue:r(n),"onUpdate:modelValue":e[4]||(e[4]=l=>A(n)?n.value=l:null)},null,8,["modelValue"])])),_:1}),s(r(U),{onClick:e[5]||(e[5]=l=>r(B)())},{default:i((()=>[_("Save")])),_:1})])),_:1})])),_:1},8,["is-open"])]})),_:1})])),_:1}))}}))}}}));
