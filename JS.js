function calcularIMC() {
    var altura = document.getElementById('altura').value / 100; // Convertir a metros
    var peso = document.getElementById('peso').value;
    var imc = peso / (altura * altura);
    var resultado = "Su IMC es " + imc.toFixed(2);
    document.getElementById('resultadoIMC').innerHTML = resultado;
  }

  function calcularIMC7() {
    var altura = document.getElementById('altura').value / 100; // Convertir a metros
    var imc = altura * 100 / 7;
    var resultado = "Su IMC sería " + imc.toFixed(2) + " (según la fórmula de los 7 años)";
    document.getElementById('resultadoIMC').innerHTML = resultado;
  }

  function calcularEdad() {
    var fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    var resultado = "La edad de la mascota es " + edad + " años";
    document.getElementById('resultadoEdad').innerHTML = resultado;
  }

  function showIMCCalculator() {
    document.getElementById('imcCalculator').style.display = 'block';
    document.getElementById('ageCalculator').style.display = 'none';
  }

  function showAgeCalculator() {
    document.getElementById('imcCalculator').style.display = 'none';
    document.getElementById('ageCalculator').style.display = 'block';
  }
  
  
  function inicioCalculator() {
    document.getElementById('inicioCalculator').style.display = 'none';
    document.getElementById('inicioCalculator').style.display = 'block';
  }
  var attempts = 0; // Contador de intentos

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Incrementar el contador de intentos
  attempts++;
  
  // Verificar si se ha alcanzado el límite de intentos
  if (attempts > 3) {
    document.getElementById('login-message').innerText = 'Has excedido el límite de intentos de inicio de sesión';
    document.getElementById('username').disabled = true; // Deshabilitar el campo de usuario
    document.getElementById('password').disabled = true; // Deshabilitar el campo de contraseña
    document.querySelector('button[type="submit"]').disabled = true; // Deshabilitar el botón de enviar
    return;
  }
  
  // Obtener los valores del formulario
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Realizar validación simple
  if (username === 'usuario' && password === 'contraseña') {
    document.getElementById('login-message').innerText = 'Inicio de sesión exitoso';
  } else {
    document.getElementById('login-message').innerText = 'Usuario o contraseña incorrectos. Intento ' + attempts + ' de 3';
  }
  document.getElementById('resultadoInicio').innerHTML = resultado;
});



function registroCalculator() {
    document.getElementById('registroCalculator').style.display = 'none';
    document.getElementById('registroCalculator').style.display = 'block';
  }
  
  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Obtener los valores del formulario
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var age = document.getElementById('age').value;
    
    // Generar el correo electrónico
    var email = firstname.toLowerCase() + '.' + lastname.toLowerCase() + age + '@gmail.com';
    
    // Mostrar el mensaje de registro
    document.getElementById('registration-message').innerText = 'Correo electrónico generado: ' + email;
  });
  document.getElementById('mostrarFormulario').addEventListener('click', function() {
    document.getElementById('formulario').classList.toggle('oculto');
});




