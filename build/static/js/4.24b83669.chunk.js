(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{116:function(n,e,a){n.exports={backdrop:"Modal_backdrop__1FJAv",modal:"Modal_modal__2K1rN","slide-down":"Modal_slide-down__QyU8S"}},117:function(n,e,a){n.exports={"cart-items":"Cart_cart-items__2Xluz",total:"Cart_total__32BSL",actions:"Cart_actions__ieGoM","button--alt":"Cart_button--alt__3R6D6",button:"Cart_button__1edWt"}},118:function(n,e,a){n.exports={"cart-item":"CartItem_cart-item__23NiQ",summary:"CartItem_summary__3TH55",price:"CartItem_price__3YYvl",amount:"CartItem_amount__3wWtF",actions:"CartItem_actions__4WLAR"}},119:function(n,e,a){n.exports={form:"Checkout_form__1WhM4",control:"Checkout_control__3Opvz",actions:"Checkout_actions__2oSx6",submit:"Checkout_submit__1jndw",invalid:"Checkout_invalid__axPYW"}},175:function(n,e,a){"use strict";a.r(e);var r,t,i,o,c,s,d,l,x,p,b,m,g,j,u,h,O,f,y,v,w,_,C,k,N,z,K,I,B,A,S,F,M,Y,E,R,W,q,D,P,T,G,H=a(29),J=a.n(H),L=a(36),Q=a(13),U=a(11),X=a(2),V=a.n(X),Z=a(34),$=a.n(Z),nn=a(116),en=a.n(nn),an=a(3),rn=function(n){return Object(an.jsx)("div",{className:en.a.backdrop,onClick:n.onCloseCart})},tn=function(n){return Object(an.jsx)("div",{className:en.a.modal,children:Object(an.jsx)("div",{className:en.a.content,children:n.children})})},on=document.getElementById("overlays"),cn=function(n){return Object(an.jsxs)(X.Fragment,{children:[$.a.createPortal(Object(an.jsx)(rn,{onCloseCart:n.onCloseCart}),on),$.a.createPortal(Object(an.jsx)(tn,{children:n.children}),on)]})},sn=a(117),dn=a.n(sn),ln=a(19),xn=a(14),pn=a(118),bn=a.n(pn),mn=a(15),gn=a(17),jn=(mn.a.div(r||(r=Object(xn.a)(["\n  margin: 2% 4%;\n  display: grid;\n  grid-template-columns: 2fr 1.2fr;\n  justify-content: stretch;\n  align-items: stretch;\n  grid-gap: 0.5rem;\n  @media (max-width: 675px) {\n    grid-template-columns: 20rem;\n  }\n"]))),mn.a.div(t||(t=Object(xn.a)(["\n  font-size: 2rem;\n  padding: 0.5rem;\n  text-align: center;\n  color: ",";\n"])),gn.a.primary),mn.a.div(i||(i=Object(xn.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.5rem;\n  margin: 0.3rem;\n  grid-row: 1/3;\n  background: ",";\n  color: ",";\n  border-radius: 0.3rem;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),\n    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),\n    0 12px 12px rgba(0, 0, 0, 0.12);\n  transition: 0.3s ease-in-out;\n  &:hover {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),\n      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),\n      0 12px 12px rgba(0, 0, 0, 0.25);\n\n    transform: translateY(-0.2rem);\n  }\n\n  @media only screen and (max-width: 700px) {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n  }\n"])),gn.a.secondary,gn.a.primary),mn.a.img(o||(o=Object(xn.a)(["\n  width: 4rem;\n  height: 4rem;\n  padding: 0.8rem;\n  margin: auto;\n"])))),un=(mn.a.div(c||(c=Object(xn.a)(["\n  font-size: 1.5rem;\n  width: 20rem;\n  padding: 0.8rem;\n  margin: 0 1rem;\n"]))),mn.a.div(s||(s=Object(xn.a)(["\n  padding: 0.8rem;\n  margin: 0 1rem;\n"]))),mn.a.div(d||(d=Object(xn.a)(["\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  text-align: center;\n  margin: 0.5rem;\n  span {\n    margin: 0 1rem;\n  }\n"]))),mn.a.div(l||(l=Object(xn.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 1rem;\n  justify-content: stretch;\n  align-items: stretch;\n  grid-gap: 0.8rem;\n  font-size: 1.1rem;\n  margin: 0.5rem;\n\n  @media only screen and (max-width: 700px) {\n    align-content: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),mn.a.div(x||(x=Object(xn.a)(["\n  padding: 0.5rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  span {\n    font-size: 1.2rem;\n  }\n\n  box-shadow: 0px 15px 10px -15px;\n"]))),mn.a.div(p||(p=Object(xn.a)(["\n  padding: 0.5rem;\n  text-align: center;\n  margin: 1rem;\n  font-weight: 550;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  span {\n    font-size: 1.2rem;\n  }\n  box-shadow: 0px 15px 10px -15px;\n"]))),mn.a.div(b||(b=Object(xn.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),mn.a.button(m||(m=Object(xn.a)(["\n  color: green;\n  border: none;\n  background: none;\n  margin: 0.5rem;\n  border: 1px solid ",";\n  border-radius: 4px;\n  &:hover {\n    transition: all 0.3s ease-out;\n    border: 1px solid green;\n  }\n"])),gn.a.primary),mn.a.button(g||(g=Object(xn.a)(["\n  color: red;\n  border: none;\n  background: none;\n  margin: 0.5rem;\n  border: 1px solid ",";\n  border-radius: 4px;\n  &:hover {\n    transition: all 0.2s ease-out;\n    border: 1px solid red;\n  }\n"])),gn.a.primary),mn.a.button(j||(j=Object(xn.a)(["\n  width: 90%;\n  margin: 1rem;\n  font-size: 1rem;\n  border-radius: 0.4rem;\n  padding: 0.6rem 2.5rem;\n  background: ",";\n  color: ",";\n  border: 1px solid ",";\n  &:hover {\n    background: ",";\n    color: ",";\n    transition: all 0.3s ease-in-out;\n  }\n"])),gn.a.primary,gn.a.secondary,gn.a.primary,gn.a.secondary,gn.a.primary),mn.a.div(u||(u=Object(xn.a)(["\n  margin: 1rem;\n  font-size: 1rem;\n"]))),mn.a.div(h||(h=Object(xn.a)(["\n  background: ",";\n  color: ",";\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),\n    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),\n    0 12px 12px rgba(0, 0, 0, 0.12);\n  transition: 0.3s ease-in-out;\n  &:hover {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),\n      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),\n      0 12px 12px rgba(0, 0, 0, 0.25);\n\n    transform: translateY(-0.2rem);\n  }\n"])),gn.a.secondary,gn.a.primary),mn.a.div(O||(O=Object(xn.a)(["\n  padding: 0.4rem;\n  background: ",";\n  color: ",";\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),\n    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),\n    0 12px 12px rgba(0, 0, 0, 0.12);\n  transition: 0.3s ease-in-out;\n  &:hover {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),\n      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),\n      0 12px 12px rgba(0, 0, 0, 0.25);\n  }\n"])),gn.a.secondary,gn.a.primary),mn.a.div(f||(f=Object(xn.a)(["\n  margin: 0.3rem 0;\n  box-shadow: 0px 15px 10px -15px;\n"]))),mn.a.div(y||(y=Object(xn.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  background: ",";\n  color: ",";\n  border-radius: 0.4rem;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),\n    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),\n    0 12px 12px rgba(0, 0, 0, 0.12);\n  transition: 0.3s ease-in-out;\n  &:hover {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),\n      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),\n      0 12px 12px rgba(0, 0, 0, 0.25);\n\n    transform: translateY(-0.2rem);\n  }\n"])),gn.a.secondary,gn.a.primary),mn.a.input(v||(v=Object(xn.a)(["\n  width: 70%;\n  height: 1.8rem;\n  padding: 0.3rem;\n  border-radius: 0.3rem;\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  border: none;\n  background: ",";\n"])),gn.a.secondary),mn.a.input(w||(w=Object(xn.a)(["\n  width: 30%;\n  height: 1.8rem;\n  padding: 0.3rem;\n  border-radius: 0.3rem;\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  border: none;\n  background: ",";\n"])),gn.a.secondary),function(n){return Object(an.jsxs)("li",{className:bn.a["cart-item"],children:[Object(an.jsxs)("div",{children:[Object(an.jsx)("h2",{children:n.name}),Object(an.jsx)(jn,{src:n.image,alt:n.name}),Object(an.jsxs)("div",{className:bn.a.summary,children:[Object(an.jsxs)("span",{className:bn.a.price,children:["Ksh",n.price]}),Object(an.jsxs)("span",{className:bn.a.amount,children:["x ",n.amount]})]})]}),Object(an.jsxs)("div",{className:bn.a.actions,children:[Object(an.jsx)("button",{onClick:n.onRemove,children:"\u2212"}),Object(an.jsx)("button",{onClick:n.onAdd,children:"+"})]})]})}),hn=a(33),On=a(119),fn=a.n(On),yn=a(179),vn=a(177),wn=a(174),_n=a(176),Cn=a(173),kn=function(n){return""===n.trim()},Nn=(mn.a.div(_||(_=Object(xn.a)(["\n  margin: 2% 4%;\n  display: grid;\n  grid-template-columns: 2fr 1.2fr;\n  justify-content: stretch;\n  align-items: stretch;\n  grid-gap: 0.5rem;\n  @media (max-width: 675px) {\n    grid-template-columns: 20rem;\n  }\n"]))),mn.a.div(C||(C=Object(xn.a)(["\n  font-size: 2rem;\n  padding: 0.5rem;\n  text-align: center;\n  color: ",";\n"])),gn.a.primary),mn.a.div(k||(k=Object(xn.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  flex-direction: row;\n  padding: 0.5rem;\n  margin: 0.3rem;\n  grid-row: 1/3;\n  background: ",";\n  color: ",";\n  border-radius: 0.3rem;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),\n    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),\n    0 12px 12px rgba(0, 0, 0, 0.12);\n  transition: 0.3s ease-in-out;\n  &:hover {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),\n      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),\n      0 12px 12px rgba(0, 0, 0, 0.25);\n\n    transform: translateY(-0.2rem);\n  }\n\n  @media only screen and (max-width: 700px) {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n  }\n"])),gn.a.secondary,gn.a.primary),mn.a.img(N||(N=Object(xn.a)(["\n  width: 4rem;\n  height: 4rem;\n  padding: 0.8rem;\n  margin: auto;\n"]))),mn.a.div(z||(z=Object(xn.a)(["\n  font-size: 1.5rem;\n  width: 20rem;\n  padding: 0.8rem;\n  margin: 0 1rem;\n"]))),mn.a.div(K||(K=Object(xn.a)(["\n  padding: 0.8rem;\n  margin: 0 1rem;\n"]))),mn.a.div(I||(I=Object(xn.a)(["\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  text-align: center;\n  margin: 0.5rem;\n  span {\n    margin: 0 1rem;\n  }\n"]))),mn.a.div(B||(B=Object(xn.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 1rem;\n  justify-content: stretch;\n  align-items: stretch;\n  grid-gap: 0.8rem;\n  font-size: 1.1rem;\n  margin: 0.5rem;\n\n  @media only screen and (max-width: 700px) {\n    align-content: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n  }\n"])))),zn=mn.a.div(A||(A=Object(xn.a)(["\n  padding: 0.5rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  span {\n    font-size: 1.2rem;\n  }\n\n  box-shadow: 0px 15px 10px -15px;\n"]))),Kn=mn.a.div(S||(S=Object(xn.a)(["\n  padding: 0.5rem;\n  text-align: center;\n  margin: 1rem;\n  font-weight: 550;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  span {\n    font-size: 1.2rem;\n  }\n  box-shadow: 0px 15px 10px -15px;\n"]))),In=(mn.a.div(F||(F=Object(xn.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),mn.a.button(M||(M=Object(xn.a)(["\n  color: green;\n  border: none;\n  background: none;\n  margin: 0.5rem;\n  border: 1px solid ",";\n  border-radius: 4px;\n  &:hover {\n    transition: all 0.3s ease-out;\n    border: 1px solid green;\n  }\n"])),gn.a.primary),mn.a.button(Y||(Y=Object(xn.a)(["\n  color: red;\n  border: none;\n  background: none;\n  margin: 0.5rem;\n  border: 1px solid ",";\n  border-radius: 4px;\n  &:hover {\n    transition: all 0.2s ease-out;\n    border: 1px solid red;\n  }\n"])),gn.a.primary),mn.a.button(E||(E=Object(xn.a)(["\n  width: 90%;\n  margin: 1rem;\n  font-size: 1rem;\n  border-radius: 0.4rem;\n  padding: 0.6rem 2.5rem;\n  background: ",";\n  color: ",";\n  border: 1px solid ",";\n  &:hover {\n    background: ",";\n    color: ",";\n    transition: all 0.3s ease-in-out;\n  }\n"])),gn.a.primary,gn.a.secondary,gn.a.primary,gn.a.secondary,gn.a.primary)),Bn=mn.a.div(R||(R=Object(xn.a)(["\n  margin: 1rem;\n  font-size: 1rem;\n"]))),An=mn.a.div(W||(W=Object(xn.a)(["\n  background: ",";\n  color: ",";\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),\n    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),\n    0 12px 12px rgba(0, 0, 0, 0.12);\n  transition: 0.3s ease-in-out;\n  &:hover {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),\n      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),\n      0 12px 12px rgba(0, 0, 0, 0.25);\n\n    transform: translateY(-0.2rem);\n  }\n"])),gn.a.secondary,gn.a.primary),Sn=mn.a.div(q||(q=Object(xn.a)(["\n  padding: 0.4rem;\n  background: ",";\n  color: ",";\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),\n    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),\n    0 12px 12px rgba(0, 0, 0, 0.12);\n  transition: 0.3s ease-in-out;\n  &:hover {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),\n      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),\n      0 12px 12px rgba(0, 0, 0, 0.25);\n  }\n"])),gn.a.secondary,gn.a.primary),Fn=mn.a.div(D||(D=Object(xn.a)(["\n  margin: 0.3rem 0;\n  box-shadow: 0px 15px 10px -15px;\n"]))),Mn=mn.a.div(P||(P=Object(xn.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  background: ",";\n  color: ",";\n  border-radius: 0.4rem;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),\n    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),\n    0 12px 12px rgba(0, 0, 0, 0.12);\n  transition: 0.3s ease-in-out;\n  &:hover {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),\n      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),\n      0 12px 12px rgba(0, 0, 0, 0.25);\n\n    transform: translateY(-0.2rem);\n  }\n"])),gn.a.secondary,gn.a.primary),Yn=mn.a.input(T||(T=Object(xn.a)(["\n  width: 70%;\n  height: 1.8rem;\n  padding: 0.3rem;\n  border-radius: 0.3rem;\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  border: none;\n  background: ",";\n"])),gn.a.secondary),En=(mn.a.input(G||(G=Object(xn.a)(["\n  width: 30%;\n  height: 1.8rem;\n  padding: 0.3rem;\n  border-radius: 0.3rem;\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  border: none;\n  background: ",";\n"])),gn.a.secondary),function(n){Object(X.useContext)(ln.a).items;var e,a=Object(X.useState)(""),r=Object(U.a)(a,2),t=r[0],i=r[1],o=Object(X.useContext)(ln.a),c="".concat(o.totalAmount.toFixed(2)),s=15*"".concat(o.totalAmount.toFixed(2))/100,d=c<150?"Free":20,l="Free"===d?1*c+s:1*c+s+d,x=Object(X.useState)({name:!0,street:!0,city:!0,postalCode:!0}),p=Object(U.a)(x,2),b=p[0],m=p[1],g=Object(X.useRef)(),j=Object(X.useRef)();Object(X.useRef)(),"".concat(fn.a.control," ").concat(b.name?"":fn.a.invalid),"".concat(fn.a.control," ").concat(b.street?"":fn.a.invalid);return Object(an.jsx)("form",{className:fn.a.form,onSubmit:function(e){e.preventDefault();var a=g.current.value,r=j.current.value,i=!kn(a),o=!kn(r);m({name:i,street:o}),i&&o&&n.onConfirm({name:a,street:r,city:t})},children:Object(an.jsxs)(Nn,{children:[Object(an.jsxs)(An,{children:[Object(an.jsxs)(zn,{children:[Object(an.jsx)("span",{children:"Price:"})," ",Object(an.jsx)("span",{children:c})]}),Object(an.jsxs)(zn,{children:[Object(an.jsx)("span",{children:"Tax:"})," ",Object(an.jsx)("span",{children:s})]}),Object(an.jsxs)(zn,{children:[Object(an.jsx)("span",{children:"Delivery Charge:"})," ",Object(an.jsx)("span",{children:d})]}),Object(an.jsxs)(Kn,{children:[Object(an.jsx)("span",{children:"Total:"})," ",Object(an.jsxs)("span",{children:["Ksh",l]})]})]}),Object(an.jsxs)(Sn,{children:[Object(an.jsxs)(Fn,{children:[Object(an.jsx)("label",{children:" Name:"}),Object(an.jsx)(Yn,{type:"text",name:"name",placeholder:"full name",required:!0,id:"name",ref:g})]}),Object(an.jsxs)(Fn,{children:[Object(an.jsx)("label",{children:"Email: "}),Object(an.jsx)(Yn,{type:"email",name:"email",placeholder:" Email",id:"email",ref:j,required:!0})]}),Object(an.jsx)(Fn,{children:Object(an.jsx)(yn.a,{sx:{minWidth:120},children:Object(an.jsxs)(_n.a,{sx:{width:"60%"},children:[Object(an.jsx)(vn.a,{id:"demo-simple-select-label",children:"County:"}),Object(an.jsxs)(Cn.a,(e={labelId:"demo-simple-select-label",id:"demo-simple-select",label:"County",value:t},Object(hn.a)(e,"label","Age"),Object(hn.a)(e,"onChange",(function(n){i(n.target.value)})),Object(hn.a)(e,"required",!0),Object(hn.a)(e,"children",[Object(an.jsx)(wn.a,{value:"Baringo",children:"Baringo"}),Object(an.jsx)(wn.a,{value:"Bomet",children:"Bomet"}),Object(an.jsx)(wn.a,{value:"Bungoma",children:"Bungoma"}),Object(an.jsx)(wn.a,{value:"Busia",children:"Busia"}),Object(an.jsx)(wn.a,{value:"Elgeyo-Marakwet",children:"Elgeyo-Marakwet"}),Object(an.jsx)(wn.a,{value:"Embu",children:"Embu"}),Object(an.jsx)(wn.a,{value:"Garissa",children:"Garissa"}),Object(an.jsx)(wn.a,{value:"Homa Bay",children:"Homa Bay"}),Object(an.jsx)(wn.a,{value:"Isiolo",children:"Isiolo"}),Object(an.jsx)(wn.a,{value:"Kajiado",children:"Kajiado"}),Object(an.jsx)(wn.a,{value:"Kakamega",children:"Kakamega"}),Object(an.jsx)(wn.a,{value:"Kericho",children:"Kericho"}),Object(an.jsx)(wn.a,{value:"Kiambu",children:"Kiambu"}),Object(an.jsx)(wn.a,{value:"Kilifi",children:"Kilifi"}),Object(an.jsx)(wn.a,{value:"Kirinyaga",children:"Kirinyaga"}),Object(an.jsx)(wn.a,{value:"Kisii",children:"Kisii"}),Object(an.jsx)(wn.a,{value:"Mombasa",children:"Mombasa"}),Object(an.jsx)(wn.a,{value:"Nairobi",children:"Nairobi"})]),e))]})})})]}),Object(an.jsxs)(Mn,{children:[Object(an.jsxs)(Bn,{children:[Object(an.jsx)("input",{type:"checkbox",required:!0}),Object(an.jsx)("label",{children:"Accept terms and condition"})]}),Object(an.jsx)(In,{style:{cursor:"pointer"},children:"Checkout"})]})]})})}),Rn=a(38);a(126),e.default=function(n){var e=Object(X.useState)(!1),a=Object(U.a)(e,2),r=a[0],t=a[1],i=Object(X.useState)(!1),o=Object(U.a)(i,2),c=o[0],s=o[1],d=Object(X.useState)(!1),l=Object(U.a)(d,2),x=l[0],p=l[1],b=Object(X.useContext)(ln.a),m="Ksh".concat(b.totalAmount.toFixed(2)),g=b.items.length>0,j=function(n){b.removeItem(n)},u=function(n){b.addItem(Object(Q.a)(Object(Q.a)({},n),{},{amount:1}))};console.log("Items: ",b.items);var h=function(){var n=Object(L.a)(J.a.mark((function n(e){return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s(!0),console.log("User: ",e.name),Rn.a.child("orders").push({name:e.name,street:e.street,city:e.city,timestamp:Date.now(),totalAmount:m,orderedItems:b.items}).catch(alert),s(!1),p(!0),b.clearCart();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),O=Object(an.jsx)("ul",{className:dn.a["cart-items"],children:b.items.map((function(n){return Object(an.jsx)(un,{name:n.name,amount:n.amount,price:n.price,image:n.image,onRemove:j.bind(null,n.id),onAdd:u.bind(null,n)},n.id)}))}),f=Object(an.jsxs)("div",{className:dn.a.actions,children:[Object(an.jsx)("button",{className:dn.a["button--alt"],onClick:n.onCloseCart,children:"Close"}),g&&Object(an.jsx)("button",{className:dn.a.button,onClick:function(){t(!0)},children:"Order"})]}),y=Object(an.jsxs)(V.a.Fragment,{children:[O,Object(an.jsxs)("div",{className:dn.a.total,children:[Object(an.jsx)("span",{style:{color:"#cc5500"},children:"Total Amount"}),Object(an.jsx)("span",{style:{color:"#cc5500"},children:m})]}),r&&Object(an.jsx)(En,{onConfirm:h,onCancel:n.onCloseCart}),!r&&f]}),v=Object(an.jsx)("p",{children:"Sending order data..."}),w=Object(an.jsxs)(V.a.Fragment,{children:[Object(an.jsx)("p",{children:"Successfully sent the order!"}),Object(an.jsx)("div",{className:dn.a.actions,children:Object(an.jsx)("button",{className:dn.a.button,onClick:n.onCloseCart,children:"Close"})})]});return Object(an.jsxs)(cn,{onCloseCart:n.onCloseCart,children:[!c&&!x&&y,c&&v,!c&&x&&w]})}}}]);
//# sourceMappingURL=4.24b83669.chunk.js.map