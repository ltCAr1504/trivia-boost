const $ = (id) => document.getElementById(id)

$('form_container').addEventListener('submit', async (e) => {
    const email = e.target.email.value
    const password = e.target.password.value

    try{
        const res = await fetch()
    }
    catch(err){
        console.error('Login Error',err)
    }
})