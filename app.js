document.getElementById("signup").addEventListener("submit", function (e) {
  e.preventDefault();

  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email-address").value;

  if (password === confirmPassword) {
    document.getElementById("error").innerHTML = "";
    document.getElementById("information").innerHTML = `
      <div class="mt-3">
        <p>Welcome, ${firstName} ${lastName}</p>
        <p>Thank you for signing up. Please verify your signup details: </p>
        <p>Email: ${email} </p>
        <p>Password: ${confirmPassword} </p>
      </div>`;
  } else {
    document.getElementById("information").innerHTML = "";
    document.getElementById("error").innerHTML = `
            <p class="fst-italic text-danger mt-2">Password does not match.</p>
        `;
  }
});
