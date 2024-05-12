let api_key = '8mz9l80r38xvb3mqkbdllg4o4af0tyh10338sw0c'
let urlBase = 'https://www.meteosource.com/api/v1/free/point'

//Configurar boton busqueda
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

//Definimos la funcion del fetch
function fetchDatosClima(ciudad) {
    //fetch (llamamos a la api)
    fetch(`${urlBase}?place_id=${ciudad}&key=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

//Definimos la funcion de si el usuario pone una ciudad para mostrar datos
function mostrarDatosClima(response) {
    const ciudadIngresada = document.getElementById('ciudadEntrada').value

    const divDatosClima = document.getElementById('datosClima') //es el div donde se va a mostrar
    divDatosClima.innerHTML = '' //lo ponemos vacio

    //Solicitamos los datos que queremos de los que devuelve la api
    const ciudadNombre = ciudadIngresada
    const temperatura = response.current.temperature
    const descripcion = response.current.summary
    const icono = response.current.icon_num

    //Crear elementos HTML dentro del div
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${temperatura}°C`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://www.meteosource.com/static/img/ico/weather/${icono}.svg`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    //Metemos los elementos HTML que hicimos en el div
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}