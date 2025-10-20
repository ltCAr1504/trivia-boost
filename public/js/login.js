const $ = (id) => document.getElementById(id)
const errDiv = $('errDivContainer')

$('login__form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value


    if(!email || !password){
        errDiv.textContent = 'Please complete all fields'
        setTimeout(() => errDiv.textContent = '', 4000)
        return;
    }

    try{
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email,password})
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