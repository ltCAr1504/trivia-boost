const $ = (id) => document.getElementById(id)
const errDiv = $('errDivContainer')

$('form_container').addEventListener('submit', async (e) => {
    const email = e.target.email.value
    const password = e.target.password.value
    const username = e.target.username.value

    const validateLengthPassword = password.length <= 8
    if(!validateLengthPassword){
        errDiv.textContent = 'Please enter a password with less than 8 characters'
        setTimeout(() => errDiv.textContent = '', 4000)
        return;
    }


    

    try{
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username,email,password})
        })

        const data = await res.json()

        if(res.ok){
            localStorage.setItem('token', data.token)
            window.location.href = '/dashboard'
        } else {
            errDiv.textContent = data.message
            setTimeout(() => errDiv.textContent = '', 4000);
        }


    }
    catch(err){
        console.error('Login Error', err)
        errDiv.textContent = 'Error connecting with the server!'
        setTimeout(() => errDiv.textContent = '', 4000)
    }
})