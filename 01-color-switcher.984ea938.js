const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),o=t=>t.setAttribute("disabled",""),l=t=>t.removeAttribute("disabled");let n=null;function a(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(()=>{o(e),t.style.backgroundColor=a(),n=setInterval((()=>{t.style.backgroundColor=a()}),1e3),l(r)})),r.addEventListener("click",(()=>{clearInterval(n),o(r),l(e)}));
//# sourceMappingURL=01-color-switcher.984ea938.js.map
