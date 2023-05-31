// Example starter JavaScript for disabling form submissions if there are invalid fields

//CODIGO DE EJEMPLO DE LA PAGINA DE BOOTSTRAP
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

////////////////////////////////////////////////////////////////

//CODIGO PROPORCIONADO POR CHAT GPT TRAS PEDIRLE QUE ME MODIFICARA EL CODIGO
//DE EJEMPLO DE LA PAGINA DE BOOTSTRAP, CON LA INTENCIÓN DE QUE SOLO ME
//MOSTRARA EL ALERT EN CASO DE QUE HUBIERA CAMPOS INVÁLIDOS.

const form = document.querySelector('.needs-validation')

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]')
  let camposInvalidos = false

  // Iterar sobre los campos del formulario
  inputs.forEach(input => {
    if (!input.value) {
      camposInvalidos = true
      input.classList.add('is-invalid')
    } else {
      input.classList.remove('is-invalid')
    }
  })

  if (!form.checkValidity() || camposInvalidos) {
    // Aquí puedes mostrar una alerta o mensaje indicando que hay campos inválidos
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const message = 'Si te da pereza escribir, pide ayuda a ChatGPT.'
    const type = 'danger'
    appendAlert(message, type)

    // Eliminar mensajes de validación de Bootstrap
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.checkValidity()) {
          input.classList.remove('is-invalid')
        }
      })
    })
  } else {
    // Aquí puedes realizar alguna acción adicional si el formulario es válido
    // Por ejemplo, enviar los datos a un servidor
    form.submit()
  }
})

function appendAlert(message, type) {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible" role="alert">
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  alertPlaceholder.innerHTML = ''
  alertPlaceholder.append(wrapper)
}
