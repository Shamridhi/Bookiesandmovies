/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('newreset').addEventListener('click', function() {
        const username = document.getElementById('reset').value;
        const newpassword = document.getElementById('reset').value;
        
       
        localStorage.setItem('username',newpassword);
           localStorage.setItem('password', newpassword);
            alert('The new password has been reset successfully!');
            window.location.href = './index.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('newreset').addEventListener('click', function() {
        const username = document.getElementById('username').value; // Changed ID
        const newpassword = document.getElementById('newpassword').value; // Changed ID

        localStorage.setItem('username', username);
        localStorage.setItem('password', newpassword);

        alert('The new password has been reset successfully!');
        window.location.href = './index.html';
    });
});*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('newreset').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const newpassword = document.getElementById('newpassword').value;

        
        let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

       
        const userIndex = registeredUsers.findIndex(user => user.username === username);

        if (userIndex !== -1) {
          
            registeredUsers[userIndex].password = newpassword;

           
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

            alert('The password has been reset successfully!');
            window.location.href = './index.html';
        } else {
            alert('User not found.');
        }
    });
});

