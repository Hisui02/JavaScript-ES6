let user
let psswd

let isLoggedIn=false

user=prompt("Introduce tu usuario (root):")
if (user) psswd=prompt("Introduce tu contraseña (1234):")

// Validación
if (user=="root" && psswd=="1234") isLoggedIn=true

if (!isLoggedIn){
    if(confirm("Usuario o contraseña incorrectos...\n¿Quieres volver a intentarlo?")) location.reload()
} else{
    alert("Acceso concedido, bienvenido "+user+"!")
    document.getElementsByTagName("body")[0].style.display="flex"
}