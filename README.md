# KLAK website

موقع ستاتيك (HTML/CSS/JS) من غير أي build — Vercel بيرفعه زي ما هو.

## النشر على Vercel (مرة واحدة)
1. اعمل Repository جديد على GitHub (مثلاً `klak-site`) وارفع كل محتويات الفولدر ده (Add file > Upload files).
2. ادخل vercel.com واعمل Login بحساب GitHub.
3. Add New > Project > اختار الـ repo > Deploy. سيب كل الإعدادات زي ما هي (Framework: Other).
4. هتاخد لينك زي `klak-site.vercel.app`. بعد كده أي تعديل على GitHub بيتنشر لوحده خلال دقيقة.

## التعديل
- **`config.js`**: الإنستجرام، الإيميل، الواتساب، فيديو الهيرو، ومشاريع الشغل.
- **صور وفيديوهات الشغل**: حطها في `assets/work/` وبعدين في `config.js` غيّر المشروع إلى
  `{title:"اسم", cat:"Photography", ratio:"4/5", type:"image", media:"assets/work/اسم.jpg"}` (واشيل `placeholder:true`).
- **فيديو الخلفية**: حط الملف في `assets/hero.mp4` واكتب `heroVideo:"assets/hero.mp4"`.
- **الخدمات والنصوص**: الخدمات في أول `main.js` (المصفوفة `S`)، والباقي في `index.html`.
- **الدومين**: من Vercel > Settings > Domains لما تحب تربط دومين.
