


var Apipassword = 'a#as@$#$@as#';
var lang = localStorage.getItem("lang");

const headers = new Headers();
headers.append('Apipassword', `${Apipassword}`);
headers.append('lang', `${lang}`);


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
            
            }else if(res.status == false){
                if(lang == "ar"){
                    // swal("عذراً !", "يجب ادخال البريد الالكتروني", "error");
                    swal({
                        title: "عذراً !",
                        text: "يجب ادخال البريد الالكتروني",
                        icon: "error",
                        buttons: {
                            confirm: "موافق"
                        }
                    });
                }else{
                    swal("Sorry !", `${res.message.email}`, "error");
                }
                
                
            }
        subscibeInput.value = "";
        
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
        console.log(formdata);
        console.log(formdata.get('service_id'));
        
        fetch("https://testam.info/creativecloudsit/api/contact_us", {
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


        // Loop through the data
    Servicesdata.forEach((item, index) => {
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
    linkA.href = "";
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
    linkA.href = item.link;
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
     
      console.log('Error:', error);
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


            titleElement.textContent  = testimonialsTitle;
            descriptionElement.textContent  = testimonialsDescription;
            imgsrc.src =  Aboutdata.image;

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
              
                skillstitle.textContent = Aboutdata.skills_title;
                skillsdescription.textContent = Aboutdata.skills_description;
             
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
            console.log(apiData);
        
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
            // console.log(apiData[2]);

         


         
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
            const fimage = document.getElementById("Fimage");
            fimage.src = whydata.first_image;
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


      

