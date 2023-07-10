var lang = localStorage.getItem("lang");
var namear = document.getElementsByClassName('name-ar')[0];
 var Emailar = document.getElementsByClassName('email-ar')[0];
 var Phonear = document.getElementsByClassName('phone-ar')[0];
 var Messagear = document.getElementsByClassName('message-ar')[0];
 var conmsg = document.getElementsByClassName('Conmsg')[0];
 var Sitear = document.getElementsByClassName('site-ar')[0];
 var Servicear = document.getElementsByClassName('service-ar')[0];
 var hearSelect = document.getElementsByClassName('hearSelect')[0];
 var budget =  document.getElementsByClassName('budget')[0];
 var subName =  document.getElementById("sub-name");
 var subEmail =  document.getElementById("sub-email");
 var subName2 =  document.getElementById("sub2-name");
 var subEmail2 =  document.getElementById("sub2-email");
// console.log(lang);
if(lang === 'ar' ){

// console.log(namear);
if(namear && Emailar ){
  namear.setAttribute('placeholder', 'ادخل الإسم الثلاثي');
  namear.setAttribute('data-msg', 'ادخل علي الاقل 8 حروف');
  
  Emailar.setAttribute('data-msg', 'يرجي إدخال بريد الكتروني صحيح ');
  
}

 if(Phonear){
  Phonear.setAttribute('placeholder', '********** 966+');
Phonear.setAttribute('data-msg', 'يرجي ادخال 10 ارقام علي الاقل');

 }
 if(Messagear){
  Messagear.setAttribute('placeholder', 'إكتب رسالتك هنا ....');
  Messagear.setAttribute('data-msg', "من فضلك اكتب لنا شيئًا على الأقل 8 أحرف");
 }

if(Sitear){

 Sitear.setAttribute('data-msg', "من فضلك ادخل موقعك الالكتروني");
}
if(Servicear){
  Servicear.setAttribute('data-msg', "من فضلك إختر خدمة");

}
if(hearSelect){
  hearSelect.setAttribute('data-msg', "إختر كيف سمعت عنا");
}
if(budget){
  budget.setAttribute('data-msg', "إختر الميزانية");
}
if(subName  && subEmail)
{
  subName.setAttribute('placeholder', ' الإسم');
  subEmail.setAttribute('placeholder', ' البريد الالكتروني');
}
if(subName2 && subEmail2)
{
  subName2.setAttribute('placeholder', ' الإسم');
  subEmail2.setAttribute('placeholder', ' البريد الالكتروني');
}
}else{
 
  if(namear && Emailar ){
    namear.setAttribute('placeholder', 'Your Name');
    namear.setAttribute('data-msg', 'Please enter at least 8 chars');
  
    Emailar.setAttribute('data-msg', 'Please enter a valid email');
  
  }

  if(Phonear){
  Phonear.setAttribute('placeholder', '966+ ********** ');
  Phonear.setAttribute('data-msg', 'Please enter at least 10 chars');
  }

  if(Messagear){
    Messagear.setAttribute('placeholder', 'write your message here ....');
    Messagear.setAttribute('data-msg', 'Please write us something at least 8 characters');
  }
  if(Sitear){
    Sitear.setAttribute('data-msg', 'Please write your website');
  }
  if(Servicear){
    Servicear.setAttribute('data-msg', "Please select a service");
  }
  if(hearSelect){
    hearSelect.setAttribute('data-msg', "select How did you hear about us");
  }
  if(budget){
    budget.setAttribute('data-msg', "select budget");
  }
  if(subName  && subEmail){
    subName.setAttribute('placeholder', 'Name');
    subEmail.setAttribute('placeholder', 'E-mail');
  }
  if(subName2 && subEmail2){
    subName2.setAttribute('placeholder', 'Name');
    subEmail2.setAttribute('placeholder', 'E-mail');
  }
  
  
}