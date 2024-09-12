const form = document.getElementById('form');
const username = document.getElementById('name');
const number = document.getElementById('number');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
    window.location.href="index.html";
    
});

const setError = (element, message) => {
    const errorText = document.getElementById(`${element.id}Error`);
    errorText.innerText = message;
    // errorText.style.display = 'block';
    element.classList.add('error-input');
    element.classList.remove('success');
};

const setSuccess = (element) => {
    const errorText = document.getElementById(`${element.id}Error`);
    errorText.innerText = '';
    // errorText.style.display = 'none';
    element.classList.add('success');
    element.classList.remove('error');
};


const validateInputs = () => {
    const usernameValue = username.value;
    const numberValue = number.value;
    
    if (usernameValue === '') {
        setError(username, 'Username is required');
    }
    else if(usernameValue.split(" ").length !=2){
      setError(username, 'Please enter full name');
    }
    else {
        setSuccess(username);
    }

    if (numberValue === '') {
        setError(number, 'Mobile number is required');
    } else if (!/^\d{10}$/.test(numberValue)) {
        setError(number, 'Please enter a valid 10-digit number');
    } else {
        setSuccess(number);
    }
    
};

username.addEventListener('blur', () => validateInputs());
number.addEventListener('blur', () => validateInputs());

