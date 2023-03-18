const toggleShowPassword = () => {
  const eye = document.querySelector('.password div img')
  const password = document.querySelector('.password input')

  if (eye.getAttribute('src') === './assets/eye-off.svg'){
    eye.setAttribute('src', './assets/eye.svg')
    password.type = 'text'
  }
  else{
    eye.setAttribute('src', './assets/eye-off.svg')
    password.type = 'password'
  }
}

//FUNÇÃO SIMPLIFICADA

// const toggleShowPassword = () => {
//   const eye = document.querySelector('.password div img')
//   const password = document.querySelector('.password input')

//   password.type = password.type === 'password' ? 'text' : 'password'
//   eye.setAttribute('src', password.type === 'password' ? './assets/eye-off.svg' : './assets/eye.svg')
// }
