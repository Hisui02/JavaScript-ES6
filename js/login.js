const form=document.getElementById("loginForm")
form.onsubmit=function(e){
    const USER="root"
    const PASSWORD="1234"

    e.preventDefault()
    let isLoggedIn=false
    const user=document.getElementById("user")
    const psswd=document.getElementById("psswd")

    if (user.value==USER && psswd.value==PASSWORD) isLoggedIn=true

    if (user.value.trim().length<3){
        const texto=form.getElementsByTagName("h5")[0]
        texto.innerHTML="Usuario demasiado corto"
        texto.style.color="red"
        user.style.borderColor="red"
        return
    }

    if (!isLoggedIn){
        const texto=form.getElementsByTagName("h5")[0]
        alert("Usuario o contraseña incorrectos")
        user.style.borderColor="red"
        psswd.style.borderColor="red"
    } else{
        document.getElementById("greeter").innerHTML="Bienvenido, "+user.value+"!"
        setTimeout(() => {
            document.getElementById("login").style.display="none";
            document.getElementById("mainContent").style.display="flex";
        }, 3000);
    }
    form.reset()
}