!function(){function e(e,n){var o=Math.random()>.3;return new Promise((function(t,a){var c={position:e,delay:n};setTimeout((function(){o?t(c):a(c)}),n)}))}console.log("test12991"),document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var o=n.currentTarget.elements,t=o.delay,a=o.step,c=o.amount;t=Number(t.value),a=Number(a.value),c=Number(c.value);for(var r=t,i=1;i<=c;i++)e(i,r).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),r+=a}))}();
//# sourceMappingURL=03-promises.cfd04678.js.map
