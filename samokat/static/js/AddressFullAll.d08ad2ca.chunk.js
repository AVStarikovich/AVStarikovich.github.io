(this.webpackJsonpsamokat=this.webpackJsonpsamokat||[]).push([[1],{433:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(1),r=a(82),i=a(11),s=a(38),c=a(4),d=a(205),u=a(85);const p=Object(l.c)(i.a).withConfig({componentId:"sc-1ilrxhy-0"})(["flex-grow:0;padding:32px 40px;&[disabled]{opacity:0.3;}"]),g=l.c.div.withConfig({componentId:"sc-1ilrxhy-1"})(["display:grid;padding:82px 128px 0;box-sizing:border-box;grid-gap:48px 32px;grid-template-areas:'first-row' 'second-row' 'third-row' 'fourth-row';will-change:transform;"]);t.default=()=>{const{addressInputValue:e,phoneNumberInputValue:t,apartmentInputValue:a,entranceInputValue:n,floorInputValue:l,doorCodeInputValue:m,isSubmitButtonDisabled:f,nextFocus:b,isPhoneValid:h,handleAddressKeyPress:x,handlePhoneKeyPress:E,handleApartmentKeyPress:C,handleSubmitClick:y,handleDoorCodeKeyPress:v,handleEntranceKeyPress:w,handleFloorKeyPress:I}=Object(d.a)();return o.a.createElement(g,null,o.a.createElement(u.a,null,o.a.createElement(s.a,{title:"\u0423\u043b\u0438\u0446\u0430 \u0438 \u0434\u043e\u043c",onChange:r.a,onRootKeyPress:x,value:e}),o.a.createElement(s.a,{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",shouldFocusOnMount:b===c.a.ADDRESS_FULL_PHONE,onChange:r.a,onRootKeyPress:E,value:t,isInvalid:!h})),o.a.createElement(u.d,null,o.a.createElement(s.a,{title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",shouldFocusOnMount:b===c.a.ADDRESS_FULL_APARTMENT,onChange:r.a,onRootKeyPress:C,value:a}),o.a.createElement(s.a,{title:"\u041f\u043e\u0434\u044a\u0435\u0437\u0434",shouldFocusOnMount:b===c.a.ADDRESS_FULL_ENTRANCE,onChange:r.a,onRootKeyPress:w,value:n}),o.a.createElement(s.a,{title:"\u042d\u0442\u0430\u0436",shouldFocusOnMount:b===c.a.ADDRESS_FULL_FLOOR,onChange:r.a,onRootKeyPress:I,value:l})),o.a.createElement(u.e,null,o.a.createElement(s.a,{title:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",shouldFocusOnMount:b===c.a.ADDRESS_FULL_DOOR_CODE,onChange:r.a,onRootKeyPress:v,value:m})),o.a.createElement(u.b,null,o.a.createElement(p,{view:f?i.d.secondary:i.d.primary,shouldFocusOnMount:b===c.a.ADDRESS_FULL_ALL,disabled:f,shouldLockAfterClick:!0,onClick:y},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement(u.f,null,o.a.createElement(u.c,{fill:"url(#plasma-green-gradient)"},o.a.createElement("linearGradient",{id:"plasma-green-gradient"},o.a.createElement("stop",{offset:"0%",stopColor:"#00ffdf"}),o.a.createElement("stop",{offset:"100%",stopColor:"#00ff5a"}))),"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0433\u043e\u043b\u043e\u0441\u043e\u043c")))}},441:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(1),r=a(5),i=a(121),s=a(93),c=a(23),d=a(2);const u=l.c.div.withConfig({componentId:"sc-10j84gn-0"})(["position:absolute;left:16px;top:18px;font-weight:500;font-size:16px;line-height:20px;letter-spacing:-0.3px;color:",";transition:font-size 0.2s ease-in-out,top 0.2s ease-in-out,color 0.2s ease-in-out;",";"],({isInvalid:e,isFocused:t})=>e?d.critical:t?d.accent:d.tertiary,({isMinified:e})=>e&&Object(l.b)(["top:6px;font-size:12px;line-height:16px;"])),p=l.c.input.withConfig({componentId:"sc-10j84gn-1"})(["margin-top:","px;height:40px;width:100%;font-family:inherit;font-weight:",";font-size:16px;color:",";caret-color:",";line-height:20px;letter-spacing:-0.3px;padding:0;border:none;background:transparent;"],({$isEmpty:e})=>e?4:12,d.fontWeights.Medium,({disabled:e})=>e?"rgba(255, 255, 255, 0.28)":"#fff",d.accent),g=l.c.div.withConfig({componentId:"sc-10j84gn-2"})(["position:relative;box-sizing:border-box;height:64px;padding:4px 16px;background-color:",";"],d.surfaceLiquid01),m=l.c.div.withConfig({componentId:"sc-10j84gn-3"})(["margin:-4px;height:64px;box-sizing:border-box;border:4px solid transparent;border-radius:16px;overflow:hidden;transition:border ",";"],c.a.default),f=({title:e,value:t,className:a,type:n="text",disabled:l,isInvalid:r,onSubmit:i,onChange:c,onRootKeyPress:d,forwardRef:f,forwardInputRef:b,shouldFocusOnMount:h,shouldFocusInputOnMount:x})=>{const[E,C]=o.a.useState(!1),[y,v]=o.a.useState(!1),w=o.a.useRef(null),I=b||w,O=Object(s.a)(f),j=h?O:f,k=o.a.useCallback(()=>C(!0),[C]),F=o.a.useCallback(()=>{C(!1),v(!1)},[C,v]),P=o.a.useCallback(e=>{I&&I.current&&(d&&d(e),e.defaultPrevented||(I.current.focus(),v(!0)))},[d,v,I]),R=o.a.useCallback(e=>{i&&e&&"Enter"===e.key&&(e.stopPropagation(),i(e))},[i]);o.a.useEffect(()=>{x&&I&&I.current&&(I.current.focus(),v(!0))},[x,I,v]);const L=y||Boolean(t),S=!t.length;return o.a.createElement(m,{tabIndex:l?-1:0,className:a,ref:j,isFocused:E,onFocus:k,onBlur:F,onKeyPress:P},o.a.createElement(g,null,o.a.createElement(u,{isMinified:L,isFocused:E,isInvalid:r},e),o.a.createElement(p,{tabIndex:-1,ref:I,type:n,disabled:l,onKeyPress:R,onChange:c,value:t,$isEmpty:S})))};var b=a(11),h=a(14),x=a(6),E=a(63),C=a(45),y=a(82);const v=l.c.div.withConfig({componentId:"pjyucl-0"})(["overflow-y:auto;box-sizing:border-box;display:grid;grid-row-gap:16px;grid-column-gap:32px;padding:14px 16px 0;"]),w=Object(l.c)(r.a).withConfig({componentId:"pjyucl-1"})(["display:flex;align-items:center;background:linear-gradient(to right,#00ffdf,#00ff5a);color:transparent;-webkit-background-clip:text;padding-bottom:16px;"]),I=Object(l.c)(i.a).withConfig({componentId:"pjyucl-2"})(["height:64px;width:72px;box-sizing:border-box;background:rgba(255,255,255,0.03);box-shadow:inset 0 2px 2px rgba(255,255,255,0.15);border-radius:100%;margin-right:16px;padding:16px;"]),O=l.c.div.withConfig({componentId:"pjyucl-3"})(["display:grid;"]),j=Object(l.c)(O).withConfig({componentId:"pjyucl-4"})(["padding-bottom:16px;"]),k=Object(l.c)(O).withConfig({componentId:"pjyucl-5"})(["grid-template-columns:1fr 1fr;grid-column-gap:8px;"]),F=Object(l.c)(b.a).withConfig({componentId:"pjyucl-6"})(["flex-grow:0;padding:4px 0;width:143px;font-size:16px;border-radius:16px;&[disabled]{opacity:0.3;}"]);t.default=()=>{const e=Object(h.a)(),{addressInputValue:t,phoneNumberInputValue:a,apartmentInputValue:n,entranceInputValue:l,floorInputValue:r,doorCodeInputValue:i,isSubmitButtonDisabled:s,isPhoneValid:c}=Object(x.a)(({addressFullPage:e})=>e),d=o.a.useCallback(t=>{e(Object(E.a)(t.target.value))},[e]),u=o.a.useCallback(t=>{e(Object(E.c)(t.target.value))},[e]),p=o.a.useCallback(t=>{e(Object(E.d)(t.target.value))},[e]),g=o.a.useCallback(t=>{e(Object(E.b)(t.target.value))},[e]),m=o.a.useCallback(({nativeEvent:t})=>{if(t instanceof InputEvent){const{inputType:a,data:n}=t;e(Object(E.e)({inputType:a,data:n}))}},[e]),P=o.a.useCallback(()=>{e(Object(C.a)())},[e]);return o.a.createElement(v,null,o.a.createElement(w,null,o.a.createElement(I,{fill:"url(#plasma-green-gradient)"},o.a.createElement("linearGradient",{id:"plasma-green-gradient"},o.a.createElement("stop",{offset:"0%",stopColor:"#00FFE6"}),o.a.createElement("stop",{offset:"100%",stopColor:"#80FF00"}))),"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0433\u043e\u043b\u043e\u0441\u043e\u043c"),o.a.createElement(j,null,o.a.createElement(f,{title:"\u0423\u043b\u0438\u0446\u0430 \u0438 \u0434\u043e\u043c",value:t,onChange:y.a})),o.a.createElement(O,null,o.a.createElement(f,{title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",value:n,onChange:d})),o.a.createElement(k,null,o.a.createElement(f,{title:"\u041f\u043e\u0434\u044a\u0435\u0437\u0434",value:l,onChange:u}),o.a.createElement(f,{title:"\u042d\u0442\u0430\u0436",value:r,onChange:p})),o.a.createElement(j,null,o.a.createElement(f,{title:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",value:i,onChange:g})),o.a.createElement(j,null,o.a.createElement(f,{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",value:a,onChange:m,isInvalid:!c})),o.a.createElement(O,null,o.a.createElement(F,{view:b.d.primary,shouldLockAfterClick:!0,onClick:P,disabled:s},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))}}}]);
//# sourceMappingURL=AddressFullAll.d08ad2ca.chunk.js.map