
(function () {
  "use strict";
  var VAPI_PUBLIC_KEY = "e8049e40-6b1e-41c3-ba99-fbfd16cf9a65";
  var ASSISTANT_ID    = "f86f9947-20d8-4885-ab80-659ffa65b4bf";
  var PHOTO_URL       = "https://highermarketingplus.com/figma-assets/agent-male.jpg";

  var css = [
    "@keyframes hmp-enter{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}",
    "@keyframes hmp-spin{to{transform:rotate(360deg)}}",
    "@keyframes hmp-wave{0%{transform:scaleY(.3)}100%{transform:scaleY(1)}}",
    "@keyframes hmp-ripple{0%{transform:translate(-50%,-50%) scale(.85);opacity:.7}100%{transform:translate(-50%,-50%) scale(1.8);opacity:0}}",
    "@keyframes hmp-blink{0%,100%{opacity:1}50%{opacity:.4}}",
    "@keyframes hmp-breathe{0%,100%{transform:translateY(-50%) scale(1)}50%{transform:translateY(-50%) scale(1.08)}}",
    "#hmp-root{position:fixed;bottom:24px;right:24px;z-index:2147483647;display:flex;align-items:center;padding:14px;cursor:pointer;user-select:none;-webkit-user-select:none;animation:hmp-enter .5s cubic-bezier(.22,1,.36,1) both}",
    "#hmp-halo{position:absolute;left:0;top:50%;width:122px;height:122px;border-radius:50%;filter:blur(22px);pointer-events:none;animation:hmp-breathe 4s ease-in-out infinite;transition:opacity .4s,background .5s}",
    ".hmp-ripple{position:absolute;left:46px;top:50%;width:76px;height:76px;border-radius:50%;border:2px solid rgba(56,189,248,.5);animation:hmp-ripple 2.2s cubic-bezier(.22,1,.36,1) infinite;pointer-events:none}",
    "#hmp-pill{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.97);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:999px;padding:6px 18px 6px 6px;position:relative;z-index:1;transition:transform .35s,box-shadow .4s}",
    "#hmp-avatar-wrap{position:relative;flex-shrink:0}",
    "#hmp-avatar{width:56px;height:56px;border-radius:50%;background-size:cover;background-position:52% 30%;background-color:#e5e7eb;overflow:hidden;position:relative;box-shadow:inset 0 -8px 18px rgba(0,0,0,.12)}",
    "#hmp-wave-overlay{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(180deg,transparent,rgba(15,23,42,.75) 55%,rgba(15,23,42,.92));display:flex;align-items:flex-end;justify-content:center;padding-bottom:5px;gap:2px;overflow:hidden;transition:height .3s cubic-bezier(.22,1,.36,1)}",
    ".hmp-bar{border-radius:99px;background:linear-gradient(180deg,#7dd3fc,#38bdf8);box-shadow:0 0 4px rgba(56,189,248,.5);transform-origin:bottom;animation:hmp-wave ease-in-out infinite alternate}",
    "#hmp-spin-ring{position:absolute;inset:-4px;border-radius:50%;background:conic-gradient(from 0deg,#38bdf8,#a78bfa,#22d3ee,#38bdf8);animation:hmp-spin 3s linear infinite;-webkit-mask:radial-gradient(circle,transparent 57%,#000 59%);mask:radial-gradient(circle,transparent 57%,#000 59%)}",
    "#hmp-dot{position:absolute;bottom:0;right:0;width:15px;height:15px;border-radius:50%;border:2.5px solid #fff;transition:background .3s}",
    "#hmp-text{display:flex;flex-direction:column;gap:1px}",
    "#hmp-label{font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;font-size:13.5px;font-weight:600;color:#1c1917;letter-spacing:-.01em;white-space:nowrap}",
    "#hmp-sub{font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;font-size:11.5px;font-weight:500;color:#a8a29e;display:flex;align-items:center;gap:4px;white-space:nowrap}",
    "#hmp-dot-sm{width:6px;height:6px;border-radius:50%;flex-shrink:0;display:inline-block}"
  ].join("");
  var styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  var root = document.createElement("div");
  root.id = "hmp-root";
  root.setAttribute("role","button");
  root.setAttribute("aria-label","Talk to our AI assistant");
  root.innerHTML = '<div id="hmp-halo"></div><div id="hmp-pill"><div id="hmp-avatar-wrap"><div id="hmp-spin-ring" style="display:none"></div><div id="hmp-avatar"><div id="hmp-wave-overlay" style="height:0%"><div class="hmp-bar" style="width:3px;height:30%;animation-duration:.48s;animation-delay:0s"></div><div class="hmp-bar" style="width:3px;height:55%;animation-duration:.4s;animation-delay:.06s"></div><div class="hmp-bar" style="width:3px;height:90%;animation-duration:.52s;animation-delay:.12s"></div><div class="hmp-bar" style="width:3px;height:48%;animation-duration:.44s;animation-delay:.08s"></div><div class="hmp-bar" style="width:3px;height:78%;animation-duration:.5s;animation-delay:.04s"></div><div class="hmp-bar" style="width:3px;height:40%;animation-duration:.46s;animation-delay:.1s"></div><div class="hmp-bar" style="width:3px;height:65%;animation-duration:.42s;animation-delay:.06s"></div></div></div><div id="hmp-dot"></div></div><div id="hmp-text"><div id="hmp-label">Hi! Got a question?</div><div id="hmp-sub"><span id="hmp-dot-sm"></span><span id="hmp-sub-text">Tap to talk</span></div></div></div>';
  var r1=document.createElement("div"); r1.className="hmp-ripple"; r1.style.display="none"; r1.style.animationDelay="0s";
  var r2=document.createElement("div"); r2.className="hmp-ripple"; r2.style.display="none"; r2.style.animationDelay="0.85s";
  root.appendChild(r1); root.appendChild(r2);
  // Avatar photo set now while element is still off-DOM
  root.querySelector("#hmp-avatar").style.backgroundImage="url('"+PHOTO_URL+"')";

  var state="idle", vapiInstance=null;
  // These are declared here but assigned after appendChild in the timeout
  var halo,pill,spinRing,wave,dot,dotSm,label,subText,bars;

  function setIdle(){state="idle";root.setAttribute("aria-label","Talk to our AI assistant");halo.style.background="radial-gradient(circle,rgba(251,146,60,.42) 0%,rgba(251,113,133,.18) 45%,transparent 70%)";halo.style.opacity=".55";pill.style.boxShadow="0 12px 32px rgba(244,114,82,.2),0 2px 6px rgba(0,0,0,.06),inset 0 1px 1px rgba(255,255,255,.9)";pill.style.transform="translateY(0)";spinRing.style.display="none";wave.style.height="0%";r1.style.display=r2.style.display="none";bars.forEach(function(b){b.style.animationPlayState="paused";});dot.style.background="#22c55e";dot.style.boxShadow="0 0 6px rgba(34,197,94,.4)";dot.style.animation="none";dotSm.style.background="#22c55e";label.textContent="Hi! Got a question?";subText.textContent="Tap to talk";}
  function setLoading(){state="loading";label.textContent="Connecting…";subText.textContent="Please wait";dot.style.background="#fbbf24";dot.style.animation="hmp-blink 1s ease-in-out infinite";dotSm.style.background="#fbbf24";}
  function setActive(){state="active";root.setAttribute("aria-label","End voice call");halo.style.background="radial-gradient(circle,rgba(125,211,252,.5) 0%,rgba(167,139,250,.2) 45%,transparent 70%)";halo.style.opacity=".9";pill.style.boxShadow="0 14px 36px rgba(56,189,248,.25),0 2px 6px rgba(0,0,0,.07),inset 0 1px 1px rgba(255,255,255,.95)";spinRing.style.display="block";wave.style.height="42%";r1.style.display=r2.style.display="block";bars.forEach(function(b){b.style.animationPlayState="running";});dot.style.background="#fb7185";dot.style.boxShadow="0 0 8px rgba(251,113,133,.65)";dot.style.animation="hmp-blink 1s ease-in-out infinite";dotSm.style.background="#fb7185";label.textContent="I’m listening…";subText.textContent="Speak now";}

  root.addEventListener("mouseenter",function(){if(state==="idle"&&halo){halo.style.opacity=".75";pill.style.transform="translateY(-2px)";}});
  root.addEventListener("mouseleave",function(){if(state==="idle"&&halo){halo.style.opacity=".55";pill.style.transform="translateY(0)";}});

  // html-script-tag is the correct browser CDN SDK — confirmed working
  var sdkScript=document.createElement("script");
  sdkScript.src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
  sdkScript.async=true;
  sdkScript.onload=function(){
    var sdk=window.vapiSDK;
    if(!sdk||!sdk.run)return;
    var before=document.body.childElementCount;
    var instance=sdk.run({apiKey:VAPI_PUBLIC_KEY,assistant:ASSISTANT_ID,config:{position:"bottom-right",offset:"0px"}});
    Array.from(document.body.children).slice(before).forEach(function(el){el.style.display="none";});
    vapiInstance=instance;
    instance.on("call-start",function(){setActive();});
    instance.on("call-end",function(){setIdle();});
    instance.on("error",function(e){console.error("[HMP Vapi]",e);setIdle();});
  };
  document.head.appendChild(sdkScript);

  root.addEventListener("click",function(){
    if(!vapiInstance||state==="loading")return;
    if(state==="active"){vapiInstance.stop();}
    else{setLoading();vapiInstance.start(ASSISTANT_ID).catch(function(){setIdle();});}
  });

  // Don't add widget to DOM until 5 seconds — prevents the enter animation firing immediately
  setTimeout(function(){
    document.body.appendChild(root);
    // Assign element refs NOW that the element is in the DOM
    halo=root.querySelector("#hmp-halo");
    pill=root.querySelector("#hmp-pill");
    spinRing=root.querySelector("#hmp-spin-ring");
    wave=root.querySelector("#hmp-wave-overlay");
    dot=root.querySelector("#hmp-dot");
    dotSm=root.querySelector("#hmp-dot-sm");
    label=root.querySelector("#hmp-label");
    subText=root.querySelector("#hmp-sub-text");
    bars=root.querySelectorAll(".hmp-bar");
    setIdle();
  },5000);
})();
