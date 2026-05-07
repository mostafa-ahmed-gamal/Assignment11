function toggleForm(){
    const loginForm = document.getElementById('log-in')
    const signupForm = document.getElementById('sign-up')

    if(loginForm.style.display === 'none')
    {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }
    else
    {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}