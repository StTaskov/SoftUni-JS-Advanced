function validate() {
    // We need to take all input fields!
    let usernameElement = document.getElementById('username')
    let emailElement = document.getElementById('email')
    let passwordElement = document.getElementById('password')
    let confirmPasswordElement = document.getElementById('confirm-password')
    let companyCheckbox = document.getElementById('company')
    let companyInfoFieldElement = document.getElementById('companyInfo')
    let companyNumberElement = document.getElementById('companyNumber')
    let submiteButtonElement = document.getElementById('submit')
    let divValidElement = document.getElementById('valid')

    let isValid = true;
    let isChecked = false;

    const usernameRegex =  /^[A-Za-z0-9]{3,20}$/
    const passwordRegex = /^[\w]{5,15}$/;
    const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;


    submiteButtonElement.addEventListener('click', (e) =>{
        e.preventDefault();
        // We need to check that they are correct or not
        // Check for username
        let username = usernameElement.value
        if (!usernameRegex.test(username)) {
            isValid = false;
            usernameElement.style.borderColor = 'red';
        }else{
            usernameElement.style.border = 'none';
        }

        //Check for password and confirmPassword
        let password = passwordElement.value
        let confirmPassword = confirmPasswordElement.value
        if (!passwordRegex.test(password) ||
         !passwordRegex.test(confirmPassword) ||
         password !== confirmPassword){
            isValid = false;
            passwordElement.style.borderColor = 'red';
            confirmPasswordElement.style.borderColor = 'red';
         }else{
            passwordElement.style.border = 'none';
            confirmPasswordElement.style.border = 'none';
         }
        

        //Check for email
        email = emailElement.value;
        if(!emailRegex.test(email)){
            isValid = false;
            emailElement.style.borderColor = 'red'; 
        }else{
            emailElement.style.border = 'none';
        }

        //Check companyNumber
        if (isChecked){
            companyNumberSting = companyNumberElement.value; 
            companyNumber = Number(companyNumberSting)
            if(companyNumber >= 1000 && companyNumber <= 9999 && Number.isInteger(companyNumber)){
                companyNumberElement.style.border = 'none';
            }else{
                isValid = false;
                companyNumberElement.style.borderColor = 'red'; 
            }
        }

        // Check everything is OK
        if (isValid){
            divValidElement.style.display = 'block';
        }
    
    })

    // If radio button is checked, we need to make CompanyInfo visible
    companyCheckbox.addEventListener('change', () => {
        isChecked = true;
        companyInfoFieldElement.style.display = 'block'
    })

}
