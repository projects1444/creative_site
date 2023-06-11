var lang = localStorage.getItem("lang");
var namear = document.getElementsByClassName('name-ar')[0];
 var Emailar = document.getElementsByClassName('email-ar')[0];
 var Phonear = document.getElementsByClassName('phone-ar')[0];
 var Messagear = document.getElementsByClassName('message-ar')[0];
// console.log(lang);
if(lang === 'ar'){
// console.log(namear);
namear.setAttribute('placeholder', 'ادخل الإسم الثلاثي');
namear.setAttribute('data-msg', 'ادخل علي الاقل 4 حروف');

Emailar.setAttribute('data-msg', 'يرجي إدخال بريد الكتروني صحيح ');

Phonear.setAttribute('placeholder', '********** 966+');
Phonear.setAttribute('data-msg', 'يرجي ادخال 10 ارقام علي الاقل');

Messagear.setAttribute('placeholder', 'إكتب رسالتك هنا ....');
Messagear.setAttribute('data-msg', "من فضلك اكتب لنا شيئا");
}else{
  namear.setAttribute('placeholder', 'Your Name');
  namear.setAttribute('data-msg', 'Please enter at least 4 chars');

  Emailar.setAttribute('data-msg', 'Please enter a valid email');


  Phonear.setAttribute('placeholder', '966+ ********** ');
  Phonear.setAttribute('data-msg', 'Please enter at least 10 chars');

  Messagear.setAttribute('placeholder', 'write your message here ....');
  Messagear.setAttribute('data-msg', 'Please write something for us');
  
}