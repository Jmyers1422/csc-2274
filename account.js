// ===== Account Creation Validation =====


//variables
const accountusername = document.getElementById('username');
const accountpassword = document.getElementById('password');
const accountemail = document.getElementById('accemail');
const form = document.getElementById('create-account');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordregex = /^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/i;



//username validation
function validateUsername() {
    if (accountusername.value.length < 4) {
        //alert('Username must contain at least 4 characters.')
        return false;
    }
}



//email validation
function validateEmail() {
    if (emailRegex.test(accountemail.value) != true) {
        //alert('Please enter a valid email (e.g., name@example.com).')
        return false;
    }
}



//Password validation
function validatePassword() {

    if (passwordregex.test(accountpassword.value) != true){
        //alert('Password must contain at least 8 characters and 1 number.');
        return false;
    }
}


//live validation
//turn border red
//inline error message


// validate on submit
form.addEventListener('submit', (e) => {
    const okEmail = validateEmail();
    const okUsername = validateUsername();
    const okPassword = validatePassword();

    if (!okEmail || !okUsername || !okPassword) {
        e.preventDefault();
        if (!okEmail && !okUsername && !okPassword) 
            {alert('Invalid inputs.');}

        else if (!okUsername) 
            {alert('Username must contain at least 4 characters.');}

        else if (!okPassword) 
            {alert('Password must contain at least 8 characters and 1 number.');}

        else if (!okEmail) 
            {alert('Please enter a valid email (e.g., name@example.com).');}
    }
});