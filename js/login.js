const form=document.getElementById("loginForm")
form.onsubmit=function(e){
    e.preventDefault()
    let isLoggedIn=false
    const user=document.getElementById("user")
    const psswd=document.getElementById("psswd")

    if (user.value=="root" && psswd.value=="1234") isLoggedIn=true

    if (!isLoggedIn){
        const texto=form.getElementsByTagName("h5")[0]
        texto.innerHTML="Usuario o contraseña incorrectos"
        texto.style.color="red"
        user.style.borderColor="red"
        psswd.style.borderColor="red"
    } else{
        document.getElementById("login").style.display="none";
        document.getElementById("mainContent").style.display="flex";
    }
    form.reset()
}