const contactForm =document.querySelector('.form-contact');
let name =document.querySelector('#name');
let email =document.querySelector('#email');
let mobileNumber = document.querySelector('#mobile');

let message =document.querySelector('#message');


contactForm.addEventListener('submit', (e)=>{
   e.preventDefault();

   let formData= {
       name: name.value,
       email: email.value,
       mobile: mobileNumber.value,
       message:message.value
   }
  

   let xhr = new XMLHttpRequest();
   xhr.open('POST', '/');
   xhr.setRequestHeader('content-type', 'application/json');
   xhr.onload= function(){

    if(xhr.responseText == 'sucess'){
      alert('Email send');
      name.value='';
      email.value='';
      mobileNumber.value='';
      message.value='';
    }
    else{
      alert('Something went Weong');
    }
  }

  xhr.send(JSON.stringify(formData))
  })