/*document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('submit').addEventListener('click', function() {
        const username = document.getElementById('test1').value;
        const password = document.getElementById('test').value;
        const correctUsername = localStorage.getItem('username');
        const correctPassword = localStorage.getItem('password');

        if (username === correctUsername && password === correctPassword) {
            window.location.href = '../new templates/rough.html';
        } else {
            alert('Invalid username or password');
        }
    });
});*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function() {
        const username = document.getElementById('test1').value;
        const password = document.getElementById('test').value;

        
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

       
        const user = registeredUsers.find(user => user.username === username && user.password === password);

        if (user) {
            
            window.location.href = './new templates/rough.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
