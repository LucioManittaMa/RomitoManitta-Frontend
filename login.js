document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.card-front a.btn');
    const registerButton = document.querySelector('.card-back a.btn');
  
    loginButton.addEventListener('click', getLoginInfo);
    registerButton.addEventListener('click', getRegisterInfo);
  
    function getLoginInfo() {
      const emailInput = document.querySelector('.card-front input[type="email"]');
      const passwordInput = document.querySelector('.card-front input[type="password"]');
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (email === '' || password === '') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all fields!",
        });
      } else {
        console.log(`Login info: Email - ${email}, Password - ${password}`);
        window.location.href = "./store.html"
      }
    }
  
    function getRegisterInfo() {
      const fullNameInput = document.querySelector('.card-back input[type="text"]');
      const phoneNumberInput = document.querySelector('.card-back input[type="tel"]');
      const emailInput = document.querySelector('.card-back input[type="email"]');
      const passwordInput = document.querySelector('.card-back input[type="password"]');
  
      const fullName = fullNameInput.value.trim();
      const phoneNumber = phoneNumberInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (fullName === '' || phoneNumber === '' || email === '' || password === '') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all fields!",
        });
      } else {
        console.log(`Register info: Full Name - ${fullName}, Phone Number - ${phoneNumber}, Email - ${email}, Password - ${password}`);
        window.location.href = "./store.html"
      }
    }
  });