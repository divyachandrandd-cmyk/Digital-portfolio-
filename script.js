// Contact form submit event

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  

  let name = document.getElementById("name").value;

  alert("Thank you for reaching out, " + name + "! I'll get back to you soon.");

  

  this.reset();

});