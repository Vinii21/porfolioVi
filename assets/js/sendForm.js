const formulario = document.querySelector('#form')
const sendForm = document.querySelector('#mail')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const textarea = document.querySelector('#message')
const alert = document.querySelector('#alert')
const btnClose = document.querySelector('#close')

formulario.addEventListener('submit', handleSubmit)


function handleSubmit(e) {
  e.preventDefault()
  if(inputName.value && inputEmail.value && textarea.value) {
    alert.classList.remove('active')
    const form = new FormData(this)
    sendForm.setAttribute('href', `mailto:viniciochavarria27@gmail.com?subject=${form.get('name')} - ${form.get('subject')}&body=${form.get('message')}`)
    sendForm.click()
    formulario.reset()
  } else {
    Swal.fire({
      title: 'Verifica que no haya campos vacios',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}

