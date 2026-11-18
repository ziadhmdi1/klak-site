const S=[["Production","إنتاج فيديو ومحتوى بصري بنية واضحة واتجاه إبداعي."],["Photography","تصوير بيلقط أكتر من الشكل: الإحساس والهوية."],["Videography","حكي بصري وفيديوهات حملات ومحتوى بيوصّل."],["Creative Ideas","أفكار واتجاه إبداعي وزوايا مختلفة تخلّي البراند يبان."],["Marketing","تفكير استراتيجي وتواصل إبداعي يوصّلك لجمهورك."]];
const P=[["Understand","نفهم البراند، الجمهور، والهدف."],["Imagine","نطوّر الفكرة ونحدد الاتجاه الإبداعي."],["Create","نحوّل الفكرة لمحتوى وتجربة بصرية."],["Deliver","نطلع الشغل بالشكل المناسب ونجهزه للاستخدام والنشر."]];
const $=s=>document.querySelector(s),pad=i=>String(i+1).padStart(2,"0");
$("#svc").innerHTML=S.map((s,i)=>`<li class="rv"><span class="n">${pad(i)}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join("");
$("#steps").innerHTML=P.map((s,i)=>`<div class="st rv"><div class="n">${pad(i)}</div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("");
$("#grid").innerHTML=CONFIG.projects.map(p=>{
  const m=p.placeholder?`<b>Placeholder — ${p.type}</b>`:(p.type==="video"?`<video src="${p.media}" muted loop playsinline controls preload="none"></video>`:`<img src="${p.media}" alt="${p.title}" loading="lazy">`);
  return `<article class="pj rv"><div class="ph" style="aspect-ratio:${p.ratio}">${m}</div><h3><span>${p.title}</span><span class="lbl">${p.cat}</span></h3>${p.desc?`<small>${p.desc}</small>`:""}${p.placeholder?`<small>مساحة مؤقتة — مش شغل منشور.</small>`:""}</article>`}).join("");
const ch=[];
ch.push(`<li><span class="lbl">Instagram</span><a href="${CONFIG.instagram}" target="_blank" rel="noopener">@klak_agency</a></li>`);
if(CONFIG.email)ch.push(`<li><span class="lbl">Email</span><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>`);
if(CONFIG.whatsapp)ch.push(`<li><span class="lbl">WhatsApp</span><a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">+${CONFIG.whatsapp}</a></li>`);
$("#ch").innerHTML=ch.join("");
$("#y").textContent=new Date().getFullYear();
// form: no backend — opens email/WhatsApp/Instagram with the message prefilled
const f=$("#f"),fn=$("#fn");
if(!CONFIG.email&&!CONFIG.whatsapp)fn.textContent="الفورم هيشتغل أول ما نضيف الإيميل أو الواتساب في ملف الإعدادات. دلوقتي كلمنا على إنستجرام.";
f.addEventListener("submit",e=>{e.preventDefault();
  const n=f.name.value.trim(),m=f.msg.value.trim();
  if(!n||!m){fn.textContent="من فضلك املا الاسم والفكرة.";return}
  const t=`الاسم: ${n}\n\n${m}`;
  if(CONFIG.whatsapp)location.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
  else if(CONFIG.email)location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("مشروع جديد — "+n)}&body=${encodeURIComponent(t)}`;
  else window.open(CONFIG.instagram,"_blank","noopener");
});
// nav
const bg=$("#bg"),mn=$("#menu");
bg.onclick=()=>{const o=mn.classList.toggle("open");bg.setAttribute("aria-expanded",o);bg.textContent=o?"✕":"☰"};
mn.addEventListener("click",e=>{if(e.target.tagName==="A"){mn.classList.remove("open");bg.textContent="☰"}});
// reveal
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));

// optional hero background video
if(CONFIG.heroVideo&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const v=document.createElement("video");v.className="hv";v.src=CONFIG.heroVideo;v.muted=true;v.loop=true;v.autoplay=true;v.playsInline=true;v.setAttribute("aria-hidden","true");document.getElementById("top").prepend(v);v.play().catch(()=>{})}
