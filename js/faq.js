const button = document.querySelectorAll('.faq-toggle')

button.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active')
  })
})