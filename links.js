const loginButtons = document.querySelectorAll("#login-button, #signin-button, #logout-button");
loginButtons.forEach(button => {
  button.addEventListener("click", function() {
    window.location.href = "./login.html";
  });
});

const searchInput = document.querySelector(".search-bar input");
searchInput.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    const searchQuery = searchInput.value.trim();
    if (searchQuery===""){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please search for a product",
      });
    }else{
      console.log(`Searched item: ${searchQuery}`);
    }
  }
})