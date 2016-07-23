//esta funcion genera un numero aleaorio de desde un numero minimo y con el maximo
function alea(min,max)
{
    var numero = Math.floor(Math.random() * (max - min + 1) + min );
    
    return numero;
}
//piedra quivale a 0 , papel a 1, tijera a 2
var piedra = 0;
var papel = 1;
var tijera = 2;

//array donde se le almacena las variables elegidas por el usuario
var opciones = ["piedra","papel","tijera"];

//variales de interacion del usuario vs la maquina 
var opcionUsuario;
var opcionMaquina = alea(0,2);
//entrada y salida de los datos
opcionUsuario = prompt("¿Qué elijes?\npiedra:\t0\nPapel:\t1\nTijera:\t2", 0);

alert("elegiste " + opciones[opcionUsuario]);

alert("javascript eligio " + opciones[opcionMaquina]);

//condicines 
if (opcionUsuario == piedra)
{
    if (opcionMaquina == piedra)
        {
            alert("Empate");
        
        } else if (opcionMaquina == papel) {
            
            alert("Perdiste :c");
            
        } else if (opcionMaquina == tijera) {
            
            alert("ganaste");
        }

} else if (opcionUsuario == papel) {
    
    if (opcionMaquina == papel)
        {
            alert("Empate");
        
        } else if (opcionMaquina == tijera) {
            
            alert("Perdiste :c");
            
        } else if (opcionMaquina == piedra) {
            
            alert("ganaste");
        }
    
} else if (opcionUsuario == tijera) {
    
    if (opcionMaquina == tijera)
        {
            alert("Empate");
        
        } else if (opcionMaquina == piedra) {
            
            alert("Perdiste :c");
            
        } else if (opcionMaquina == papel) {
            
            alert("ganaste");
        }
    
}
else
    {
        
        alert("opcion no valida");
        
    }
    
    
