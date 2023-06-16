


var Apipassword = 'a#as@$#$@as#';
var lang = localStorage.getItem("lang");

const headers = new Headers();
headers.append('Apipassword', `${Apipassword}`);
headers.append('lang', `${lang}`);


/* all settings */

      fetch("https://testam.info/creativecloudsit/api/settings", {
          method: 'GET',
          headers: headers
        })
          .then(response => response.json())
          .then(res => {
            const settingData = res.data;
            const arrow = document.getElementById("arrow");
            const Visionarrow = document.getElementById("Vision-arrow");
            const Planarrow = document.getElementById("Plan-arrow");
            const Carearrow = document.getElementById("Care-arrow");
            if(lang == "ar"){
              arrow.classList.add("icofont-arrow-left");
              Visionarrow.classList.add("icofont-arrow-left");
              Planarrow.classList.add("icofont-arrow-left");
              Carearrow.classList.add("icofont-arrow-left");
            }
            else{
              arrow.classList.add("icofont-arrow-right");
              Visionarrow.classList.add("icofont-arrow-right");
              Planarrow.classList.add("icofont-arrow-right");
              Carearrow.classList.add("icofont-arrow-right");
            }
            /* mission */
            const missionTitle = document.getElementById("mission-title");
            const missionDesc  = document.getElementById("mission-desc");
            const missionImg  = document.getElementById("mission-img");
            if(missionTitle){
              missionTitle.textContent = settingData.mission_tilte
            }
            if(missionDesc){
              missionDesc.textContent = settingData.mission_description
            }
            if(missionImg){
              missionImg.src = settingData.mission_image
            }

            /* Vision */
            const VisionTitle = document.getElementById("Vision-title");
            const VisionDesc  = document.getElementById("Vision-desc");
            const VisionImg  = document.getElementById("Vision-img");
            if(VisionTitle){
              VisionTitle.textContent = settingData.vision_tilte
            }
            if(VisionDesc){
              VisionDesc.textContent = settingData.vision_description
            }
            if(VisionImg){
              VisionImg.src = settingData.vision_image
            }
            /* Plan */
            const PlanTitle = document.getElementById("Plan-title");
            const PlanDesc  = document.getElementById("Plan-desc");
            const PlanImg  = document.getElementById("Plan-img");
            if(PlanTitle){
              PlanTitle.textContent = settingData.plan_tilte
            }
            if(PlanDesc){
              PlanDesc.textContent = settingData.plan_description
            }
            if(PlanImg){
              PlanImg.src = settingData.plan_image
            }


              /* Care */
              const CareTitle = document.getElementById("Care-title");
              const CareDesc  = document.getElementById("Care-desc");
              const CareImg  = document.getElementById("Care-img");
              if(CareTitle){
                CareTitle.textContent = settingData.care_tilte
              }
              if(CareDesc){
                CareDesc.textContent = settingData.care_description
              }
              if(CareImg){
                CareImg.src = settingData.care_image
              }
              /* Pricing */
              const pricingtitle = document.getElementById("pricing-title");
              const pricingdesc  = document.getElementById("pricing-desc");
           
              if(pricingtitle){
                pricingtitle.textContent = settingData.pricing_tilte
              }
              if(pricingdesc){
                pricingdesc.textContent = settingData.pricing_description
              }
              


            console.log(data);
          })
          .catch(error => {
          
            console.error('Error:', error);
          });



/* End all settings */









// fetch("https://testam.info/creativecloudsit/api/services", {
//     method: 'GET',
//     headers: headers
//   })
//     .then(response => response.json())
//     .then(data => {

//       console.log(data);
//     })
//     .catch(error => {
     
//       console.error('Error:', error);
//     });



    /* footer subscribe form */
        const myfrom = document.getElementById("subscibe-form");
        const subscibeInput = document.getElementById("subscribe-input");

        myfrom.addEventListener('submit',function(e){
            e.preventDefault();
            const formdata = new FormData(this);
            fetch("https://testam.info/creativecloudsit/api/subscribe", {
            method: 'POST',
            headers: headers,
            body:formdata
        }).then(response => response.json())
        .then(res => {
      
            if(res.status == 201){
                if(lang == "ar"){
                
                    swal({
                        title: "أحسنت !",
                        text: "تم الارسال بنجاح",
                        icon: "success",
                        buttons: {
                            confirm: "تأكيد"
                        }
                    });
                
                }else{
                    swal("Good job!", `${res.msg}`, "success");
                
                }
                subscibeInput.value = "";
            }else if(res.status == false){
                if(lang == "ar"){

                  if(res.message.email && subscibeInput.value !== "" ){
                    swal({
                      title: "عذراً !",
                      text: "تم تسجيل هذا الحساب مسبقاٌ",
                      icon: "error",
                      buttons: {
                          confirm: "موافق"
                      }
                  });
                  }else{
                      // swal("عذراً !", "يجب ادخال البريد الالكتروني", "error");
                      swal({
                        title: "عذراً !",
                        text: "يجب ادخال البريد الالكتروني",
                        icon: "error",
                        buttons: {
                            confirm: "موافق"
                        }
                      });
                  }
                   
                }else{
                    swal("Sorry !", `${res.message.email}`, "error");
                }
                
                
            }
      
        
        })
        .catch(error => {
        
            console.error('Error:', error);
        });

        })

    /* end footer subscribe form */

    /* contact form */
    const contactfrom = document.getElementById("contactfrom");
    const submitbtn = document.getElementById("submitbtnt");
    if(contactfrom){
      contactfrom.addEventListener('submit',function(e){
        e.preventDefault();
        const formdata = new FormData(this);
    
        
        fetch("https://testam.info/creativecloudsit/api/contact_us", {
        method: 'POST',
        headers: headers,
        body:formdata
    }).then(response => response.json())
    .then(res => {
   
        if(res.status == 201){
            if(lang == "ar"){
            
                swal({
                    title: "أحسنت !",
                    text: "تم الارسال بنجاح",
                    icon: "success",
                    buttons: {
                        confirm: "تأكيد"
                    }
                });
            }else{
                swal("Good job!", `${res.msg}`, "success");
            
            }
             document.getElementById("contactfrom").reset(); // Reset the form
        }else if(res.status == false){
           
          if(lang == "ar"){

            
            if(formdata.get('website') && res.message.website){
              swal({
                title: "عذراً !",
                text: "يجب ألا يزيد حقل الموقع الالكتروني عن 55 حرفًا.",
                icon: "error",
                buttons: {
                    confirm: "موافق"
                }
            });
            }
               
            }else{
              if(formdata.get('website') && res.message.website){
                swal("Sorry !", `${res.message.website}`, "error");
              }
            }
            
            
        }
  
    
    })
    .catch(error => {
    
        console.error('Error:', error);
    });

    })
    }
   

/* end contact form */


 /* Team */


fetch("https://testam.info/creativecloudsit/api/teams", {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(res => {
     let  data = res.data;
     const membersContainer = document.querySelector("#members-container");

     data.forEach((item) => {
       const name = item.name;
       const job = item.job;
       const phone = item.phone;
       const image = item.image;
 
       const memberDiv = document.createElement("div");
       memberDiv.className = "col-lg-4 col-md-6 d-flex align-items-stretch";
 
       const memberInnerDiv = document.createElement("div");
       memberInnerDiv.className = "member";
 
       const memberImgDiv = document.createElement("div");
       memberImgDiv.className = "member-img";
 
       const memberImg = document.createElement("img");
       memberImg.src = image;
       memberImg.className = "img-fluid";
       memberImg.alt = "";
 
       const socialDiv = document.createElement("div");
       socialDiv.className = "social";

       const a1 = document.createElement("a");
       const a2 = document.createElement("a");
       const a3 = document.createElement("a");
       const a4 = document.createElement("a");

       const i1 = document.createElement("i");
       i1.className = "icofont-twitter";

       const i2 = document.createElement("i");
       i2.className = "icofont-facebook";

       const i3 = document.createElement("i");
       i3.className = "icofont-instagram";

       const i4 = document.createElement("i");
       i4.className = "icofont-linkedin";

       const memberInfoDiv = document.createElement("div");
       memberInfoDiv.className = "member-info";
 
       const nameHeading = document.createElement("h4");
       nameHeading.textContent = name;
       nameHeading.style.textAlign = "start";
 
       const jobSpan = document.createElement("span");
       jobSpan.textContent = job;
       jobSpan.style.textAlign = "start";
 
       const phoneParagraph = document.createElement("p");
       phoneParagraph.textContent = phone;
       phoneParagraph.style.textAlign = "start";
 
       // Append the elements to their respective parent elements
       if(memberImgDiv){
        memberImgDiv.appendChild(memberImg);
        memberImgDiv.appendChild(socialDiv);
       }
   
      if(socialDiv){
        socialDiv.appendChild(a1);
        socialDiv.appendChild(a2);
        socialDiv.appendChild(a3);
        socialDiv.appendChild(a4);
      }
       
        if(a1){
          a1.appendChild(i1);
        }
        if(a2){
          a2.appendChild(i2);
        }
        if(a3){
          a3.appendChild(i3);
        }
        if(a4){
          a4.appendChild(i4);
        }
       
        // a2.appendChild(i2);
        // a3.appendChild(i3);
        // a4.appendChild(i4);
 
        if(memberInfoDiv){
          memberInfoDiv.appendChild(nameHeading);
          memberInfoDiv.appendChild(jobSpan);
          memberInfoDiv.appendChild(phoneParagraph);
        }
        if(memberInnerDiv){
          memberInnerDiv.appendChild(memberImgDiv);
          memberInnerDiv.appendChild(memberInfoDiv);
        }
      if(memberDiv){
        memberDiv.appendChild(memberInnerDiv);
      }
      if(membersContainer){
        membersContainer.appendChild(memberDiv);
      }
      
     });
    })
    .catch(error => {
     
      console.error('Error:', error);
    });

/* End Team */


/* Services */

fetch("https://testam.info/creativecloudsit/api/services", {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(res => {
     let  Servicesdata = res.data;
     const ServicesContainer = document.querySelector("#services-container");
    // Define the icon classes and delays
    const iconClasses = ["icon-box-pink", "icon-box-cyan", "icon-box-green"];
    const iconIClasses = ["bxl-dribbble", "bx-file", "bx-tachometer"];
    const delays = [0, 100, 200];

    const selectElement = document.querySelector('.contselct');

    // Create the default option
    // const defaultOption = document.createElement('option');
    // defaultOption.setAttribute('selected', true);
    // if(lang =="ar"){
    //   defaultOption.textContent = "إختر الخدمة";
    // }
    // else{
    //   defaultOption.textContent = "Choose Service";
    // }
    // if(selectElement){

    //   selectElement.appendChild(defaultOption);
    // }

        // Loop through the data
    Servicesdata.forEach((item, index) => {
   /* contact select element */

      const option = document.createElement('option');
      option.setAttribute('value', item.id);
      option.setAttribute('data-i18n', item.name);
      option.textContent = item.name;
      if(selectElement){

        selectElement.appendChild(option);
      }




    // Create the necessary elements
    const colDiv = document.createElement("div");
    const iconBoxDiv = document.createElement("div");
    const iconDiv = document.createElement("div");
    const iconI = document.createElement("i");
    const titleH4 = document.createElement("h4");
    const linkA = document.createElement("a");
    const descriptionP = document.createElement("p");
  
    // Set the class names and attributes
    colDiv.className = "col-md-6 col-lg-4 d-flex align-items-stretch";
    colDiv.setAttribute("data-aos", "fade-up");
    colDiv.setAttribute("data-aos-delay", delays[index].toString());
    iconBoxDiv.className = `icon-box ${iconClasses[index]}`;
    iconDiv.className = "icon";
    iconI.className =   `bx ${iconIClasses[index]}`;  
    titleH4.className = "title";
    linkA.href = "#";
    linkA.textContent = item.name;
    descriptionP.textContent = item.description;
    // Append the elements to the container
    if(ServicesContainer){ ServicesContainer.appendChild(colDiv);}
    if(colDiv){ colDiv.appendChild(iconBoxDiv);}
    if(iconBoxDiv){iconBoxDiv.appendChild(iconDiv);}
    if(iconDiv){iconDiv.appendChild(iconI);}
    if(iconBoxDiv){ iconBoxDiv.appendChild(titleH4);}
    if(titleH4){titleH4.appendChild(linkA);}
    if(iconBoxDiv){iconBoxDiv.appendChild(descriptionP);}
    

    // Set the data from the API
    linkA.textContent = item.name;
    // linkA.href = item.link;
    descriptionP.textContent = item.description;
});
  
  
  
  
})
    .catch(error => {
     
      console.error('Error:', error);
    });

/* End Services */

/* Counter */
fetch("https://testam.info/creativecloudsit/api/counter", {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(res => {
     let  Counterdata = res.data;
   
    
    
    // Update the counter values
    document.getElementById("counter1").textContent = Counterdata.counter1;
    document.getElementById("counter2").textContent = Counterdata.counter2;
    document.getElementById("counter3").textContent = Counterdata.counter3;
    document.getElementById("counter4").textContent = Counterdata.counter4;
    // Update the counter labels
    document.getElementById("counter1Label").textContent = Counterdata.title1;
    document.getElementById("counter2Label").textContent = Counterdata.title2;
    document.getElementById("counter3Label").textContent = Counterdata.title3;
    document.getElementById("counter4Label").textContent = Counterdata.title4;
        

  
})
    .catch(error => {
     
      console.error('Error:', error);
    });


/* End Counter */

/* Features */

fetch("https://testam.info/creativecloudsit/api/features", {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(res => {
        let  Featuredata = res.data;
      
        // Iterate over the data and generate the HTML
  var FeatureContainer = document.getElementById("Feature-container");

  Featuredata.forEach(function(item, index) {
        var featureDiv = document.createElement("div");
        featureDiv.classList.add("row");
        featureDiv.dataset.aos = "fade-up";

        var imageDiv = document.createElement("div");
        imageDiv.classList.add("col-md-5");
        if (index % 2 !== 0) {
        imageDiv.classList.add("order-1", "order-md-2");
        }

        var image = document.createElement("img");
        image.src = item.image;
        image.classList.add("img-fluid");
        image.alt = "";

        imageDiv.appendChild(image);

        var contentDiv = document.createElement("div");
        contentDiv.classList.add("col-md-7", "pt-4");
        if (index % 2 !== 0) {
        contentDiv.classList.add("order-2", "order-md-1");
        }

        var heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.style.textAlign = "start";


        var description = document.createElement("p");
        description.textContent = item.description;
        description.style.textAlign = "start";

        if(contentDiv){
          contentDiv.appendChild(heading);
          contentDiv.appendChild(description);
        }
  
        if(featureDiv){
          featureDiv.appendChild(imageDiv);
          featureDiv.appendChild(contentDiv);
        }
      
        if(FeatureContainer){
          FeatureContainer.appendChild(featureDiv);
        }
     
    });
    
    })
    .catch(error => {
   
    });


/* End Features */


/* Sliders */

fetch("https://testam.info/creativecloudsit/api/sliders", {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(res => {
        let  slidersdata = res.data;
       
        // Iterate over the data and generate the HTML
        var parentElement = document.getElementById("heroCarousel");

        // Loop through the data and create the HTML structure
  slidersdata.forEach((item, index) => {
    // Create the carousel item div
    const carouselItemDiv = document.createElement("div");
    carouselItemDiv.className = index === 0 ? "carousel-item active" : "carousel-item";
  
    // Create the carousel container div
    const carouselContainerDiv = document.createElement("div");
    carouselContainerDiv.className = "carousel-container";
  
    // Create the h2 element
    const heading = document.createElement("h2");
    heading.className = "animated fadeInDown";
    const span = document.createElement("span");
    heading.appendChild(span);
    span.textContent = item.title;
  
    // Create the p element
    const description = document.createElement("p");
    description.className = "animated fadeInUp";
    description.style.fontSize = "20px";
    description.textContent = item.sub_title;
  
    // Create the anchor element
    const anchor = document.createElement("a");
    anchor.href = "";
    anchor.className = "btn-get-started animated fadeInUp";
    anchor.textContent = item.btn_text2;
  
    // Append the heading, description, and anchor to the carousel container div
    if(carouselContainerDiv){
      carouselContainerDiv.appendChild(heading);
      carouselContainerDiv.appendChild(description);
      carouselContainerDiv.appendChild(anchor);
    }

  
    // Append the carousel container div to the carousel item div
    if(carouselItemDiv){

      carouselItemDiv.appendChild(carouselContainerDiv);
    }
  
    // Append the carousel item div to the parent element
    if(parentElement){

      parentElement.appendChild(carouselItemDiv);
    }
  });

     // Add the carousel control buttons
        const carouselControlPrev = document.createElement("a");
        carouselControlPrev.className = "carousel-control-prev";
        carouselControlPrev.href = "#heroCarousel";
        carouselControlPrev.setAttribute("role", "button");
        carouselControlPrev.setAttribute("data-slide", "prev");
        carouselControlPrev.innerHTML = `
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        `;

        const carouselControlNext = document.createElement("a");
        carouselControlNext.className = "carousel-control-next";
        carouselControlNext.href = "#heroCarousel";
        carouselControlNext.setAttribute("role", "button");
        carouselControlNext.setAttribute("data-slide", "next");
        carouselControlNext.innerHTML = `
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        `;

        // Append the carousel control buttons to the parent element
        if(parentElement){
          parentElement.appendChild(carouselControlPrev);
          parentElement.appendChild(carouselControlNext); 
        }
    })
    .catch(error => {
     
      console.error('Error:', error);
    });


/* End Sliders */

    /* About us */

    fetch("https://testam.info/creativecloudsit/api/about", {
        method: 'GET',
        headers: headers
      })
        .then(response => response.json())
        .then(res => {
            let Aboutdata = res.data;
            
      
            // Access the required properties from the API response
            const testimonialsTitle = Aboutdata.tetstimonials_title;
            const testimonialsDescription =  Aboutdata.tetstimonials_description;


            // Update the HTML content of the elements
            const imgsrc =  document.querySelector('.img-src');
            const titleElement = document.querySelector('.Tetstimonials-Title');
            const descriptionElement = document.querySelector('.Tetstimonials-desc');

          if(titleElement){

            titleElement.textContent  = testimonialsTitle;
          }
          if(descriptionElement){
            descriptionElement.textContent  = testimonialsDescription;
          }
           if(imgsrc)
            {imgsrc.src =  Aboutdata.image;}

            const def1 =document.getElementById("defintion");
            if(def1){
              def1.textContent = Aboutdata.description;
            }
            const def2 =document.getElementById("defintion2");
            if(def2){
              def2.textContent = Aboutdata.mini_description;
            }
            const li1 =document.getElementById("li1");
            if(li1){
              li1.textContent = Aboutdata.point1;
            }
            const li2 =document.getElementById("li2");
            if(li2){
              li2.textContent = Aboutdata.point2;
            }
            const li3 =document.getElementById("li3");
            if(li3){
              li3.textContent = Aboutdata.point3;
            }

        })
        .catch(error => {
        
          console.error('Error:', error);
        });

        fetch("https://testam.info/creativecloudsit/api/about", {
            method: 'GET',
            headers: headers
          })
            .then(response => response.json())
            .then(res => {
                let Aboutdata = res.data;
                // Update the HTML content of the elements
            
                const skillstitle = document.querySelector('.skills-title');
                const skillsdescription = document.querySelector('.skill_desc');
              
                // Update the content of the elements with the retrieved data
              if(skillstitle){
                skillstitle.textContent = Aboutdata.skills_title;
              }
              if(skillsdescription){
                skillsdescription.textContent = Aboutdata.skills_description;
              }
                
                
             
            })
            .catch(error => {
            
              console.error('Error:', error);
            });
            fetch("https://testam.info/creativecloudsit/api/about", {
        method: 'GET',
        headers: headers
      })
        .then(response => response.json())
        .then(res => {
            let Aboutdata = res.data;
            // Update the HTML content of the elements
            const FeatureTitle = document.querySelector('.Features-Title');
            const FeatureDescription = document.querySelector('.Features-desc');

            // Update the content of the elements with the retrieved data
          if(FeatureTitle){

            FeatureTitle.textContent = Aboutdata.features_title;
          }
          if(FeatureDescription){

            FeatureDescription.textContent = Aboutdata.features_description;
          }
      
        })
        .catch(error => {
        
          console.error('Error:', error);
        });
    /* End  About us */


      /* Tetstimonials */

      fetch("https://testam.info/creativecloudsit/api/tetstimonials", {
          method: 'GET',
          headers: headers
        })
          .then(response => response.json())
          .then(res => {
            let apiData = res.data;
          
        
            document.getElementById('img1').src = apiData[0].image;
            document.getElementById('name1').textContent = apiData[0].name;
            document.getElementById('title1').textContent = apiData[0].title;
            document.getElementById('desc1').textContent = apiData[0].description;
       

            document.getElementById('img2').src = apiData[1].image;
            document.getElementById('name2').textContent = apiData[1].name;
            document.getElementById('title2').textContent = apiData[1].title;
            document.getElementById('desc2').textContent = apiData[1].description;

       
            document.getElementById('img3').src = apiData[2].image;
            document.getElementById('name3').textContent = apiData[2].name;
            document.getElementById('title3').textContent = apiData[2].title;
            document.getElementById('desc3').textContent = apiData[2].description;

       
            document.getElementById('img4').src = apiData[3].image;
            document.getElementById('name4').textContent = apiData[3].name;
            document.getElementById('title4').textContent = apiData[3].title;
            document.getElementById('desc4').textContent = apiData[3].description;

            document.getElementById('img5').src = apiData[4].image;
            document.getElementById('name5').textContent = apiData[4].name;
            document.getElementById('title5').textContent = apiData[4].title;
            document.getElementById('desc5').textContent = apiData[4].description;
        

  // Function to create a testimonial element
  // function createTestimonialElement(testimonial) {
  //   const testimonialItem = document.createElement("div");
  //   testimonialItem.classList.add("testimonial-item");

  //   const imgElement = document.createElement("img");
  //   imgElement.classList.add("testimonial-img");
  //   imgElement.src = testimonial.image;
  //   testimonialItem.appendChild(imgElement);

  //   const nameElement = document.createElement("h3");
  //   nameElement.textContent = testimonial.name;
  //   testimonialItem.appendChild(nameElement);

  //   const titleElement = document.createElement("h4");
  //   titleElement.textContent = testimonial.title;
  //   testimonialItem.appendChild(titleElement);

  //   const descElement = document.createElement("p");
  //   const quoteLeftIcon = document.createElement("i");
  //   quoteLeftIcon.classList.add("bx", "bxs-quote-alt-left", "quote-icon-left");
  //   descElement.appendChild(quoteLeftIcon);

  //   const descSpan = document.createElement("span");
  //   descSpan.textContent = testimonial.description;
  //   descElement.appendChild(descSpan);

  //   const quoteRightIcon = document.createElement("i");
  //   quoteRightIcon.classList.add("bx", "bxs-quote-alt-right", "quote-icon-right");
  //   descElement.appendChild(quoteRightIcon);

  //   testimonialItem.appendChild(descElement);

  //   return testimonialItem;
  // }
  //   function populateTestimonials() {
  //     const testimonialsContainer = document.getElementById("testimonialsContainer");
  
  //     apiData.forEach(function(testimonial) {
  //       const testimonialElement = createTestimonialElement(testimonial);
  //       testimonialsContainer.appendChild(testimonialElement);
  //     });
  //   }
  
 
  //   populateTestimonials();
         
          })
          .catch(error => {
          
            console.error('Error:', error);
          });
      
      /* End Tetstimonials */
 

      /* why use us */


      fetch("https://testam.info/creativecloudsit/api/whyour", {
          method: 'GET',
          headers: headers
        })
          .then(response => response.json())
          .then(res => {
            whydata = res.data;
            const firstTitleElement = document.getElementById("first-title");
            const secondTitleElement = document.getElementById("second-title");
            const firstDescriptionElement = document.getElementById("first-description");
            const secondDescriptionElement = document.getElementById("second-description");
            const fimg = document.getElementById("firstImg");
            const secondimg = document.getElementById("secondImg");
            const vedioImg =  document.getElementById("vedioImg");
            if(fimg){
              fimg.src = whydata.first_image;
            }
            if(secondimg){
              secondimg.src = whydata.second_image;
            }
            if(secondimg){
              vedioImg.src = whydata.video_image;
            }
          
           
            const vedio = document.getElementById("vedio");
            if(vedio){
              vedio.href = whydata.video;
            }
            if(firstTitleElement){
              firstTitleElement.textContent = whydata.first_title;
            }
            if(secondTitleElement){
              secondTitleElement.textContent = whydata.second_title;
            }
            if(firstDescriptionElement){
              firstDescriptionElement.textContent = whydata.first_description;
            }
            if(secondDescriptionElement){
              secondDescriptionElement.textContent = whydata.second_description;
            }
         
          })
          .catch(error => {
          
            console.error('Error:', error);
          });
      /* End why use us */


      

   /* end footer subscribe form */

  

   /* reachby*/


   fetch("https://testam.info/creativecloudsit/api/reachby", {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(res => {
      reachby = res.data;

          const selectElement = document.querySelector('.hearSelect');

          // Create the default option
          // const defaultOption = document.createElement('option');
          // defaultOption.setAttribute('selected', true);
          // if(lang =="ar"){
          //   defaultOption.textContent = "كيف سمعت عنا ؟ ";
          // }
          // else{
          //   defaultOption.textContent = "How did you hear about us ? ";
          // }
          // selectElement.appendChild(defaultOption);

          // Create options based on the data
          reachby.forEach(item => {
            const option = document.createElement('option');
            option.setAttribute('value', item.id);
        
            option.textContent = item.name;
            selectElement.appendChild(option);
          });





    })
    .catch(error => {
    
      console.error('Error:', error);
    });
/* End reachby*/

  /* budget*/


  fetch("https://testam.info/creativecloudsit/api/budgets", {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(res => {
      budget = res.data;

          const selectElement = document.querySelector('.budget');

          // Create the default option
          const defaultOption = document.createElement('option');
          defaultOption.setAttribute('selected', true);
          if(lang =="ar"){
            defaultOption.textContent = "ما هي ميزانيتك ؟ ";
          }
          else{
            defaultOption.textContent = "What is your budget ? ";
          }
          selectElement.appendChild(defaultOption);

          // Create options based on the data
          budget.forEach(item => {
            const option = document.createElement('option');
            option.setAttribute('value', item.id);
          
            // option.textContent = "$"+ item.from + " - " + "$"+ item.to;
            option.textContent = item.description;
            selectElement.appendChild(option);
          });





    })
    .catch(error => {
    
      console.error('Error:', error);
    });
/* End budget*/

    /* get touch form */
        // Get form inputs and file
        
    
        var subscribe = document.getElementById('subscribe');
        var fileInput = document.getElementById("fileInput");

        const icon = document.querySelector(".icobtn");
        icon.addEventListener("click", function() {
          fileInput.click();
        });

      fileInput.addEventListener("change", function() {
        // Handle the selected file
        console.log(fileInput.files.length );
        console.log("Selected file:", fileInput.files[0]);
        const filenamecontainer = document.getElementById("filenamecontainer");
        const filename = document.getElementById("filename");      
        if (fileInput.files.length > 0) {
          filenamecontainer.style.visibility= "visible"
        } else {
          filenamecontainer.style.visibility= "hidden"
        }
        filename.textContent =  fileInput.files[0].name
      });

      const  btnremove = document.getElementById("btnremove");
      btnremove.addEventListener("click", function() {
        if (fileInput.files.length > 0) {
          fileInput.value = null;
          console.log(fileInput.files.length );
          filenamecontainer.style.visibility= "hidden"
        }
      });

      subscribe.addEventListener("change", function() {
        console.log("Checkbox value:", subscribe.checked);
        if(subscribe.checked == true){
          subscribe.value = 2;
        }else{
          subscribe.value = 1;
        }
        
      });


    const getTouch = document.getElementById("getTouch");
   
   
    if(getTouch){
      getTouch.addEventListener('submit',function(e){
        e.preventDefault();
        const formdata = new FormData();
        var getTouchname = document.getElementById('name2').value;
        var email = document.getElementById('email2').value;
        var phone = document.getElementById('phone2').value;
        var reach_by_id = document.getElementById('reach_by_id').value;
        var budget_id = document.getElementById('budget_id').value;
        var msg = document.getElementById('msg2').value;
      //  var fileInput = document.getElementById("fileInput");
        formdata.append('name', getTouchname);
        formdata.append('email', email);
        formdata.append('phone', phone);
        formdata.append('reach_by_id', reach_by_id);
        formdata.append('budget_id', budget_id);
        formdata.append('msg', msg);
        formdata.append('subscribe', subscribe.value);
        formdata.append('file[]', fileInput.files[0]);

        console.log(formdata.get("name"));
        console.log(formdata.get("email"));
        console.log(formdata.get("phone"));
        console.log(formdata.get("reach_by_id"));
        console.log(formdata.get("budget_id"));
        console.log(formdata.get("msg"));
        console.log(formdata.get("subscribe"));
         console.log(formdata.get("file[]"));
    
        
        fetch("https://testam.info/creativecloudsit/api/get_touch", {
        method: 'POST',
        headers: headers,
        body:formdata
    }).then(response => response.json())
    .then(res => {
   console.log(res);
        if(res.status == 201){
            if(lang == "ar"){
            
                swal({
                    title: "أحسنت !",
                    text: "تم الارسال بنجاح",
                    icon: "success",
                    buttons: {
                        confirm: "تأكيد"
                    }
                });
            }else{
                swal("Good job!", `${res.msg}`, "success");
            
            }
             document.getElementById("getTouch").reset(); // Reset the form
        }else if(res.status == false){
           if(lang == "ar"){
            swal("عذراٌ !", "يرجي ادخال جميع البيانات", "error");
           }else{
            swal("Sorry !", "Please enter all data", "error");
           }
          
            
            
        }
  
    
    })
    .catch(error => {
    
        console.error('Error:', error);
    });

    })
    }
   

/* end get touch form */