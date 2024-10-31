import{d as b,j as c,T as w,e as i,G as g,f as x,c as v,a as o,W as a,aa as d,ab as y,ac as k,h as M,k as I,F as R,l as S,o as V,m as L}from"./index-2jjNbshW.js";const T={class:"mb-4"},C={class:"mb-4"},F={class:"mb-4 flex items-center"},B={class:"mt-6 text-blue-500 text-center"},P=b({__name:"LoginView",setup(E){const u=c(),f=w(),n=i(null),m=i(null),t=g({email:"",password:"",rememberMe:!1}),p=async()=>{var e,l;if(t.email.trim().length===0){(e=n.value)==null||e.focus();return}if(t.password.trim().length<6){(l=m.value)==null||l.focus();return}t.rememberMe?localStorage.setItem("email",t.email):localStorage.removeItem("email"),!await u.login(t.email,t.password)&&f.error("Invalid credentials")};return x(()=>{const r=localStorage.getItem("email");r&&(t.email=r,t.rememberMe=!0)}),(r,e)=>{const l=S("RouterLink");return V(),v(R,null,[e[9]||(e[9]=o("h1",{class:"text-2xl font-semibold mb-4"},"Login",-1)),o("form",{onSubmit:k(p,["prevent"]),method:"POST"},[o("div",T,[e[3]||(e[3]=o("label",{for:"email",class:"block text-gray-600"},"Email",-1)),a(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.email=s),ref_key:"emailInputRef",ref:n,type:"text",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[d,t.email]])]),o("div",C,[e[4]||(e[4]=o("label",{for:"password",class:"block text-gray-600"},"Password",-1)),a(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>t.password=s),ref_key:"passwordInputRef",ref:m,type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[d,t.password]])]),o("div",F,[a(o("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>t.rememberMe=s),type:"checkbox",id:"remember",name:"remember",class:"text-blue-500"},null,512),[[y,t.rememberMe]]),e[5]||(e[5]=o("label",{for:"remember",class:"text-gray-600 ml-2"},"Remember Me",-1))]),e[6]||(e[6]=o("div",{class:"mb-6 text-blue-500"},[o("a",{href:"#",class:"hover:underline"},"Forgot Password?")],-1)),e[7]||(e[7]=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Login ",-1))],32),o("div",B,[M(l,{to:{name:"register"},class:"hover:underline"},{default:I(()=>e[8]||(e[8]=[L("Sign up Here")])),_:1})])],64)}}});export{P as default};