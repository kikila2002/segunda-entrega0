

class Persona {
    constructor (nombre, email, peso, dolar) {
        this.nombre = nombre;
        this.email = email;
        this.peso = peso;
        this.dolar = dolar;
    }

    calcularDolar() {
        return this.peso / this.dolar;
    }
}



const personas = [];

 

const idFormulario = document.getElementById('formulario');

idFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const peso = document.getElementById('peso').value;
    const dolar = document.getElementById('dolar').value;
    
    const persona = new Persona (nombre, email, peso, dolar);
    
    personas.push(persona);
    
    localStorage.setItem('Persona', JSON.stringify(personas));
    
    idFormulario.reset();

     
    mostrarInfo(persona);
})


const resultado = document.getElementById('infoUsuarios');

const mostrarInfo = (persona) => {
    let aux = '';
    aux += `<p class="resultado"> ${persona.nombre} tu Dolares son los siguientes: </p>
            <p class="resultado"> IMC: ${persona.calcularDolar()} </p>`;
    resultado.innerHTML = aux;
}



const botonAdmin = document.getElementById('admin');
const datosAdmin = document.getElementById('datosAdmin');

botonAdmin.addEventListener('click', () => {
    const personas = JSON.parse(localStorage.getItem('Persona'));
    let aux = '';
    personas.forEach(persona => {
        aux += `<p class="resultado"> Nombre: ${persona.nombre} </p>
                <p class="resultado"> Correo Electrónico: ${persona.email}</p><hr>`
    });
    datosAdmin.innerHTML = aux;
});