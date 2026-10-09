/* NABDA-AI interactions: language, navigation, reveal and contact */
(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const translations = {
    en: {
      "nav.home":"Home","nav.about":"About","nav.technology":"Technology","nav.battery":"Battery Intelligence","nav.renewable":"Renewable Energy","nav.research":"Research","nav.contact":"Contact","nav.cta":"Contact Us",
      "hero.eyebrow":"INTELLIGENT ENERGY TECHNOLOGY","hero.title":"Intelligence That Powers the <span class=\"gradient-text\">Future.</span>","hero.description":"NABDA-AI explores advanced battery intelligence, recovery technologies, and renewable energy systems to support a smarter, more sustainable energy future.","hero.primary":"Explore Our Technology <span class=\"arrow\">↗</span>","hero.secondary":"Contact Our Team","hero.note":"Engineering-led research. Smarter energy decisions.","hero.label1":"ENERGY INTELLIGENCE","hero.label2":"Built for a smarter future",
      "strip.label":"OUR FOCUS","strip.one":"Battery Intelligence","strip.two":"AI & Sensor Systems","strip.three":"Renewable Energy","strip.four":"Research & Development",
      "about.kicker":"01 / ABOUT NABDA-AI","about.title":"Engineering a more <span class=\"gradient-text\">intelligent energy</span> future.","about.body":"NABDA-AI brings together battery diagnostics, recovery research, artificial intelligence, and renewable energy engineering. Our focus is on developing and exploring technologies that make energy systems easier to understand, monitor, and improve.","about.link":"Discover our approach <span>↗</span>","about.cardlabel":"OUR MISSION","about.cardtitle":"Smarter systems.<br>More informed decisions.","about.cardfoot":"Research • Engineering • Sustainability",
      "focus.one.title":"Battery Intelligence","focus.one.body":"Diagnostics, monitoring, and battery behavior analysis.","focus.two.title":"AI & Sensor Systems","focus.two.body":"Data-driven insights for more informed engineering.","focus.three.title":"Renewable Energy","focus.three.body":"Solar, wind, and energy storage integration.","focus.four.title":"Research & Development","focus.four.body":"Testing ideas, validating results, and learning by building.",
      "technology.kicker":"02 / TECHNOLOGY","technology.title":"Turning engineering into <span class=\"gradient-text\">intelligent solutions.</span>","technology.intro":"Explore the connected technologies behind our work—from battery condition insights to smarter energy systems.","technology.card1.kicker":"DIAGNOSTICS & RECOVERY","technology.card1.title":"Battery Intelligence","technology.card1.body":"Explore battery measurements, sulfation research, pulse-based treatment concepts, and performance evaluation.","technology.card2.kicker":"DATA & INTELLIGENCE","technology.card2.title":"AI & Sensor Systems","technology.card2.body":"Translate measurements into useful signals, trends, and engineering insights.","technology.card3.kicker":"CLEAN ENERGY","technology.card3.title":"Renewable Energy Systems","technology.card3.body":"Connect generation, storage, monitoring, and energy use through an integrated systems view.","common.learn":"Explore technology <span>↗</span>",
      "battery.kicker":"03 / BATTERY INTELLIGENCE","battery.title":"Understand the battery.<br><span class=\"gradient-text\">Improve the insight.</span>","battery.intro":"We explore diagnostic methods and treatment concepts designed to help engineers understand battery condition and evaluate performance.","battery.chip":"RESEARCH & PROTOTYPING","battery.featuretitle":"From electrical signals to meaningful analysis.","battery.featurebody":"Battery behavior can be studied through voltage, current, temperature, and time-based response. These measurements can help guide testing and support more informed evaluation.","battery.point1":"Battery diagnostics and condition monitoring","battery.point2":"Sulfation research and pulse-treatment concepts","battery.point3":"Sensor measurements and data analysis","battery.point4":"Performance evaluation under defined test conditions","battery.disclaimer":"Recovery outcomes depend on battery chemistry, condition, and test protocol. Research concepts are not a guarantee of restoring every battery.","battery.charttitle":"PULSE RESPONSE / ILLUSTRATIVE","battery.charttag":"SIGNAL VIEW",
      "process.kicker":"04 / HOW IT WORKS","process.title":"From diagnosis to <span class=\"gradient-text\">decision.</span>","process.intro":"A six-step workflow concept for evaluating battery condition and deciding what to do next.","process.badge":"ILLUSTRATIVE CONCEPT","process.note":"Illustrative workflow concept. Outcomes depend on battery chemistry, condition, and a validated test protocol.","process.s1.name":"Diagnose","process.s1.title":"Establish the baseline","process.s1.body":"Measure voltage, current, and temperature to record the battery's starting condition.","process.s2.name":"Analyze","process.s2.title":"Interpret the signals","process.s2.body":"Compare measurements against the battery type and test conditions to identify likely causes of degradation.","process.s3.name":"Treat","process.s3.title":"Apply a controlled treatment","process.s3.body":"For suitable lead-acid batteries, evaluate controlled pulse treatment as a research concept within defined limits.","process.s4.name":"Monitor","process.s4.title":"Watch the response","process.s4.body":"Track the battery during treatment with real-time sensing to detect unexpected behavior.","process.s5.name":"Re-Test","process.s5.title":"Measure again","process.s5.body":"Repeat the baseline tests under the same conditions so before-and-after results can be compared fairly.","process.s6.name":"Decide","process.s6.title":"Make an informed decision","process.s6.body":"Use the results to decide whether to continue using the battery, repeat the process, or retire it.",
      "diagnostics.kicker":"05 / AI MONITORING","diagnostics.title":"A clearer view of <span class=\"gradient-text\">battery health.</span>","diagnostics.intro":"A front-end dashboard concept showing how battery signals could be organized for monitoring and analysis.","dashboard.title":"NABDA Monitoring Console","dashboard.subtitle":"BATTERY SYSTEM / DEMO ENVIRONMENT","dashboard.demo":"ILLUSTRATIVE DATA","dashboard.soc":"State of Charge","dashboard.health":"Battery Health","dashboard.voltage":"Voltage","dashboard.current":"Current","dashboard.temperature":"Temperature","dashboard.demoValue":"Demo value","dashboard.trend":"Voltage trend","dashboard.last12":"Last 12 hours · illustrative","dashboard.system":"SYSTEM STATUS","dashboard.normal":"Normal (demo)","dashboard.statusbody":"This interface is a visual concept and is not connected to physical sensors.","dashboard.details":"View details","dashboard.extra":"A real deployment would require sensor hardware, data acquisition, and a secure backend.","dashboard.disclaimer":"All displayed measurements are illustrative demo values, not live readings from a battery.",
      "renewable.kicker":"06 / RENEWABLE ENERGY","renewable.title":"Clean energy.<br><span class=\"gradient-text\">Intelligently connected.</span>","renewable.body":"A systems approach to solar, wind, energy storage, and monitoring—designed around the way energy is generated, stored, and used.","renewable.cta":"Explore collaboration <span class=\"arrow\">↗</span>","renewable.solar":"Solar PV","renewable.solarbody":"Photovoltaic generation and performance monitoring.","renewable.wind":"Wind Energy","renewable.windbody":"Wind power systems and operational insights.","renewable.storage":"Energy Storage","renewable.storagebody":"Storage concepts for flexible energy use.","renewable.hybrid":"Hybrid Systems","renewable.hybridbody":"Coordinating multiple energy sources and loads.",
      "research.kicker":"07 / RESEARCH & DEVELOPMENT","research.title":"Built on curiosity.<br><span class=\"gradient-text\">Guided by evidence.</span>","research.intro":"A practical engineering mindset: define the question, measure the system, analyze the data, and document the outcome.","research.imagecaption":"ENGINEERING & EXPERIMENTATION","research.item1":"Battery testing & characterization","research.item1body":"Structured measurements to better understand behavior under defined conditions.","research.item2":"Sensors & embedded systems","research.item2body":"Connecting physical measurements to reliable data collection.","research.item3":"AI-assisted analysis","research.item3body":"Exploring patterns, anomalies, and useful decision-support signals.","research.item4":"Renewable energy integration","research.item4body":"Examining how generation, storage, and consumption interact.",
      "showcase.kicker":"08 / TECHNOLOGY SHOWCASE","showcase.title":"Connected disciplines.<br><span class=\"gradient-text\">One energy vision.</span>","showcase.intro":"A cross-disciplinary view of the technologies and research areas that inform NABDA-AI.","showcase.one":"Battery Intelligence","showcase.onebody":"Diagnostics and battery analysis.","showcase.two":"Recovery & Diagnostics","showcase.twobody":"Research, testing, and evaluation.","showcase.three":"AI & Sensor Systems","showcase.threebody":"Useful signals from engineering data.","showcase.four":"Renewable Energy","showcase.fourbody":"Solar, wind, and hybrid systems.",
      "collab.kicker":"LET'S WORK TOGETHER","collab.title":"Have an energy challenge to explore?","collab.body":"We welcome conversations with engineers, researchers, students, and organizations interested in battery technology and sustainable energy systems.","collab.cta":"Start a conversation <span class=\"arrow\">↗</span>",
      "contact.kicker":"09 / CONTACT","contact.title":"Let's build a <span class=\"gradient-text\">smarter energy</span> future.","contact.body":"Have a question, an idea, or a potential collaboration? Get in touch with NABDA-AI.","contact.facebook":"Connect with us","contact.linkedin":"Connect professionally",
      "form.title":"Send us a message","form.subtitle":"Fields marked * are required.","form.name":"Full name *","form.email":"Email address *","form.subject":"Subject","form.option1":"General inquiry","form.option2":"Battery technology","form.option3":"Renewable energy","form.option4":"Research collaboration","form.message":"Message *","form.submit":"Prepare email","form.note":"This form opens your email application; it does not send messages directly from this website.",
      "footer.tagline":"Battery intelligence, renewable energy, and sustainable technology for a smarter tomorrow.","footer.quick":"Quick links","footer.focus":"Focus areas","footer.ai":"AI & Diagnostics","footer.lab":"How It Works","footer.connect":"Connect with us","footer.rights":"All rights reserved.","footer.backtop":"Back to top ↑","footer.note":"Engineering for a more informed energy future."
    },
    ar: {
      "nav.home":"الرئيسية","nav.about":"من نحن","nav.technology":"التكنولوجيا","nav.battery":"ذكاء البطاريات","nav.renewable":"الطاقة المتجددة","nav.research":"البحث والتطوير","nav.contact":"تواصل معنا","nav.cta":"تواصل معنا",
      "hero.eyebrow":"تكنولوجيا الطاقة الذكية","hero.title":"ذكاء يدفع <span class=\"gradient-text\">المستقبل.</span>","hero.description":"تستكشف NABDA-AI تقنيات ذكاء البطاريات واستعادتها وأنظمة الطاقة المتجددة لدعم مستقبل أكثر ذكاءً واستدامة.","hero.primary":"اكتشف تقنياتنا <span class=\"arrow\">↗</span>","hero.secondary":"تواصل مع فريقنا","hero.note":"بحث هندسي وقرارات طاقة أكثر ذكاءً.","hero.label1":"ذكاء الطاقة","hero.label2":"نبني مستقبلًا أكثر ذكاءً",
      "strip.label":"مجالات تركيزنا","strip.one":"ذكاء البطاريات","strip.two":"الذكاء الاصطناعي والحساسات","strip.three":"الطاقة المتجددة","strip.four":"البحث والتطوير",
      "about.kicker":"01 / عن NABDA-AI","about.title":"هندسة مستقبل <span class=\"gradient-text\">أكثر ذكاءً في الطاقة.</span>","about.body":"تجمع NABDA-AI بين تشخيص البطاريات وأبحاث استعادتها والذكاء الاصطناعي وهندسة الطاقة المتجددة. نركز على تطوير واستكشاف تقنيات تجعل أنظمة الطاقة أسهل في الفهم والمراقبة والتحسين.","about.link":"اكتشف منهجنا <span>↗</span>","about.cardlabel":"رسالتنا","about.cardtitle":"أنظمة أذكى.<br>وقرارات أكثر وعيًا.","about.cardfoot":"بحث • هندسة • استدامة",
      "focus.one.title":"ذكاء البطاريات","focus.one.body":"التشخيص والمراقبة وتحليل سلوك البطارية.","focus.two.title":"الذكاء الاصطناعي والحساسات","focus.two.body":"رؤى قائمة على البيانات لدعم القرارات الهندسية.","focus.three.title":"الطاقة المتجددة","focus.three.body":"تكامل الطاقة الشمسية والرياح والتخزين.","focus.four.title":"البحث والتطوير","focus.four.body":"اختبار الأفكار والتحقق من النتائج والتعلم بالتطبيق.",
      "technology.kicker":"02 / التكنولوجيا","technology.title":"تحويل الهندسة إلى <span class=\"gradient-text\">حلول ذكية.</span>","technology.intro":"اكتشف التقنيات المترابطة وراء عملنا، من فهم حالة البطارية إلى أنظمة الطاقة الأكثر ذكاءً.","technology.card1.kicker":"التشخيص والاستعادة","technology.card1.title":"ذكاء البطاريات","technology.card1.body":"استكشف قياسات البطارية وأبحاث السلفنة ومفاهيم المعالجة بالنبضات وتقييم الأداء.","technology.card2.kicker":"البيانات والذكاء","technology.card2.title":"الذكاء الاصطناعي والحساسات","technology.card2.body":"تحويل القياسات إلى إشارات واتجاهات ورؤى هندسية مفيدة.","technology.card3.kicker":"الطاقة النظيفة","technology.card3.title":"أنظمة الطاقة المتجددة","technology.card3.body":"ربط التوليد والتخزين والمراقبة والاستهلاك ضمن رؤية متكاملة.","common.learn":"استكشف التقنية <span>↗</span>",
      "battery.kicker":"03 / ذكاء البطاريات","battery.title":"افهم البطارية.<br><span class=\"gradient-text\">واستخلص رؤية أدق.</span>","battery.intro":"نستكشف أساليب التشخيص ومفاهيم المعالجة التي تساعد المهندسين على فهم حالة البطارية وتقييم أدائها.","battery.chip":"بحث ونماذج أولية","battery.featuretitle":"من الإشارات الكهربائية إلى التحليل المفيد.","battery.featurebody":"يمكن دراسة سلوك البطارية عبر الجهد والتيار ودرجة الحرارة والاستجابة مع الزمن. تساعد هذه القياسات على توجيه الاختبارات وتحسين التقييم.","battery.point1":"تشخيص البطارية ومراقبة حالتها","battery.point2":"أبحاث السلفنة ومفاهيم المعالجة بالنبضات","battery.point3":"قياسات الحساسات وتحليل البيانات","battery.point4":"تقييم الأداء ضمن ظروف اختبار محددة","battery.disclaimer":"تعتمد نتائج الاستعادة على كيمياء البطارية وحالتها وبروتوكول الاختبار. المفاهيم البحثية لا تضمن استعادة كل البطاريات.","battery.charttitle":"استجابة النبضات / رسم توضيحي","battery.charttag":"عرض الإشارة",
      "process.kicker":"04 / كيف نعمل","process.title":"من التشخيص إلى <span class=\"gradient-text\">القرار.</span>","process.intro":"تصور لمسار عمل من ست خطوات لتقييم حالة البطارية وتحديد الخطوة التالية.","process.badge":"تصور توضيحي","process.note":"تصور توضيحي لمسار العمل. تعتمد النتائج على كيمياء البطارية وحالتها وبروتوكول اختبار تم التحقق منه.","process.s1.name":"التشخيص","process.s1.title":"تحديد الحالة الأولية","process.s1.body":"قياس الجهد والتيار ودرجة الحرارة لتسجيل الحالة الأولية للبطارية.","process.s2.name":"التحليل","process.s2.title":"تفسير الإشارات","process.s2.body":"مقارنة القياسات بنوع البطارية وظروف الاختبار لتحديد الأسباب المحتملة للتدهور.","process.s3.name":"المعالجة","process.s3.title":"تطبيق معالجة محكومة","process.s3.body":"في البطاريات الرصاصية المناسبة، تقييم المعالجة بالنبضات المتحكَّم بها كمفهوم بحثي ضمن حدود محددة.","process.s4.name":"المراقبة","process.s4.title":"متابعة الاستجابة","process.s4.body":"تتبع البطارية أثناء المعالجة بالاستشعار اللحظي لاكتشاف أي سلوك غير متوقع.","process.s5.name":"إعادة الاختبار","process.s5.title":"القياس من جديد","process.s5.body":"إعادة اختبارات الأساس بنفس الظروف لمقارنة النتائج قبل المعالجة وبعدها بشكل عادل.","process.s6.name":"القرار","process.s6.title":"اتخاذ قرار مبني على بيانات","process.s6.body":"استخدام النتائج لتحديد الاستمرار في استخدام البطارية أو إعادة العملية أو إخراجها من الخدمة.",
      "diagnostics.kicker":"05 / المراقبة الذكية","diagnostics.title":"رؤية أوضح <span class=\"gradient-text\">لحالة البطارية.</span>","diagnostics.intro":"تصور لواجهة تعرض كيف يمكن تنظيم إشارات البطارية لأغراض المراقبة والتحليل.","dashboard.title":"لوحة مراقبة NABDA","dashboard.subtitle":"نظام البطارية / بيئة تجريبية","dashboard.demo":"بيانات توضيحية","dashboard.soc":"حالة الشحن","dashboard.health":"صحة البطارية","dashboard.voltage":"الجهد","dashboard.current":"التيار","dashboard.temperature":"درجة الحرارة","dashboard.demoValue":"قيمة تجريبية","dashboard.trend":"اتجاه الجهد","dashboard.last12":"آخر 12 ساعة · توضيحي","dashboard.system":"حالة النظام","dashboard.normal":"طبيعي (تجريبي)","dashboard.statusbody":"هذه الواجهة تصور بصري وغير متصلة بحساسات فعلية.","dashboard.details":"عرض التفاصيل","dashboard.extra":"يتطلب التطبيق الفعلي حساسات ونظام جمع بيانات وخادمًا آمنًا.","dashboard.disclaimer":"جميع القياسات المعروضة قيم تجريبية توضيحية وليست قراءات مباشرة من بطارية.",
      "renewable.kicker":"06 / الطاقة المتجددة","renewable.title":"طاقة نظيفة.<br><span class=\"gradient-text\">بترابط ذكي.</span>","renewable.body":"رؤية متكاملة للطاقة الشمسية والرياح وتخزين الطاقة والمراقبة، مبنية حول طريقة توليد الطاقة وتخزينها واستخدامها.","renewable.cta":"ناقش فرص التعاون <span class=\"arrow\">↗</span>","renewable.solar":"الطاقة الشمسية","renewable.solarbody":"التوليد الكهروضوئي ومراقبة الأداء.","renewable.wind":"طاقة الرياح","renewable.windbody":"أنظمة طاقة الرياح ومؤشرات التشغيل.","renewable.storage":"تخزين الطاقة","renewable.storagebody":"مفاهيم التخزين لاستخدام أكثر مرونة للطاقة.","renewable.hybrid":"الأنظمة الهجينة","renewable.hybridbody":"تنسيق مصادر الطاقة والأحمال المختلفة.",
      "research.kicker":"07 / البحث والتطوير","research.title":"فضول يقودنا.<br><span class=\"gradient-text\">والدليل يوجّهنا.</span>","research.intro":"منهج هندسي عملي: تحديد السؤال، وقياس النظام، وتحليل البيانات، وتوثيق النتائج.","research.imagecaption":"الهندسة والتجارب","research.item1":"اختبار البطاريات وتوصيفها","research.item1body":"قياسات منظمة لفهم السلوك ضمن ظروف محددة.","research.item2":"الحساسات والأنظمة المدمجة","research.item2body":"ربط القياسات الفيزيائية بجمع بيانات موثوق.","research.item3":"التحليل المدعوم بالذكاء الاصطناعي","research.item3body":"استكشاف الأنماط والحالات غير المعتادة وإشارات دعم القرار.","research.item4":"تكامل الطاقة المتجددة","research.item4body":"دراسة التفاعل بين التوليد والتخزين والاستهلاك.",
      "showcase.kicker":"08 / استعراض التقنيات","showcase.title":"تخصصات مترابطة.<br><span class=\"gradient-text\">ورؤية واحدة للطاقة.</span>","showcase.intro":"نظرة متعددة التخصصات إلى التقنيات ومجالات البحث التي يستند إليها NABDA-AI.","showcase.one":"ذكاء البطاريات","showcase.onebody":"تشخيص البطارية وتحليلها.","showcase.two":"الاستعادة والتشخيص","showcase.twobody":"البحث والاختبار والتقييم.","showcase.three":"الذكاء الاصطناعي والحساسات","showcase.threebody":"استخلاص إشارات مفيدة من البيانات الهندسية.","showcase.four":"الطاقة المتجددة","showcase.fourbody":"أنظمة الطاقة الشمسية والرياح والأنظمة الهجينة.",
      "collab.kicker":"لنعمل معًا","collab.title":"هل لديك تحدٍ في مجال الطاقة؟","collab.body":"نرحب بالتواصل مع المهندسين والباحثين والطلاب والمؤسسات المهتمة بتقنيات البطاريات وأنظمة الطاقة المستدامة.","collab.cta":"ابدأ محادثة <span class=\"arrow\">↗</span>",
      "contact.kicker":"09 / تواصل معنا","contact.title":"لنبنِ مستقبلًا <span class=\"gradient-text\">أذكى للطاقة.</span>","contact.body":"هل لديك سؤال أو فكرة أو فرصة تعاون؟ تواصل مع NABDA-AI.","contact.facebook":"تواصل معنا","contact.linkedin":"تواصل مهنيًا",
      "form.title":"أرسل لنا رسالة","form.subtitle":"الحقول التي تحمل * مطلوبة.","form.name":"الاسم الكامل *","form.email":"البريد الإلكتروني *","form.subject":"الموضوع","form.option1":"استفسار عام","form.option2":"تقنيات البطاريات","form.option3":"الطاقة المتجددة","form.option4":"تعاون بحثي","form.message":"الرسالة *","form.submit":"تجهيز البريد الإلكتروني","form.note":"يفتح النموذج تطبيق البريد الإلكتروني؛ ولا يرسل الرسائل مباشرة من الموقع.",
      "footer.tagline":"ذكاء البطاريات والطاقة المتجددة والتقنيات المستدامة لغدٍ أكثر ذكاءً.","footer.quick":"روابط سريعة","footer.focus":"مجالات التركيز","footer.ai":"الذكاء الاصطناعي والتشخيص","footer.lab":"كيف نعمل","footer.connect":"تواصل معنا","footer.rights":"جميع الحقوق محفوظة.","footer.backtop":"العودة للأعلى ↑","footer.note":"هندسة لمستقبل طاقة أكثر وعيًا."
    }
  };

  function setLanguage(lang) {
    const language = lang === "ar" ? "ar" : "en";
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    $$("[data-i18n]").forEach(el => {
      const value = translations[language][el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });

    $$("[data-en-placeholder], [data-ar-placeholder]").forEach(el => {
      const value = el.getAttribute(`data-${language}-placeholder`);
      if (value !== null) el.setAttribute("placeholder", value);
    });

    const toggle = $("#language-toggle");
    if (toggle) {
      toggle.textContent = language === "en" ? "العربية" : "English";
      toggle.setAttribute("aria-label", language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية");
    }

    try { localStorage.setItem("nabda-language", language); } catch (_) {}
    document.dispatchEvent(new CustomEvent("nabda:languagechange", { detail: { language } }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Language persistence
    let initialLanguage = "en";
    try {
      const saved = localStorage.getItem("nabda-language");
      if (saved === "ar" || saved === "en") initialLanguage = saved;
    } catch (_) {}
    setLanguage(initialLanguage);
    $("#language-toggle")?.addEventListener("click", () => {
      setLanguage(document.documentElement.lang === "en" ? "ar" : "en");
    });

    // Mobile navigation
    const menuToggle = $("#menu-toggle");
    const nav = $("#nav-menu");
    const closeMenu = () => {
      nav?.classList.remove("active");
      menuToggle?.classList.remove("active");
      menuToggle?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    };
    menuToggle?.addEventListener("click", () => {
      const open = nav?.classList.toggle("active") || false;
      menuToggle.classList.toggle("active", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    });
    $$("#nav-menu a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    document.addEventListener("click", event => {
      if (nav && menuToggle && !nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });

    // Header state and active navigation
    const header = $(".site-header");
    const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const sections = $$("main section[id]");
    if ("IntersectionObserver" in window) {
      const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          $$("#nav-menu a").forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      }, { rootMargin: "-35% 0px -55% 0px" });
      sections.forEach(section => navObserver.observe(section));
    }

    // Scroll reveal
    const reveals = $$(".reveal");
    if ("IntersectionObserver" in window && !reducedMotion) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
      reveals.forEach(el => observer.observe(el));
    } else {
      reveals.forEach(el => el.classList.add("visible"));
    }

    // Attempt to use numbered local assets if present. Remote fallback stays in place.
    const extensionCandidates = [".jpg", ".jpeg", ".png", ".webp"];
    $$(".asset-image[data-asset]").forEach(img => {
      const numbers = img.dataset.asset.split(",").map(s => s.trim()).filter(Boolean);
      let index = 0;
      const tryNext = () => {
        if (index >= numbers.length * extensionCandidates.length) return;
        const number = numbers[Math.floor(index / extensionCandidates.length)];
        const ext = extensionCandidates[index % extensionCandidates.length];
        index++;
        const candidate = `${number}${ext}`;
        const test = new Image();
        test.onload = () => { img.src = candidate; };
        test.onerror = tryNext;
        test.src = candidate;
      };
      // First test local numbered assets; if none exist, retain the remote fallback.
      tryNext();
    });

    // Workflow steps (tabs)
    const stage = $(".process-stage");
    const stepTabs = $$(".process-step");
    const stepPanels = $$(".process-panel");
    const selectStep = (index, focus = false) => {
      const n = Math.max(0, Math.min(stepTabs.length - 1, index));
      stepTabs.forEach((tab, i) => {
        const on = i === n;
        tab.classList.toggle("active", on);
        tab.setAttribute("aria-selected", String(on));
        tab.tabIndex = on ? 0 : -1;
        if (on && focus) tab.focus();
      });
      stepPanels.forEach((panel, i) => {
        panel.classList.toggle("active", i === n);
        panel.hidden = i !== n;
      });
      if (stage) stage.dataset.stage = String(n + 1);
    };
    stepTabs.forEach((tab, i) => {
      tab.addEventListener("click", () => selectStep(i));
      tab.addEventListener("keydown", event => {
        const rtl = document.documentElement.dir === "rtl";
        const next = rtl ? "ArrowLeft" : "ArrowRight";
        const prev = rtl ? "ArrowRight" : "ArrowLeft";
        if (event.key === next || event.key === "ArrowDown") { event.preventDefault(); selectStep((i + 1) % stepTabs.length, true); }
        else if (event.key === prev || event.key === "ArrowUp") { event.preventDefault(); selectStep((i - 1 + stepTabs.length) % stepTabs.length, true); }
      });
    });

    // Dashboard details disclosure
    const detailsButton = $("#dashboard-details");
    const extra = $("#dashboard-extra");
    detailsButton?.addEventListener("click", () => {
      if (!extra) return;
      extra.hidden = !extra.hidden;
      const isArabic = document.documentElement.lang === "ar";
      detailsButton.textContent = extra.hidden
        ? (isArabic ? "عرض التفاصيل" : "View details")
        : (isArabic ? "إخفاء التفاصيل" : "Hide details");
    });

    // Contact form opens a pre-filled email draft. No fake delivery claim.
    const form = $("#contact-form");
    form?.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get("name") || "");
      const email = String(data.get("email") || "");
      const subject = String(data.get("subject") || "Website inquiry");
      const message = String(data.get("message") || "");
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const mailto = `mailto:nabda.ai.2027@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const status = $("#form-status");
      if (status) {
        status.textContent = document.documentElement.lang === "ar"
          ? "سيتم فتح تطبيق البريد الإلكتروني لإكمال إرسال الرسالة. لم تُرسل الرسالة من الموقع نفسه."
          : "Your email application should open with your message prepared. The website itself has not sent the message.";
      }
      window.location.href = mailto;
    });

    // Current year
    $$("[data-current-year]").forEach(el => { el.textContent = String(new Date().getFullYear()); });

    // Smooth scrolling for same-page links, with native fallback.
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener("click", event => {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = $(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
        if (window.history?.replaceState) window.history.replaceState(null, "", id);
      });
    });

    console.info("NABDA-AI website interactions initialized.");
  });
})();
