const formElement = document.querySelector('form');
const inputElements = document.querySelectorAll('input:not(.passwordError)');

const passwordLabels = document.querySelectorAll('.isPasswordConfirmed');

const passwordInputField = document.getElementById('password');
const confirmPasswordInputField = document.getElementById('cpassword');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    inputElements.forEach(item => {
        item.addEventListener('focus', () => {
            
            if (item.checkValidity() === true)
            {
                item.className = "inputValid";
            }else
            {
                item.className = "inputInvalid";
            }
        });
    });
});

passwordInputField.addEventListener('input', () => {
    if (passwordInputField.value !== confirmPasswordInputField.value)
        {
            passwordInputField.className = "passwordFieldInvalid";
            confirmPasswordInputField.className = "passwordFieldInvalid";

            passwordLabels.forEach(item => {
                item.classList.add('passwordNotIdentical');
            });
        }
        else
        {
            passwordInputField.className = "";
            confirmPasswordInputField.className = "";

            passwordLabels.forEach(item => {
                item.classList.remove('passwordNotIdentical');
            });
        }
});

confirmPasswordInputField.addEventListener('input', () => {
    if (passwordInputField.value !== confirmPasswordInputField.value)
        {
            passwordInputField.className = "passwordFieldInvalid";
            confirmPasswordInputField.className = "passwordFieldInvalid";

            passwordLabels.forEach(item => {
                item.classList.add('passwordNotIdentical');
            });
        }
        else
        {
            passwordInputField.className = "";
            confirmPasswordInputField.className = "";
            
            passwordLabels.forEach(item => {
                item.classList.remove('passwordNotIdentical');
            });
        }
});