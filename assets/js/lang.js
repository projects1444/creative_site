var lang = localStorage.getItem("lang");
var namear = document.getElementsByClassName('name-ar')[0];
 var Emailar = document.getElementsByClassName('email-ar')[0];
 var Phonear = document.getElementsByClassName('phone-ar')[0];
 var Messagear = document.getElementsByClassName('message-ar')[0];
 var Sitear = document.getElementsByClassName('site-ar')[0];
 var Servicear = document.getElementsByClassName('service-ar')[0];
// console.log(lang);
if(lang === 'ar'){
// console.log(namear);
namear.setAttribute('placeholder', 'ادخل الإسم الثلاثي');
namear.setAttribute('data-msg', 'ادخل علي الاقل 8 حروف');

Emailar.setAttribute('data-msg', 'يرجي إدخال بريد الكتروني صحيح ');

Phonear.setAttribute('placeholder', '********** 966+');
Phonear.setAttribute('data-msg', 'يرجي ادخال 10 ارقام علي الاقل');

Messagear.setAttribute('placeholder', 'إكتب رسالتك هنا ....');
Messagear.setAttribute('data-msg', "من فضلك اكتب لنا شيئا");

Sitear.setAttribute('data-msg', "من فضلك ادخل موقعك الالكتروني");

Servicear.setAttribute('data-msg', "من فضلك إختر خدمة");
}else{
  namear.setAttribute('placeholder', 'Your Name');
  namear.setAttribute('data-msg', 'Please enter at least 8 chars');

  Emailar.setAttribute('data-msg', 'Please enter a valid email');


  Phonear.setAttribute('placeholder', '966+ ********** ');
  Phonear.setAttribute('data-msg', 'Please enter at least 10 chars');

  Messagear.setAttribute('placeholder', 'write your message here ....');
  Messagear.setAttribute('data-msg', 'Please write something for us');

  Sitear.setAttribute('data-msg', 'Please write your website');

  Servicear.setAttribute('data-msg', "Please select a service");
  
}