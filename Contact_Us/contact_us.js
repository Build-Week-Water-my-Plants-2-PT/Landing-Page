// Menu Toggle

function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");

  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}

//Validating the Contact form

function validate() {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const emailTitle = document.getElementById("title");
  const message = document.getElementById("message");
  const error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;

  if (name.value === "" || name.value === null) {
    text = "Name is required";
    error_message.innerHTML = text;
    console.log(1);
    return false;
  }
  if (email.value === "" || email.value === null || email.indexOf("@") == -1) {
    text = "Please enter a valid email";
    error_message.innerHTML = text;
    return false;
  }
  if (emailTitle.value === "" || emailTitle.value === null) {
    text = "Title is required";
    error_message.innerHTML = text;
    return false;
  }
  if (message.value === "" || message.value === null) {
    text = "What did you want to tell us?";
    error_message.innerHTML = text;
    return false;
  }
  text = "Form Submitted Successfully!";
  error_message.innerHTML = text;
  return true;
}
