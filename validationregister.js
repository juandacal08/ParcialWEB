//registro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerButton = document.querySelector('button[type="submit"]');

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Por favor, completa todos los campos');
        registerButton.classList.remove('btn-primary');
        registerButton.classList.add('btn-danger');
    } else if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        registerButton.classList.remove('btn-primary');
        registerButton.classList.add('btn-danger');
    } else {
        alert('Registro exitoso');
        registerButton.classList.remove('btn-primary', 'btn-danger');
        registerButton.classList.add('btn-success');
        setTimeout(function() {
            window.location.href = 'index.html'; 
        }, 500);
    }
});