(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{20:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a,s,c=n(1),i=n.n(c),o=n(22),l=n.n(o),r=n(7),u=(n(20),n(24)),d=n(2),j=n(3),p=n(13),b=n(14),h=n(15),m=new(function(){function e(t){Object(b.a)(this,e),this._url=t.url,this._headers=t.headers,this.addLike=this.addLike.bind(this),this.deleteLike=this.deleteLike.bind(this)}return Object(h.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("We have found an error."(a||(a=Object(p.a)(["Error: ",""])),e.status))}},{key:"getPersonalInformation",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"editPersonalProfile",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"7dfaf4c9-82d9-4096-b562-ec8631a23ab5","Content-Type":"application/json"}}),_=n.p+"static/media/logo.c0218ee4.svg",O=n(0),f=function(e){var t=e.email,n=e.onSignOut,a=e.loggedIn,s=Object(c.useState)(!1),i=Object(d.a)(s,2),o=i[0],l=i[1];function u(){n(),l(!1)}return Object(O.jsx)("header",{className:"header",children:Object(O.jsxs)(j.d,{children:[Object(O.jsxs)(j.b,{path:"/main",children:[Object(O.jsxs)("div",{className:"header__container-hidden ".concat(o?"header__menu_opened":""),children:[Object(O.jsx)("h2",{className:"header__email",children:t}),Object(O.jsx)(r.b,{to:"/sign-in",className:"header__link",onClick:u,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(O.jsxs)("div",{className:"header__container",children:[Object(O.jsx)("img",{src:_,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f MESTO",className:"header__logo"}),Object(O.jsxs)("div",{className:"header__container-visible",children:[Object(O.jsx)("h2",{className:"header__email-hidden",children:t}),Object(O.jsx)(r.b,{to:"/sign-in",className:"header__link-hidden",onClick:u,children:"\u0412\u044b\u0439\u0442\u0438"}),Object(O.jsx)("button",{className:"header__hamburger-btn ".concat(o?"header__cross-btn":""),onClick:o?function(){l(!1)}:function(){l(!0)}})]})]})]}),Object(O.jsx)(j.b,{path:"/sign-in",children:Object(O.jsxs)("div",{className:"header__container",children:[Object(O.jsx)("img",{src:_,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f MESTO",className:"header__logo"}),Object(O.jsx)(r.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})}),Object(O.jsx)(j.b,{path:"/sign-up",children:Object(O.jsxs)("div",{className:"header__container",children:[Object(O.jsx)("img",{src:_,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f MESTO",className:"header__logo"}),Object(O.jsx)(r.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})}),Object(O.jsx)(j.b,{path:"/",children:a?Object(O.jsx)(j.a,{to:"/main"}):Object(O.jsx)(j.a,{to:"/sign-in"})})]})})},g=i.a.createContext(),x=function(e){var t=e.likes,n=e.cardId,a=e.name,s=e.link,i=e.owner,o=e.onDeleteCard,l=e.onCardClick,r=e.onCardLike,u=Object(c.useContext)(g)._id,d=i._id===u,j="element__trash ".concat(d?"element__trash_visible":""),p=t.some((function(e){return e._id===u})),b="element__button-like ".concat(p?"element__button-like_active":"");return Object(O.jsxs)("li",{className:"element template__card",children:[Object(O.jsx)("button",{onClick:function(){o({likes:t,cardId:n,name:a,link:s,owner:i})},className:j,type:"button"}),Object(O.jsx)("img",{className:"element__image",onClick:function(){l({name:a,link:s})},src:s,alt:a}),Object(O.jsxs)("div",{className:"element__block",children:[Object(O.jsx)("h2",{className:"element__quote",children:a}),Object(O.jsxs)("div",{className:"element__like-container",children:[Object(O.jsx)("button",{className:b,onClick:function(){r(t,n,u)},type:"button"}),Object(O.jsx)("p",{className:"element__counter-likes",children:t.length})]})]})]})},v=function(e){var t=e.cards,n=e.onEditAvatar,a=e.onEditProfile,s=e.onAddPlace,i=e.onDeleteCard,o=e.onCardClick,l=e.onCardLike,r=e.isLoading,u=Object(c.useContext)(g),d=u.avatar,j=u.name,p=u.about;return Object(O.jsxs)("main",{className:"main",children:[Object(O.jsxs)("section",{className:"profile main__profile",children:[Object(O.jsx)("div",{className:"profile__avatar-container profile__avatar",style:{backgroundImage:"url(".concat(d,")")},children:Object(O.jsx)("button",{onClick:n,className:"profile__avatar-button",type:"button"})}),Object(O.jsxs)("div",{className:"profile__conteiner",children:[Object(O.jsx)("h1",{className:"profile__name",children:j}),Object(O.jsx)("button",{onClick:a,className:"profile__open-button",type:"button"}),Object(O.jsx)("p",{className:"profile__job",children:p})]}),Object(O.jsx)("button",{id:"popup-image__open-button",onClick:s,className:"profile__add-button",type:"button"})]}),Object(O.jsx)("section",{id:"elements",className:"elements",children:Object(O.jsxs)("ul",{id:"template__container",className:"elements__container",children:[r&&Object(O.jsx)("p",{children:"Is Loading ..."}),t.map((function(e){var t=e.likes,n=e._id,a=e.name,s=e.link,c=e.owner;return Object(O.jsx)(x,{likes:t,cardId:n,name:a,link:s,owner:c,onDeleteCard:i,onCardClick:o,onCardLike:l},n)}))]})})]})},k=function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsx)("p",{className:"footer__name",children:"\xa92021 Mesto Russia"})})},N=function(e){var t=e.card,n=e.onClose;return Object(O.jsx)("div",{className:"popup popup-opacity ".concat(t.isOpen&&""!==t.link?"popup_is-opened":null),children:Object(O.jsxs)("div",{className:"popup__image-container",children:[Object(O.jsx)("button",{className:"popup__close-button",onClick:n,type:"button"}),Object(O.jsx)("img",{className:"image",src:t.link,alt:t.name}),Object(O.jsx)("h2",{className:"image-tittle",children:t.name})]})})},C=function(e){return Object(O.jsx)("div",{id:"popup-".concat(e.name),className:"popup ".concat(e.isOpen?"popup_is-opened":null),children:Object(O.jsxs)("div",{className:"popup__content",children:[Object(O.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(O.jsx)("h2",{className:"popup__title",children:e.title}),Object(O.jsxs)("form",{className:"popup__form-container",noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(O.jsx)("button",{type:"submit",className:"popup__save-button ".concat(e.disabled?"popup__button_disabled":null),disabled:e.disabled,children:e.btn})]})]})})},y=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),l=o[0],r=o[1],u=Object(c.useState)({name:"",about:""}),j=Object(d.a)(u,2),p=j[0],b=j[1],h=Object(c.useContext)(g);return Object(c.useEffect)((function(){e.isOpen&&(s(h.name),r(h.about),b({name:"",about:""}))}),[h,e.isOpen]),Object(O.jsxs)(C,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:l})},name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",disabled:p.name||p.about||a===h.name&&l===h.about,btn:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(O.jsxs)("label",{className:"popup__label",children:[Object(O.jsx)("input",{type:"text",name:"name",className:"popup__input",placeholder:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e",required:!0,value:a||"",onChange:function(e){var t=e.target.value,n=p;s(t),t.length<2?n.name="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0430 - 2":n.name=""}}),Object(O.jsx)("span",{className:"".concat(p.name?"popup__input-error":null),children:p.name})]}),Object(O.jsxs)("label",{className:"popup__label",children:[Object(O.jsx)("input",{type:"text",name:"about",className:"popup__input",placeholder:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430",required:!0,value:l||"",onChange:function(e){var t=e.target.value,n=p;r(t),t.length<2?n.about="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0430 - 2":n.about=""}}),Object(O.jsx)("span",{className:"".concat(p.about?"popup__input-error":null),children:p.about})]})]})},S=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)({link:""}),o=Object(d.a)(i,2),l=o[0],r=o[1],u=Object(c.useContext)(g);return Object(c.useEffect)((function(){e.isOpen&&(s(u.link),r({link:""}))}),[u,e.isOpen]),Object(O.jsx)(C,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar(a)},name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",disabled:l.link||a===u.link,btn:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(O.jsxs)("label",{className:"popup__label",children:[Object(O.jsx)("input",{value:a||"",type:"url",name:"avatar",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",required:!0,onChange:function(e){var t=e.target.value,n=l;s(t),/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm.test(t)?n.link="":n.link="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL."}}),Object(O.jsx)("span",{className:"".concat(l.link?"popup__input-error":null),children:l.link})]})})},L=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),l=o[0],r=o[1],u=Object(c.useState)({namee:"",link:""}),j=Object(d.a)(u,2),p=j[0],b=j[1],h=Object(c.useContext)(g);return Object(c.useEffect)((function(){e.isOpen&&(s(h.namee),r(h.link),b({name:"",link:""}))}),[h,e.isOpen]),Object(O.jsxs)(C,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:l})},name:"image",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",disabled:p.namee||p.link||a===h.namee||l===h.link,btn:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(O.jsxs)("label",{className:"popup__label",children:[Object(O.jsx)("input",{type:"text",minLength:"2",maxLength:"30",name:"name",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,value:a||"",onChange:function(e){var t=e.target.value,n=p;s(t),t.length<2?n.namee="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0430 - 2":n.namee=""}}),Object(O.jsx)("span",{className:"".concat(p.namee?"popup__input-error":null),children:p.namee})]}),Object(O.jsxs)("label",{className:"popup__label",children:[Object(O.jsx)("input",{type:"url",name:"link",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:l||"",onChange:function(e){var t=e.target.value,n=p;r(t),/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm.test(t)?n.link="":n.link="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL."}}),Object(O.jsx)("span",{className:"".concat(p.link?"popup__input-error":null),children:p.link})]})]})},w=function(e){return Object(O.jsx)(C,{isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onCardDelete()},onClose:e.onClose,name:"card-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",btn:e.isLoading?"\u0423\u0434\u0430\u043b\u044f\u0435\u043c...":"\u0414\u0430"})},E=Object(j.h)((function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)({email:"",password:""}),p=Object(d.a)(j,2),b=p[0];p[1];function h(e){var t=e.target.value,n=b;s(t);/.+@.+\..+/.test(t)?n.email="":n.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441"}function m(e){var t=e.target.value,n=b;u(t),t.length<6||t.includes(" ")?n.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432 \u0438 \u0431\u043e\u043b\u044c\u0448\u0435 6 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439":n.password=""}return Object(O.jsxs)("main",{className:"sign",children:[Object(O.jsx)("h1",{className:"sign__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(O.jsx)("div",{className:"sign__container",children:Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.OnRegistered({email:a,password:l})},className:"sign__form",children:[Object(O.jsxs)("label",{className:"sign__label",children:[Object(O.jsx)("input",{required:!0,value:a,id:"email",name:"email",type:"email",autoComplete:"on",placeholder:"Email",className:"sign__email sign__input",onChange:h,onFocus:h}),Object(O.jsx)("span",{className:"".concat(b.email?"popup__input-error":null),children:b.email})]}),Object(O.jsxs)("label",{className:"sign__label",children:[Object(O.jsx)("input",{required:!0,value:l,id:"password",name:"password",type:"password",minLength:"6",autoComplete:"on",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"sign__password sign__input",onChange:m,onFocus:m}),Object(O.jsx)("span",{className:"".concat(b.password?"popup__input-error":null),children:b.password})]}),Object(O.jsx)("button",{type:"submit",className:"sign__button sign__button-text ".concat(b.email||b.password?"popup__button_disabled":null),disabled:b.email||b.password,children:e.isLoading?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f...":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})}),Object(O.jsx)("div",{className:"sign-in",children:Object(O.jsxs)("h2",{className:"sign-in__title",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0",Object(O.jsx)(r.b,{to:"/sign-in",className:"sign-in__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})})),I=Object(j.h)((function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),l=o[0],r=o[1],u=Object(c.useState)({email:"",password:""}),j=Object(d.a)(u,2),p=j[0];j[1];return Object(O.jsxs)("main",{className:"sign",children:[Object(O.jsx)("h1",{className:"sign__title",children:"\u0412\u0445\u043e\u0434"}),Object(O.jsx)("div",{className:"sign__container",children:Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onAuthorization({email:a,password:l})},className:"sign__form",children:[Object(O.jsxs)("label",{className:"sign__label",children:[Object(O.jsx)("input",{required:!0,id:"email",value:a,name:"email",type:"email",autoComplete:"on",placeholder:"Email",className:"sign__email sign__input",onChange:function(e){var t=e.target.value,n=p;s(t),/.+@.+\..+/.test(t)?n.email="":n.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441"}}),Object(O.jsx)("span",{className:"".concat(p.email?"popup__input-error":null),children:p.email})]}),Object(O.jsxs)("label",{className:"sign__label",children:[Object(O.jsx)("input",{required:!0,value:l,name:"password",type:"password",autoComplete:"on",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"sign__password sign__input",onChange:function(e){var t=e.target.value,n=p;r(t),t.length<6||t.includes(" ")?n.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432 \u0438 \u0431\u043e\u043b\u044c\u0448\u0435 6 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439":n.password=""}}),Object(O.jsx)("span",{className:"".concat(p.password?"popup__input-error":null),children:p.password})]}),Object(O.jsx)("button",{type:"submit",className:"sign__button sign__button-signin sign__button-text ".concat(p.email||p.password?"popup__button_disabled":null),disabled:p.email||p.password,children:e.isLoading?"\u0412\u0445\u043e\u0434\u0438\u043c...":"\u0412\u043e\u0439\u0442\u0438"})]})})]})})),P=n(25),T=n(26),R=["component"],A=function(e){var t=e.component,n=Object(T.a)(e,R);return Object(O.jsx)(j.b,{children:function(){return n.loggedIn?Object(O.jsx)(t,Object(P.a)({},n)):Object(O.jsx)(j.a,{to:"/main"})}})},D=n.p+"static/media/Union-negative.df8eddf6.svg",U=n.p+"static/media/Union-positive.1b6082f8.svg",q=function(e){return Object(O.jsx)("div",{id:"popup-InfoTooltip",className:"popup popup-InfoTooltip ".concat(e.isOpen?"popup_is-opened":null),children:Object(O.jsxs)("div",{className:"popup__content",children:[Object(O.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(O.jsx)("img",{className:"popup-InfoTooltip__image",src:e.isRegistered?U:D,alt:"icon"}),Object(O.jsx)("h2",{className:"popup__title",children:e.isRegistered?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},J=new(function(){function e(t){Object(b.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(h.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("We have found an error."(s||(s=Object(p.a)(["Error: ",""])),e.status))}},{key:"registration",value:function(e){return fetch("".concat(this._url,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"authorize",value:function(e){return fetch("".concat(this._url,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"checkToken",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._handleResponse)}}]),e}())({url:"https://auth.nomoreparties.co",headers:{"Content-Type":"application/json"}}),z=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(d.a)(s,2),o=i[0],l=i[1],r=Object(c.useState)(!1),p=Object(d.a)(r,2),b=p[0],h=p[1],_=Object(c.useState)(!1),x=Object(d.a)(_,2),C=x[0],P=x[1],T=Object(c.useState)({name:"",link:""}),R=Object(d.a)(T,2),D=R[0],U=R[1],z=Object(c.useState)(!1),M=Object(d.a)(z,2),$=M[0],G=M[1],B=Object(c.useState)({}),F=Object(d.a)(B,2),H=F[0],W=F[1],V=Object(c.useState)([]),K=Object(d.a)(V,2),Q=K[0],X=K[1],Y=Object(c.useState)({}),Z=Object(d.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(c.useState)(!1),ae=Object(d.a)(ne,2),se=ae[0],ce=ae[1],ie=Object(c.useState)(!1),oe=Object(d.a)(ie,2),le=oe[0],re=oe[1],ue=Object(c.useState)(!1),de=Object(d.a)(ue,2),je=de[0],pe=de[1],be=Object(c.useState)({email:""}),he=Object(d.a)(be,2),me=he[0],_e=he[1],Oe=Object(j.g)();Object(c.useEffect)((function(){je&&(G(!0),Promise.all([m.getPersonalInformation(),m.getInitialCards()]).then((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];W(n),X(a)})).catch((function(e){return console.log(e)})).finally((function(){return G(!1)})))}),[je]);var fe=Object(c.useCallback)((function(){var e=localStorage.getItem("jwt");e&&J.checkToken(e).then((function(e){e&&(_e({email:e.data.email}),pe(!0))})).catch((function(e){console.log(e),localStorage.removeItem("jwt")}))}),[]);Object(c.useEffect)((function(){fe()}),[fe]);var ge=function(){h(!1),a(!1),l(!1),P(!1),U({name:"",link:""}),ce(!1)};Object(c.useEffect)((function(){var e=function(e){"Escape"===e.key&&ge()},t=function(e){(e.target.classList.contains("popup_is-opened")||e.target.classList.contains("popup__close-button"))&&ge()};return document.addEventListener("click",t),document.addEventListener("keydown",e),function(){document.removeEventListener("click",t),document.removeEventListener("keydown",e)}}),[]);return Object(O.jsx)(g.Provider,{value:H,children:Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)(f,{email:me.email,onSignOut:function(){localStorage.removeItem("jwt"),Oe.push("/sign-in")},loggedIn:je}),Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{path:"/sign-up",children:Object(O.jsx)(E,{OnRegistered:function(e){G(!0),J.registration(e).then((function(){re(!0),ce(!0),Oe.push("/sign-in")})).catch((function(e){re(!1),ce(!0),console.log(e)})).finally((function(){return G(!1)}))},isLoading:$})}),Object(O.jsx)(j.b,{path:"/sign-in",children:Object(O.jsx)(I,{onAuthorization:function(e){G(!0),J.authorize(e).then((function(t){_e({email:e.email}),pe(!0),localStorage.setItem("jwt",t.token),Oe.push("/main")})).catch((function(e){return console.log(e)})).finally((function(){return G(!1)}))},isLoading:$})}),Object(O.jsx)(A,{path:"/main",component:v,cards:Q,onEditProfile:function(){a(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){h(!0)},onCardClick:function(e){var t=e.link,n=e.name;U({isOpen:!0,link:t,name:n})},onDeleteCard:function(e){te(e),P(!0)},onCardLike:function(e,t,n){e.some((function(e){return e._id===n}))?m.deleteLike(t).then((function(e){X((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){return console.log(e)})):m.addLike(t).then((function(e){X((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){return console.log(e)}))},isLoading:$,loggedIn:je}),Object(O.jsx)(j.b,{path:"/",children:je?Object(O.jsx)(j.a,{to:"/main"}):Object(O.jsx)(j.a,{to:"/sign-in"})})]}),Object(O.jsx)(k,{}),Object(O.jsx)(y,{isOpen:n,onUpdateUser:function(e){G(!0),m.editPersonalProfile(e).then((function(e){W(e)})).then((function(){return ge()})).catch((function(e){return console.log(e)})).finally((function(){return G(!1)}))},onClose:ge,isLoading:$}),Object(O.jsx)(S,{isOpen:b,onUpdateAvatar:function(e){G(!0),m.editAvatar(e).then((function(e){W(e)})).then((function(){return ge()})).catch((function(e){return console.log(e)})).finally((function(){return G(!1)}))},onClose:ge,isLoading:$}),Object(O.jsx)(L,{isOpen:o,onAddPlace:function(e){G(!0),m.addNewCard(e).then((function(e){X([e].concat(Object(u.a)(Q)))})).then((function(){return ge()})).catch((function(e){return console.log(e)})).finally((function(){return G(!1)}))},onClose:ge,isLoading:$}),Object(O.jsx)(w,{isOpen:C,onCardDelete:function(){G(!0),m.deleteCard(ee.cardId).then((function(){X((function(e){return e.filter((function(e){return e._id!==ee.cardId}))}))})).then((function(){return ge()})).catch((function(e){return console.log(e)})).finally((function(){return G(!1)}))},onClose:ge,isLoading:$}),Object(O.jsx)(N,{card:D,onClose:ge}),Object(O.jsx)(q,{isRegistered:le,isOpen:se,onClose:ge})]})})};l.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(z,{})})}),document.getElementById("page"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a8a0e95a.chunk.js.map