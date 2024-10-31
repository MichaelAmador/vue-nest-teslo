import{u as w,a as f}from"./get-product-image.action-DSvtMqvm.js";import{d as p,o as r,c as o,a as e,t as i,F as x,r as m,b as v,e as _,w as y,f as k,g as b,u as c,h,i as C}from"./index-2jjNbshW.js";import{_ as B,g}from"./get-products.action-Ccf0qD73.js";const j={class:"rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"},$={href:"#"},q={class:"relative flex items-end overflow-hidden rounded-xl"},M=["src","alt"],z={class:"mt-1 p-2"},N={class:"text-slate-700"},P={class:"mt-1 text-sm text-slate-400 capitalize"},V={class:"mt-3 flex items-end justify-between"},A={class:"text-lg font-bold text-blue-500"},F=p({__name:"ProductCard",props:{product:{}},setup(d){return(s,t)=>(r(),o("article",j,[e("a",$,[e("div",q,[e("img",{src:s.product.images[0],alt:s.product.title,class:"h-[250px] object-cover"},null,8,M)]),e("div",z,[e("h2",N,i(s.product.title),1),e("p",P,i(s.product.gender),1),e("div",V,[e("p",A,"$"+i(s.product.price),1),t[0]||(t[0]=e("div",{class:"flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})]),e("button",{class:"text-sm"},"Add to cart")],-1))])])])]))}}),L={class:"py-10 bg-gray-100"},E={class:"mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},Q=p({__name:"ProductList",props:{products:{}},setup(d){return(s,t)=>(r(),o("section",L,[e("div",E,[(r(!0),o(x,null,m(s.products,a=>(r(),v(F,{key:a.id,product:a},null,8,["product"]))),128))])]))}}),H={key:0,class:"text-center h-[500px]"},K={key:1},T=p({__name:"HomeView",setup(d){const s=C(),t=_(Number(s.query.page||1)),a=w(),{data:n}=f({queryKey:["products",{page:t}],queryFn:()=>g(t.value)});return y(()=>s.query.page,u=>{t.value=Number(u||1),window.scrollTo({top:0,behavior:"smooth"})}),k(()=>{a.prefetchQuery({queryKey:["products",{page:t.value+1}],queryFn:()=>g(t.value+1)})}),(u,l)=>(r(),o(x,null,[l[1]||(l[1]=b('<div class="pt-32 bg-white"><h1 class="text-center text-2xl font-bold text-gray-800">All Products</h1></div><div class="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center bg-white text-gray-800"><a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg><span>Architecto</span></a><a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg><span>Corrupti</span></a><a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><span>Excepturi</span></a><a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg><span>Consectetur</span></a></div>',2)),c(n)?(r(),o("div",K,[h(Q,{products:c(n)},null,8,["products"])])):(r(),o("div",H,l[0]||(l[0]=[e("h1",{class:"text-3xl"},"Loading Products",-1),e("p",null,"Wait please",-1)]))),h(B,{"has-more-data":!!c(n)&&c(n).length<10,"is-first-page":t.value===1,page:t.value},null,8,["has-more-data","is-first-page","page"])],64))}});export{T as default};
