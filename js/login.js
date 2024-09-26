const user=prompt("Introduce tu usuario (root):")
const psswd=prompt("Introduce tu contraseña (1234):")

let isLoggedIn=false

document.getElementsByTagName("body")[0].style.display="none"

// Validación
if (user=="root" && psswd=="1234") isLoggedIn=true

if (!isLoggedIn){
    alert("Usuario o contraseña incorrectos...")
    location.reload()
} else{
    alert("Acceso concedido, bienvenido "+user+"!")
    document.getElementsByTagName("body")[0].style.display="flex"
}