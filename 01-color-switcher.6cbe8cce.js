const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.body};t.startBtn.addEventListener("click",(function a(){if(a){t.startBtn.disabled=!0;const a=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3);t.startBtn.dataset.intervalId=a}})),t.stopBtn.addEventListener("click",(function(){const a=t.startBtn.dataset.intervalId;clearInterval(a),t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.6cbe8cce.js.map