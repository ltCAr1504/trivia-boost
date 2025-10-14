const $ = (id) => document.getElementById(id)

$('form_container').addEventListener('submit', async (e) => {
    const email = e.target.email.value
    const password = e.target.password.value
    const username = e.target.username.value

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
            
        }


    }
    catch(err){
        console.error('Login Error',err)
    }
})