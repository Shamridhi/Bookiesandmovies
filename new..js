/*document.addEventListener('DOMContentLoaded', function() {
document.getElementById('regsubmit').addEventListener('click', function() {
    const username = document.getElementById('newuser').value;
    const password = document.getElementById('newpsw').value;
    const newregister = document.getElementById('Conformpsw').value;

    if (password !== newregister) {
        alert('Password does not match');
        return;
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful');
    }
});
});*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('regsubmit').addEventListener('click', function() {
        const username = document.getElementById('newuser').value;
        const password = document.getElementById('newpsw').value;
        const confirmPassword = document.getElementById('Conformpsw').value;

        
        if (password !== confirmPassword) {
            alert('Password does not match');
            return;
        }

       
        let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        
        const userExists = registeredUsers.some(user => user.username === username);
        if (userExists) {
            alert('Username already exists');
            return;
        }

       
        registeredUsers.push({ username, password });

       
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        alert('Registration successful');
        window.location.href = './index.html';
    });
});
