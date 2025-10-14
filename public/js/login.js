const $ = (id) => document.getElementById(id)
const errDiv = $('errDivContainer')

$('form_container').addEventListener('submit', async (e) => {
    const email = e.target.email.value
    const password = e.target.password.value

    try{
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username,email,password})
        })

        const data = await res.json()

        if(res.ok){
            localStorage.setItem('token', data.token)
            window.location.href = '/dashboard'
        } else {
            
        }


    }
    catch(err){
        console.error('Login Error', err)
    }
})