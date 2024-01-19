var UserName = document.getElementById('uname');
var Password = document.getElementById('pwd');
var LoginForm = document.getElementById('loginForm');
var UsernameError = document.getElementById('unameErr')

UserName.addEventListener('input' , function(param) {
    var regexPattern = /^[\w]{6,8}$/;
    var currentValue = param.target.value;
    var valid = regexPattern.test(currentValue);

    if(valid) {
        UsernameError.style.display = 'none'
    } else {
        UsernameError.style.display = 'block'
    }
    
});
Password.addEventListener('input' , function(exe) { 
    console.log(exe.target.value)
});