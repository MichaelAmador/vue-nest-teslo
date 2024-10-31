import{d as w,j as g,T as x,e as r,G as y,c as v,a as o,W as n,aa as a,ac as k,h as R,k as V,F as I,l as N,o as T,m as F}from"./index-2jjNbshW.js";const B={class:"mb-4"},C={class:"mb-4"},L={class:"mb-4"},P={class:"mt-6 text-blue-500 text-center"},A=w({__name:"RegisterView",setup(S){const p=g(),b=x(),u=r(null),d=r(null),i=r(null),t=y({fullname:"",email:"",password:""}),c=async()=>{var l,s,f;if(t.fullname.trim().length===0){(l=u.value)==null||l.focus();return}if(t.email.trim().length===0){(s=d.value)==null||s.focus();return}if(t.password.trim().length<6){(f=i.value)==null||f.focus();return}const{ok:m,message:e}=await p.register(t.fullname,t.email,t.password);m||(console.log({message:e}),b.error(e))};return(m,e)=>{const l=N("RouterLink");return T(),v(I,null,[e[9]||(e[9]=o("h1",{class:"text-2xl font-semibold mb-4"},"New Account",-1)),o("form",{onSubmit:k(c,["prevent"]),method:"POST"},[o("div",B,[e[3]||(e[3]=o("label",{for:"name",class:"block text-gray-600"},"Name",-1)),n(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.fullname=s),ref_key:"fullnameInputRef",ref:u,type:"text",id:"name",name:"name",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[a,t.fullname]])]),o("div",C,[e[4]||(e[4]=o("label",{for:"email",class:"block text-gray-600"},"Email",-1)),n(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>t.email=s),ref_key:"emailInputRef",ref:d,type:"text",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[a,t.email]])]),o("div",L,[e[5]||(e[5]=o("label",{for:"password",class:"block text-gray-600"},"Password",-1)),n(o("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>t.password=s),ref_key:"passwordInputRef",ref:i,type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[a,t.password]])]),e[6]||(e[6]=o("div",{class:"mb-6 text-blue-500"},[o("a",{href:"#",class:"hover:underline"},"Forgot Password?")],-1)),e[7]||(e[7]=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Register ",-1))],32),o("div",P,[R(l,{to:{name:"login"},class:"hover:underline"},{default:V(()=>e[8]||(e[8]=[F("Login Here")])),_:1})])],64)}}});export{A as default};
