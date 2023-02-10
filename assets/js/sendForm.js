const formulario = document.querySelector('#form')
const sendForm = document.querySelector('#mail')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const textarea = document.querySelector('#message')
const alert = document.querySelector('#alert')
const btnClose = document.querySelector('#close')

formulario.addEventListener('submit', handleSubmit)
btnClose.addEventListener('click', ()=>{
  alert.style.opacity = 0
  setTimeout(()=>{
    alert.classList.remove('active')
    alert.style.opacity = 1
  },1000)
})

function handleSubmit(e) {
  e.preventDefault()
  if(inputName.value && inputEmail.value && textarea.value) {
    alert.classList.remove('active')
    const form = new FormData(this)
    sendForm.setAttribute('href', `mailto:viniciochavarria27@gmail.com?subject=${form.get('name')} - ${form.get('subject')}&body=${form.get('message')}`)
    sendForm.click()
    formulario.reset()
  } else {
    alert.classList.add('active')
    console.log("No existe")
  }
}