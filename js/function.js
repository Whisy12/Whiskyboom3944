

/*Boton para cambiar el color de fondo*/
function random(numero){
return Math.floor(Math.random()*(numero+1));
}
function cambiarFondo(){
    let color= 'rgb('+random (255) + ', ' + random(266) + ', ' + random(255) +')';
    document.body.style.backgroundColor=  color;
}

let btn=document.getElementById("btn");
    btn.addEventListener('click', cambiarFondo);
/*Boton para cambiar el color de fondo*/


/*Function datos*/
function Persona (nombre){
    this.nombre= nombre;
        let dni = "39443954";
        console.log("Hola, soy" + nombre);
        this.getDni= function(){
            return dni;
        }
    }

let objetoPersona=new Persona(" Flor Brizu");
console.log(objetoPersona.dni);
/*Function datos*/


/*funcion click*/
document.addEventListener('click', function(){
    console.log("Gracias por mostrar interes en mi Hoja de vida");
});
/*funcion click*/


