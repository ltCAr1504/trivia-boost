const $ = (id) => document.getElementById(id)
const errDiv = $('errDivContainer')

$('signup__form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value
    const username = e.target.username.value

    const validateLengthPassword = password.length < 8;
    if (validateLengthPassword) {
        errDiv.textContent = 'Password must be at least 8 characters long';
        setTimeout(() => (errDiv.textContent = ''), 4000);
        return;
    }


    

    try{
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username,email,password})
        })

        const data = await res.json()

        console.log(res.status)
        console.log(data)

        if(res.ok){
            localStorage.setItem('token', data.token)
            window.location.href = '/dashboard'
        } else {
            errDiv.textContent = data.message
            setTimeout(() => errDiv.textContent = '', 4000);
            console.log('Error!')
        }


    }
    catch(err){
        console.error('Login Error', err)
        errDiv.textContent = 'Error connecting with the server!'
        setTimeout(() => errDiv.textContent = '', 4000)
    }
})