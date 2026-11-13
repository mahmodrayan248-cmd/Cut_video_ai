# قصّاص: ملفات الاستضافة الذاتية

الهدف: ما يعتمد التطبيق على jsdelivr ولا huggingface ولا googleapis. كل شي من موقعك.

## شو بالمجلد
- `index.html` و `sw.js` و `manifest.json`: التطبيق.
- `lib/`: المكتبات جاهزة (transformers وmediapipe وmp4box وملفات wasm). ارفعها كما هي.
- `models/`: النماذج. فاضي هلأ، بتعبّيه بالخطوة التالية.
- `download_models.py`: سكربت بينزّل النماذج.

## الخطوات
1. على جهاز عنده نت (كمبيوتر): `pip install huggingface_hub` ثم `python download_models.py`
   (أضف `--small` للكلام الدقيق، `--clip` لبحث الصورة، `--gpu` لملفات WebGPU).
2. ارفع كل المجلد (index.html و sw.js و manifest.json و lib و models) على استضافتك.
3. افتح الموقع. أول مرة بينزّل من موقعك، وبينحفظ بالمتصفح.

## بدون ما ترفع models
التطبيق بيرجع تلقائيًا لـhuggingface كاحتياط، يعني بيشتغل بس بطيء أو ما بيشتغل إذا محجوب.

## حدود الاستضافة (مهم)
- Cloudflare Pages: أقصى حجم ملف 25 ميغا (ملفات الكلام أكبر). استخدم Cloudflare R2 أو VPS للنماذج.
- GitHub Pages: أقصى حجم ملف 100 ميغا (whisper-small بوضع gpu أكبر).
- لو النماذج على دومين تاني: لازم تفعّل CORS عليه، وغيّر `MODELS` بأول `index.html`.
