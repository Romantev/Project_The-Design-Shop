let loginForm = document.getElementById("form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");

  if (name.value == "" || email.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${name.value} and email of ${email.value}`
    );

    name.value = "";
    email.value = "";
  }
});