document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Login Form (login.html)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            
            const storedUser = JSON.parse(localStorage.getItem('jprUser') || 'null');
            
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert('Login successful! Welcome back to JPR Dashboard.');
                window.location.href = 'index.html#services';
            } else {
                alert('Invalid credentials. Register first or try: test@example.com / password123');
            }
        });
    }
    
    // Register Form (register.html)
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value;
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters.');
                return;
            }
            
            const storedUser = localStorage.getItem('jprUser');
            if (storedUser) {
                alert('Account already exists. Please login.');
                window.location.href = 'login.html';
                return;
            }
            
            localStorage.setItem('jprUser', JSON.stringify({ email, password }));
            alert('Registration successful! You can now login.');
            window.location.href = 'index.html#home';
        });
    }
});
