const languageSelector = document.querySelector("select");
var selectElement = document.getElementById("language-select");

/* mobile */
selectElement.addEventListener("change", (event) => {
  window.location.reload()
  console.log(event);
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
  const stylesheet = document.getElementById("language-stylesheet");
  const headerElement = document.getElementById("header");
  const navElement = document.querySelector("nav");
  const inpNmae =  document.getElementById("name");
  const en =  document.getElementById("en");
  const ar =  document.getElementById("ar");

  const language = event.target.value;
  console.log(stylesheet);
  if (language === "ar") {
    headerElement.dir = "rtl";
    stylesheet.setAttribute("href", "assets/css/ar.css");
  } else {
    headerElement.dir = "ltr";
    stylesheet.setAttribute("href", "assets/css/style.css");
  }


});

/* desktop */
languageSelector.addEventListener("change", (event) => {
 window.location.reload()
  console.log(event);
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
  const stylesheet = document.getElementById("language-stylesheet");
  const headerElement = document.getElementById("header");
  const navElement = document.querySelector("nav");
  const inpNmae =  document.getElementById("name");
  const en =  document.getElementById("en");
  const ar =  document.getElementById("ar");

  const language = event.target.value;
  console.log(stylesheet);
  if (language === "ar") {
    headerElement.dir = "rtl";
    stylesheet.setAttribute("href", "assets/css/ar.css");
  } else {
    headerElement.dir = "ltr";
    stylesheet.setAttribute("href", "assets/css/style.css");
  }

});

/* window */
document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.querySelector("select");
  var selectElement = document.getElementById("language-select");
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  selectElement.value = language;
  languageSelector.value = language;
  setLanguage(language);
  const stylesheet = document.getElementById("language-stylesheet");
  if (language === "ar") {
    stylesheet.setAttribute("href", "assets/css/ar.css");
  } else {
    stylesheet.setAttribute("href", "assets/css/style.css");
  }
});


const setLanguage = (language) => {
  
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
   // element.style.visibility = 'visible';
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
  document.body.style.visibility = 'visible';
};


//placeholder="ادخل إسمك الثلاثي"
























const translations = {
  en: {
    home: "Home",
    about: "About Us",
    service: "Our Services",
    services: "Services",
    projects: "Our Projects",
    team: "Team",
    blog: "Blog",
    details: "Drop Down",
    contact_us: "Contact Us",
    english: "English",
    arabic: "Arabic",
    Welcome:"Welcome to Creative Clouds IT ",
    we_are:"A technical company that provides various services in the field of software development and design, in addition to marketing and advertising services",
    Read:"Read More", 
    we_are2:"We seek to digitize the way we work, live, shop, play and learn",
    vision:"Vision",
    we_are3:"We exist to be the most preferred destination for customers To obtain distinguished and high-quality technical services",
    message:"Message",
    Software_development:"Software Development",
    Software_development_desc:
    "Software industry requires a lot of time and effort Contrary to what is expected and often prevalent. in tow Creativity We work on studying and analyzing requirements Carefully and take all possibilities to avoid problems Upon reaching the launch and publishing stage.",
    graphic_design:"Graphic Design",
    graphic_design_desc:"Beauty lies in the eye of the beholder. We may differ slightly in drawing creativity, as we believe that beauty is in good design and high accuracy",
    E_Marketing:"E-Marketing",
    E_Marketing_desc:"Between you and your customer segment is a click of a button, through Digital Marketing Service We give you access to A diverse segment of clients according to their regions And their interests do not hesitate to contact us to become A partner in your excellence",
    Newsletter:"Our Newsletter",
    follow:"You can follow our newsletter from here",
    Subscribe:"Subscribe",
    Useful_Links:"Useful Links",
    Terms_of_service:"Terms_of_service",
    Privacy_policy:"Privacy policy",
    Web_Design:"Web Design",
    Web_Development:"Web Development",
    Product_Management:"Products Management",
    Marketing:"Marketing",
    Al_Ranuna:"Al-Ranuna neighborhood",
    Madinah:"Madinah, NY 41311",
    Saudi_Arabia:"Saudi Arabia",
    Phone:"Phone :",
    contact_phone:"Phone *",
    contact_phone2:"Phone",
    Email:"Email ",
    Email2:"Email ",
    desc:"A comany spepcialized in the field of technology, employing many experts in various fields.",
    rghits:"All Rights Reserved ",
    Clouds:"Creative Clouds IT",
    defintion:"Creative Clouds is a company working in the field of Technology Information and offers many services Associated with technology is headquartered In Medina and seeking access For high standards and distinctive quality to serve its customers As required .",
    defintion2:"The services provided vary in terms of their nature, as we provide them Services directly related to programming and development, design, Digital marketing. All these services take into account the most important standards and practices in business and related areas locally and globally.",
    li1:"We care about the details, we constantly improve and innovate solutions",
    li2:"Do your business through a professional team and global best practices",
    li3:"We design we innovate We understand to be with you step by step",
    Clients:"Clients",
    project:"projects",
    Hours_Of_Support:"Hours Of Support",
    Hard_Workers:"Hard Workers",
    Our_Skills:"Our Skills",
    skill_desc:"Our core expertise is the exact matching of your company's technology to your business needs. We have designed a suite of services to be flexible and responsive. Our focus is on providing high quality, impactful results for your digital indices",
    Tetstimonials:"Tetstimonials",
    test1:"Working with creative clouds has been an absolute pleasure! From the moment we engaged their services, we knew we were in good hands. The team's professionalism, expertise, and attention to detail have truly exceeded our expectation.",
    test2:"I am incredibly impressed with the service I received from this company. Their dedication to customer satisfaction is truly commendable. They took the time to understand my requirements and provided innovative solutions that perfectly aligned with my vision",
    test3:"I had an amazing experience working with this company. The entire team was friendly, responsive, and professional throughout the entire process, Their expertise and attention to detail resulted in a final product that was not only visually stunning but also highly functional",
    test4:"I couldn't be happier with the outcome of my project, thanks to this company. Their team of experts was incredibly talented and displayed a deep understanding of the industry. They provided valuable insights and guidance",
    test5:"Working with this company was a game-changer for my business. They transformed my ideas into a visually stunning and user-friendly website that perfectly represents my brand ",
    our_approach:"Our Approach",
    about_desc:"learn what makes us experts in custom product development",
    approach_desc :"discover our transparent product development approach",
    Tetstimonials_desc:"our clients success stories speak best about our work",
    Awards:"Awards",
    Awards_desc:"independent rating and research firms recognize our work",
    FAQ:"FAQ",
    FAQ_desc:"Q&A about the team and software solutions we provide",
    Press:"Press",
    Press_desc:"read press releases and publications about Creative Clouds IT",
    Company:"Company",
    Approach_desc1:"our effective development approach is built on experience creating dozens of projects across various domains . it's our priority to establish a process that keeps you informed on every stage of software development when we create something awesome for you .",
    Approach_desc2:"we are eager to become a full-fledged partner for you . develop your businesses , help your web product scale, and boost revenue.",
    our_agile:"Our agile mindest",
    at:"At",
    CCIT:"CCIT",
    Agile_desc:" we apply the flexible agile methodology to develop highly-effective and profitable projects.",
    Strong_communications:"Strong communications",
    strong_desc:"we believe that broad engagement with clients is the fundamental key to project success",
    Daily_standups:"Daily standups",
    Daily_desc:"Daily meetings help share gained results and coordinate the next efforts in sprint delivery",
    Weekly_desgined_sprints:"Weekly desgined sprints",
    Weekly_desgined_desc:"We divide the process  into sprints to see specific results at the early stage of development",
    house_project_manager:"In-house project manager",
    house_project_manager_desc:"Our PM bridges the gap between the dev team and client ,helping to get the expected results",
    Fully_transparent_process:"Fully transparent process",
    Fully_transparent_process_desc:"Transparency helps us to foster communication and collaboration during the development ",
    Regular_retrospectives:"Regular retrospectives",
    Regular_retrospectives_desc:"At the end of each sprint , we overview results and identify actions for following improvements",
    ceo_desc:"The current project team includes engineers, programmers and software developers at the highest level. They have proven that they are able to provide technical support for systems, solve their problems, and even develop them when necessary.",
    ceo_desc2:"The team has created many new applications that serve the project work requirements, and there are still many applications under construction that, when completed, will give Wadi University the lead among Egyptian universities as it always is in the field of management information systems.",
    our_team:"Reliable team for project success",
    team_desc:"A skilled software development team is the most vital part of the success of any business, And we put together the best professionals!",
    Project_managers:"Project managers",
    Project_managers_desc:"they manage the agile web development process from beginning to finish.",
    UI_UX:"UX/UI specialists",
    UI_UX_desgin:" UI/UX Desgin",
    UI_UX_desc:"Build the custom user interface and guarantee an enhanced user experience.",
    technical_leads:"Technical leads",
    technical_leads_desc:"these experts define the tech development vector and evaluate the rightness of tech solutions.",
    developers:"Developers",
    developers_desc:"Bring ideas into a code, guided by the design and prescribed tech requirements.",
    DevOps:"DevOps engineers",
    DevOps_desc:"their responsibilities are to automate tasks related to configuring and developing applications.",
    quality:"quality assurance specialists",
    quality_assu_serv:"Quality Assurance Services",
    quality_desc:"They enhance the web development processes and detect errors in the digital product.",
    our_tools:"Tools helping us here",
    tools_desc:"these are the top tools that help our specialists to keep productive and work efficintly",
    our_proven:"Our proven web development process",
    proven_desc:"we have all skills and tools to execute an optimized and seamless software development process.",
    Research_discovery:"Research & discovery",
    Research_discovery_desc:"At this stage, we form a vision of the future software product.",
    product_development:"product development",
    product_development_desc:"Our developers build the project according to the most cutting-edge practices and standards.", 
    Deployment_monitoring:"Deployment, monitoring,and support",
    Deployment_monitoring_desc:"As a full-cycle software development firm,we support your digital solutions on a regular basis.",
    stack:"Best tech stack to power software development",
    stack_desc:"Picking the right technologies is a crucial factor in the project's success.",
    stack_desc1:"we adopt the most efficient and modern technology stacks to make your web solution very competitive and fulfill all your business requirements.",
    build:"let's build a great online business for you!",
    tell_us:"Tell us about your project!",
    contact:"Get in Touch",
    Insights:"Insights",
    featured:"Featured Insights from CCIT blog",
    Design:"Design",
    Design_desc:"mobile-first design: What is it and How to Implement it",
    technology:"Technology",
    technology_desc:"Quality Assurance vs Quality Control: Definitions and Key Differences",
    technology_desc2:"Native vs Cross-Platform App Development:the Right Way for Your Business",
    phone:"Excellent results with our approach",
    custom:"custom software development for the travel marketplace",
    phone_desc:"the website name is an saudiaArabia based expedition and adventure travel company that offers polar cruises. the travel marketplace platform allows to search and book Arctic and Antarctic trips.",
    results:"Results",
    worth:"worth of sales brought by the website within the first year.",
    worth2:"traffic growth for the past 2 years thanks to search engine optimization.",
    case_study:"View case study",
    recomnd:"i highly recommend CCIT team as a proven software development company.and I can honestly say that if it wasn't for CCIT do not know if I could have managed to bring our product alive for the budget that we had .",
    name:"Name",
    Director:"Director",
    Success_stories:"Success stories",
    online:"online marketplace for selling collectibles",
    view:"view all our works",
    custom_software_development:"Custom Software Development",
    online_marketplace:"Online Marketplace Development",
    MVP:"MVP development",
    Saas:"Saas development",
    product_discovery:"Product Discovery",
    PWA:"PWA Development",
    design_development:"design development",
    mobile_development:"mobile development",
    mobile_App_development:"Mobile App Development",
    devops_development:"DevOps development",
    QA:"QA development",
    our_works:"Our works",
    careers:"careers",
    approach:"Approach",
    HIRING:"HIRING",
    H_T_B:"How to Build a Marketplace Website",
    What_cost:"what is the cost to build an online marketplace",
    how_to_build:"How to Build a website like Airbnb",
    veu_react:"Veu vs React what are the Best JS technologies",
    sass_broduct :"How to Build Saas product Steb-by-steb",
    service_market:"How to Build a Service MarketPlace",
    Sales_department:"Sales department",
    phone_num:"+966598080208",
    opportunities:"opportunities",
    Marketing_cooperations:"Marketing cooperations",
    sucess_parteners:"Success Partners",
    turn_idea:"Let's turn your idea into a successful product!",
    whats:"what's next?",
    taya:"our Sales Manager Taya will be in touch with you within 1 business day.",
    NDA:"We will sign the NDA if required,and start the project discussion.",
    custom_soft:"Our custom software development experts will analyze your requirements and suggest the best ways to bring your idea to life.",
    tell_us:"Tell us about your project :",
    yourname:"Your Name",
    hear:"How did you hear about us? *",
    budget:"What is your budget ? *",
    Over:"Over $100000",
    disclose:"Can't Disclose / Not Sure",
    stay:"Stay up to date with software development and design materials from CCIT",
    attach:"Attach files",
    send:"Send Message",
    contact_name:"Your Name *",
    contact2_name:"Your Name",
    Email:"E-mail *",
    contact_message:"Message *",
    Portfolio:"Portfolio",
    devops_Services:"DevOps Services",
    Development:"Development",
    Enterpreneuship:"Enterpreneuship",
    Desgin:"Desgin",
    Codica_Way:"Codica Way",
    Management:"Management",
    Saudi_Arabia:"Saudi Arabia",
    Email_Us:"Email Us",
    Call_Us:"Call Us",
    Send_Message:"Send Message",
    Our_Team:"Our Team",
    Our_Portfolio:"Our Portfolio",
    All:"All",
    App:"App",
    Card:"Card",
    Web:"Web",
    choose_service :"Choose Service",
    choose_service2:"Choose Service",
    write_message:"Write description",
    website:"Website",
    Clutch:"Clutch",
    Linedin:"Linedin",
    Quora:"Quora",
    Google_Search:"Google Search",
    Facebook:"Facebook",
    Dev_To:"Dev.To",
    Medium:"Medium",
    From_A_Friend:"From A Friend",
    Other:"Other",
    CEO:"CEO at CCIT",
    CEOName:"Ahmed",
    phpDev:"PHP Developer at CCIT",



  },
  ar: {
    phpDev:"مطور PHP",
    CEOName:"أحمد",
    CEO:"المدير التنفيذي",
    Other:"أخري",
    From_A_Friend:"من صديق",
    Medium:"وسيط",
    Dev_To:"أدوات التطوير",
    Facebook:"فيسبوك",
    Google_Search:"البحث علي جوجل",
    Quora:"كورا",
    Linedin:"لينكدان",
    Clutch:"كلاتش",
    website:"الموقع الإلكتروني",
    write_message:"كتابة الوصف",
    choose_service:"إختر الخدمة",
    choose_service2:"إختار خدمة",
    All:"الجميع",
    App:"تطبيقات",
    Card:"بطاقات",
    Web:"مواقع",
    Our_Portfolio:"معرض الاعمال",
    Our_Team:"فريق العمل ",
    Send_Message:"إرسال",
    Call_Us:"اتصل بنا",
    Email_Us:"راسلنا",
    Saudi_Arabia:"المملكة السعودية العربية",
    home: "الصفحة الرئيسية",
    about: "من نحن",
    Codica_Way:"كوديكا",
    service: "خدماتنا",
    Management:"الادارة",
    Desgin:"التصميم",
    services: "خدماتنا",
    Enterpreneuship:"ريادة الأعمال",
    Development:"التطوير",
    projects: "مشاريعنا",
    team: "فريق العمل",
    blog: "المدونة",
    details: "تفاصيل",
    contact_us: "تواصل معنا",
    english: "الانجليزية",
    arabic: "العربية",
    Welcome:"مرحبًا بك في سحب الإبداع ",
    we_are:"شركة تقنية تقدم خدمات متنوعة في مجال تطوير البرمجيات والتصميم بالإضافة إلى خدمات التسويق والأعلانات",
    Read:"اقرأ المزيد", 
    we_are2:"نسعى لرقمنة طريقة العمل والحياة والتسوق واللعب والتعلم",
    vision:"الرؤية",
    we_are3:"نحن موجودون لنكون أكثر الوجهات المُفضلة لدى العملاء للحصول على خدمات تقنية مُميزة وفائقة الجودة",
    message:"الرسالة",
    Software_development:" تطوير البرمجيات",
    Software_development_desc:"صناعة البرمجيات تتطلب وقت وجهد كبير على عك س المتوقع والسائد غالبا. في سحب الإبداع نعمل على دراسة وتحليل المتطلبات بعناية و أخذ كل الإحتمالات لتفادي المشاكل عند الوصول لمرحلة الإطلاق والنشر.",
    graphic_design:"التصميم الجرافيكي",
    graphic_design_desc:"الجمال يكمن في عين الرائي ربما نختلف قليلا في سحب الإبداع حيث نؤمن بأن الجمال يكون بتصميم جيد وذو دقة عالية",
    E_Marketing:"التسويق الالكتروني",
    E_Marketing_desc:"بينك وبين شريحة عملائك ضغطة زر ، من خلال خدمة التسويق الرقمي نتيح لك الوصول إلى شريحة متنوعة من العملاء وبحسب مناطقهم واهتماماتهم لاتتردد بالتواصل معنا لنصبح شريك في تميزك",
    Newsletter:"نشرتنا الإخبارية",
    follow:"يمكنك متابعة نشرتنا الاخبارية من هنا ",
    Subscribe:"اشترك",
    UI_UX_desgin:"تصميم UI/UX",
    Useful_Links:"روابط مفيدة",
    Terms_of_service:"شروط الخدمة",
    Privacy_policy:"سياسة الخصوصية",
    Web_Design:"تصميم المواقع",
    Web_Development:" تطوير المواقع ",
    Product_Management:"ادارة المنتجات",
    Marketing:"التسويق",
    Al_Ranuna:"حي الرانونة",
    Madinah:"المدينة المنورة ، نيويورك 41311",
    Saudi_Arabia:"المملكة العربية السعودية",
    Phone:"رقم الهاتف :",
    contact_phone:"رقم الهاتف *",
    contact_phone2:"رقم جوالك",
    Email2:"بريدك الإلكتروني",
    desc:"شركة متخصصة في مجال التكنولوجيا يعمل بها العديد من الخبراء في مختلف المجالات.",
    rghits:"جميع الحقوق محفوظة ",
    Clouds:"سحب الإبداع ",
    defintion:" سحب الإبداع شركة تعمل في مجال تقنية المعلومات وتقدم العديد من الخدمات المرتبطة بالتكنولوجيا يقع مقرها الرئيسي في المدينة المنورة وتسعى إلى الوصول لمعايير عالية وجودة مميزة لخدمة عملائها بالشكل المطلوب .",
    defintion2:"الخدمات المقدمة تتنوع من حيث طبيعنها حيث نقدم الخدمات المرتبطة مباشرة بالبرمجة والتطوير ، التصميم ، التسويق الرقمي . جميع هذه الخدمات تراعي أبرز المعايير والممارسات في قطاع الأعمال والمجالات ذات الصلة بهذا محليا وعالميا.",
    li1:"نهتم بالتفاصيل نحسن باستمرار و نبتكر الحلول",
    li2:"نفذ أعمالك من خلال فريق محترف وأفضل الممارسات العالمية",
    li3:"نـصمم نـبتكر نـفهم لنكون معك خطوة بخطوة",
    Clients:"العملاء",
    project:"المشاريع",
    Hours_Of_Support:"ساعات الدعم",
    Hard_Workers:"المجنهدون",
    Our_Skills:"مهاراتنا",
    skill_desc:"خبرتنا الأساسية هي المطابقة الدقيقة لتكنولوجيا شركتك مع احتياجات عملك. لقد قمنا بتصميم مجموعة من الخدمات لتكون مرنة وسريعة الاستجابة. ينصب تركيزنا على توفير نتائج عالية الجودة ومؤثرة لمؤشراتك الرقمية",
    Tetstimonials:"آراء العملاء",
    test1:"لقد كان العمل مع السحب الإبداعية متعة مطلقة! منذ اللحظة التي بدأنا فيها خدماتهم ، علمنا أننا في أيد أمينة. لقد تجاوزت احترافية الفريق وخبرته واهتمامه بالتفاصيل توقعاتنا حقًا ",
    test2:"أنا معجب للغاية بالخدمة التي تلقيتها من هذه الشركة. إن تفانيهم في إرضاء العملاء يستحق الثناء حقًا. لقد أخذوا الوقت الكافي لفهم متطلباتي وقدموا حلولًا مبتكرة تتماشى تمامًا مع رؤيتي",
    test3:"كانت لدي تجربة رائعة في العمل مع هذه الشركة. كان الفريق بأكمله ودودًا ومتجاوبًا ومحترفًا طوال العملية بأكملها ، وأسفرت خبرتهم واهتمامهم بالتفاصيل عن منتج نهائي لم يكن مذهلاً من الناحية المرئية فحسب ، بل كان أيضًا عمليًا للغاية",
    test4:"لا يمكن أن أكون أكثر سعادة بنتيجة مشروعي ، بفضل هذه الشركة. كان فريق الخبراء لديهم موهوبًا بشكل لا يصدق وأظهروا فهماً عميقاً للصناعة. لقد قدموا رؤى وإرشادات قيمة",
    test5:"أدى العمل مع هذه الشركة إلى تغيير قواعد اللعبة في عملي. لقد حولوا أفكاري إلى موقع ويب مذهل بصريًا وسهل الاستخدام يمثل علامتي التجارية بشكل مثالي",
    our_approach:"نهجنا",
    about_desc:"تعرف على ما يجعلنا خبراء في تطوير المنتجات المخصصة",
    approach_desc:"اكتشف نهج تطوير منتجاتنا الشفاف",
    Tetstimonials_desc:"تتحدث قصص نجاح عملائنا بشكل أفضل عن عملنا",
    Awards:"الجوائز",
    Awards_desc:"تعترف شركات التصنيف والبحث المستقلة بعملنا",
    FAQ:"الاسئلة الشائعة",
    FAQ_desc:"سؤال وجواب حول الفريق والحلول البرمجية التي نقدمها",
    Press:"الاستطلاع",
    Press_desc:"قراءة النشرات الصحفية والمنشورات حول سحب الابداع",
    Company:"الشركة",
    Approach_desc1:"يعتمد نهج التطوير الفعال لدينا على الخبرة في إنشاء عشرات المشاريع عبر مختلف المجالات. من أولوياتنا إنشاء عملية تبقيك على اطلاع بكل مرحلة من مراحل تطوير البرامج عندما نصنع شيئًا رائعًا لك.",
    Approach_desc2:"نحن حريصون على أن نصبح شريكًا كاملًا لك. تطوير أعمالك ، ومساعدة منتج الويب الخاص بك ، وزيادة الإيرادات.",
    our_agile:"عقولنا الرشيقة",
    CCIT:"سحب الابداع",
    at:"في",
    Agile_desc:" نطبق منهجية مرنة مرنة لتطوير مشاريع عالية الفعالية ومربحة.",
    Strong_communications:"اتصالات قوية",
    strong_desc:"نعتقد أن المشاركة الواسعة مع العملاء هي المفتاح الأساسي لنجاح المشروع",
    Daily_standups:"الوقفات اليومية",
    Daily_desc:"تساعد الاجتماعات اليومية على مشاركة النتائج المكتسبة وتنسيق الجهود التالية في تقديم العدو السريع",
    Weekly_desgined_sprints:"سباقات التصميم الأسبوعية",
    Weekly_desgined_desc:"نقسم العملية إلى سباقات سريعة لرؤية نتائج محددة في المرحلة المبكرة من التطوير",
    house_project_manager:"مدير مشروع داخلي",
    house_project_manager_desc:"يسد مدير المشروع الفجوة بين فريق التطوير والعميل ، مما يساعد في الحصول على النتائج المتوقعة",
    Fully_transparent_process:"عملية شفافية بالكامل",
    Fully_transparent_process_desc:"تساعدنا الشفافية على تعزيز التواصل والتعاون أثناء التطوير",
    Regular_retrospectives:"استعادية منتظمة",
    Regular_retrospectives_desc:"في نهاية كل سباق ، نقوم بإلقاء نظرة عامة على النتائج وتحديد الإجراءات الخاصة بالتحسينات التالية",
    ceo_desc:"إن فريق العمل الحالي في المشروع يضم على قلة عدده مهندسين و مبرمجين و مطوري برامج على أعلى مستوى. وقد أثبتوا أنهم قادرون على الدعم الفني للأنظمة وحل مشكلاتها بل و تطويرها حين يقتضى الأمر.",
    ceo_desc2:"وقد ابتكر الفريق العديد من التطبيقات الجديدة التي تخدم متطلبات العمل بالمشروع ومازال هناك العديد من التطبيقات تحت الإنشاء والتي حين تكتمل سوف تعطي جامعة الوادي الصدارة بين الجامعات المصرية كما هي دائما في مجال نظم المعلومات الإدارية.",
    our_team:"فريق موثوق لنجاح المشروع",
    team_desc:"فريق تطوير البرمجيات الماهر هو الجزء الأكثر حيوية لنجاح أي عمل ، ونحن نجمع أفضل المحترفين!",
    Project_managers:"مديرين المشروع",
    Project_managers_desc:"يديرون عملية تطوير الويب  من البداية إلى النهاية.",
    UI_UX:"متخصصو UX / UI",
    UI_UX_desc:"بناء واجهة مستخدم مخصصة وضمان تجربة مستخدم محسنة.",
    technical_leads:"العروض الفنية",
    technical_leads_desc:"يحدد هؤلاء الخبراء متجه التطوير التكنولوجي ويقيمون مدى صحة الحلول التقنية.",
    developers:"المطورين",
    developers_desc:"أدخل الأفكار في رمز ، مسترشدًا بالتصميم والمتطلبات التقنية المحددة.",
    DevOps:"مهندسو DevOps",
    DevOps_desc:"تتمثل مسؤولياتهم في أتمتة المهام المتعلقة بتكوين التطبيقات وتطويرها.",
    quality:"متخصصو ضمان الجودة",
    quality_assu_serv:"خدمات ضمان الجودة",
    quality_desc:"أنها تعزز عمليات تطوير الويب واكتشاف الأخطاء في المنتج الرقمي.",
    our_tools:"أدوات تساعدنا هنا",
    tools_desc:"هذه هي أفضل الأدوات التي تساعد المتخصصين لدينا على الحفاظ على الإنتاجية والعمل بكفاءة",
    our_proven:"عملية تطوير الويب التي أثبتت جدواها",
    proven_desc:"لدينا جميع المهارات والأدوات اللازمة لتنفيذ عملية تطوير برامج محسّنة وسلسة.",
    Research_discovery:"البحث والاكتشاف",
    Research_discovery_desc:"في هذه المرحلة ، نشكل رؤية لمنتج البرنامج المستقبلي.",
    product_development:"تطوير المنتج",
    product_development_desc:"يقوم المطورون لدينا ببناء المشروع وفقًا لأحدث الممارسات والمعايير.", 
    Deployment_monitoring:"الانتشار والمراقبة والدعم",
    Deployment_monitoring_desc:"بصفتنا شركة تطوير برمجيات ذات دورة كاملة ، فإننا ندعم الحلول الرقمية الخاصة بك على أساس منتظم.",
    stack:"أفضل مكدس تقني لتشغيل تطوير البرامج",
    stack_desc:"يعد اختيار التقنيات المناسبة عاملاً حاسمًا في نجاح المشروع.",
    stack_desc1:"نعتمد أكوام التكنولوجيا الأكثر كفاءة وحداثة لجعل حل الويب الخاص بك منافسًا للغاية ويلبي جميع متطلبات عملك.",
    build:"دعنا نبني لك عملاً تجاريًا رائعًا عبر الإنترنت!",
    tell_us:"أخبرنا عن مشروعك!",
    contact:"ابقى على تواصل",
    Insights:"أفكار",
    featured:"رؤى مميزة من مدونة سحب الابداع",
    Design:"تصميم",
    Design_desc:"تصميم الجوّال أولاً: ما هو وكيف يتم تنفيذه",
    technology:"تكنولوجيا",
    technology_desc:"ضمان الجودة مقابل مراقبة الجودة: التعريفات والاختلافات الرئيسية",
    technology_desc2:"تطوير التطبيقات الأصلية مقابل تطوير التطبيقات عبر الأنظمة الأساسية : الطريقة الصحيحة لعملك",
    phone:"نتائج ممتازة مع نهجنا",
    custom:"تطوير برامج مخصصة لسوق السفر",
    phone_desc:"اسم الموقع هو شركة رحلات استكشافية ومغامرات مقرها السعودية العربية وتقدم رحلات بحرية قطبية. تسمح منصة سوق السفر بالبحث عن رحلات القطب الشمالي والقطب الجنوبي وحجزها.",
    results:"النتائج",
    worth:"قيمة المبيعات التي حققها الموقع خلال العام الأول.",
    worth2:"نمو حركة المرور على مدار العامين الماضيين بفضل تحسين محرك البحث.",
    case_study:"عرض دراسة الحالة",
    recomnd:"أوصي بشدة بفريق سحب الابداع كشركة تطوير برمجيات مثبتة ، ويمكنني أن أقول بصراحة أنه لولا سحب الابداع لا أعرف ما إذا كان بإمكاني أن نجعل منتجنا حيًا للميزانية التي كانت لدينا.",
    name:"الاسم",
    contact_name:"الاسم *",
    contact2_name:"الإسم الثلاثي",
    Director:"المدير",
    Success_stories:"القصص الناجحة",
    online:"سوق على الإنترنت لبيع المقتنيات",
    view:"عرض جميع أعمالنا",
    custom_software_development:"تطوير البرامج المخصصة",
    online_marketplace:"تطوير السوق عبر الإنترنت",
    MVP:"برمجة MVP",
    Saas:"برمجة Saas",
    product_discovery:"اكتشاف المنتج",
    PWA:"برمجة PWA",
    design_development:"برمجة التصميم",
    mobile_development :"برمجة تطبيقات الهاتف",
    mobile_App_development:"برمجة تطبيقات الهاتف",
    devops_development:"برمجة تطبيقات DevOps",
    devops_Services:"خدمات DevOps",
    QA:"تطوير ضمان الجودة",
    our_works:"أعمالنا",
    careers:"وظائف",
    approach:"نهجنا",
    HIRING:"توطيف",
    H_T_B:"كيفية بناء موقع سوق",
    What_cost:"ما هي تكلفة إنشاء سوق عبر الإنترنت",
    how_to_build:"كيفية إنشاء موقع ويب مثل Airbnb",
    veu_react:"فيو & رياكت ما هي افضل تقنيات JS",
    sass_broduct:"كيفية بناء منتج Saas خطوة بخطوة",
    service_market:"كيفية بناء سوق الخدمة",
    Sales_department:"قسم المبيعات",
    phone_num:"966598080208+",
    opportunities:"فرص عمل",
    Marketing_cooperations:"تعاونات التسويق",
    sucess_parteners:"شركاء النجاح",
    turn_idea:"لنحول فكرتك إلى منتج ناجح!",
    whats:"ماذا بعد؟",
    taya:"سيتواصل معك مدير المبيعات طايا في غضون يوم عمل واحد.",
    NDA:"سنوقع اتفاقية عدم الإفشاء إذا لزم الأمر ، ونبدأ مناقشة المشروع.",
    custom_soft:"سيقوم خبراء تطوير البرامج المخصصون لدينا بتحليل متطلباتك واقتراح أفضل الطرق لإحياء فكرتك.",
    tell_us:"أخبرنا عن مشروعك :",
    yourname:"الاسم ",
    hear:"كيف سمعت عنا؟ *",
    budget:"ما هي ميزانيتك ؟ *",
    Over:"اكثر من 100000$",
    disclose:"لا يمكن الكشف / لست متأكدًا",
    stay:"ابق على اطلاع دائم بتطوير البرمجيات ومواد التصميم من سحب الابداع",
    attach:"المرفقات",
    send:"ارسال",
    Email:"البريد الالكتروني *",
    contact_message:"الرسالة *",
    Portfolio:"بورتوفليو",


  },
};
