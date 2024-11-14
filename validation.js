// Valores específicos para iniciar sesión
const predefinedEmail = "gamesstore@gmail.com";
const predefinedPassword = "1234";

// Agregar evento de validación al formulario de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores ingresados por el usuario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginButton = document.querySelector('button[type="submit"]');
    
    // Validar el correo y la contraseña
    if (email === predefinedEmail && password === predefinedPassword) {
        alert('Inicio de sesión exitoso');
        loginButton.classList.remove('btn-primary');
        loginButton.classList.add('btn-success');
        
        // Redirigir a la siguiente página 
        setTimeout(function() {
            window.location.href = 'index.html'; // Aquí debes cambiar "siguiente_pagina.html" por la página a la que quieras redirigir
        }, 500);
    } else {
        alert('Correo o contraseña incorrectos');
        loginButton.classList.remove('btn-primary');
        loginButton.classList.add('btn-danger');
    }
});
