let user
let psswd

const USER="root"
const PASSWORD="1234"

let isLoggedIn=false

user=prompt("Introduce tu usuario ("+USER+"):")
if (user) psswd=prompt("Introduce tu contraseña ("+PASSWORD+"):")

// Validación

if (user==USER && psswd==PASSWORD) isLoggedIn=true

if (user.trim().length<3) {
    alert("ERROR!\n El usuario debetener añ menos 3 caracteres")
    isLoggedIn=false
}

if (!isLoggedIn){
    if(confirm("Usuario o contraseña incorrectos...\n¿Quieres volver a intentarlo?")) location.reload()
} else{
    alert("Acceso concedido, bienvenido "+user+"!")
    document.getElementsByTagName("body")[0].style.display="flex"
}