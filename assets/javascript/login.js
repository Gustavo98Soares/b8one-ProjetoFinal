const init = () => {

    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");
    const spanValidation = document.getElementById("login__msg-error")
    const inputButton = document.getElementById("button__submit");
  
    if(inputButton) {
      inputButton.addEventListener('click', (event) => {
        event.preventDefault();
  
        spanValidation.innerHTML = ""
        inputEmail.classList.remove(".login__msg-error--true");
  
          fetch ("https://test-final.b8one.academy/login", {
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: inputEmail.value,
            password: inputPassword.value,
          })
          }).then((response) => {
            return response.json()
            }).then((data) => {
            console.log(data)
  
             if(data !== true) {
               inputEmail.classList.add("login__msg-error--true");
               spanValidation.innerHTML = "Este e-mail não existe, você tem outro?"
             } else {
              window.location.href = "./dashboard.html"
             }
          })
      })
  } } 
  window.onload = init

  const buttonShowPassword = document.querySelector(".login__button-show-password")
const inputPassord2 = document.getElementById('password')

buttonShowPassword.addEventListener('click', function() {
  if (inputPassord2.type === "password") {
    inputPassord2.type = "text";
    buttonShowPassword.innerHTML = `
    <svg class="auth-page__input-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.3127 15.313C15.0131 15.6345 14.6518 15.8924 14.2503 16.0713C13.8489 16.2502 13.4155 16.3464 12.9761 16.3541C12.5367 16.3619 12.1002 16.281 11.6927 16.1164C11.2852 15.9518 10.915 15.7068 10.6042 15.3961C10.2934 15.0853 10.0484 14.7151 9.88383 14.3076C9.71923 13.9001 9.63839 13.4636 9.64615 13.0242C9.6539 12.5847 9.75008 12.1514 9.92896 11.7499C10.1078 11.3484 10.3657 10.9871 10.6873 10.6875M19.48 19.4803C17.6152 20.9017 15.3445 21.6892 13 21.7275C5.36364 21.7275 1 13.0002 1 13.0002C2.35697 10.4714 4.23906 8.262 6.52 6.52025L19.48 19.4803ZM10.7091 4.53479C11.46 4.35903 12.2288 4.27116 13 4.27298C20.6364 4.27298 25 13.0002 25 13.0002C24.3378 14.2391 23.5481 15.4054 22.6436 16.4802L10.7091 4.53479Z" stroke="#425DC7" stroke-width="1.5"/>
      <path d="M1 1L25 25" stroke="#142159" stroke-width="1.5"/>
    </svg>`
  } else {
    inputPassord2.type = "password";
    buttonShowPassword.innerHTML = `
    <svg class="auth-page__input-icon" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 10C1 10 5.36364 1 13 1C20.6364 1 25 10 25 10C25 10 20.6364 19 13 19C5.36364 19 1 10 1 10Z" stroke="#425DC7" stroke-width="1.5"/>
      <path d="M13 13.3745C14.8075 13.3745 16.2727 11.8635 16.2727 9.99951C16.2727 8.13555 14.8075 6.62451 13 6.62451C11.1925 6.62451 9.72729 8.13555 9.72729 9.99951C9.72729 11.8635 11.1925 13.3745 13 13.3745Z" stroke="#142159" stroke-width="1.5"/>
    </svg>
    `
  }
})