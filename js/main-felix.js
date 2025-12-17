
// FUNCIÓN DE FILTRADO DE PERROS
function filtrarPerros() {
    // 1. Obtener los valores de los filtros
    const sizeFilter = document.getElementById('tamaño').value;
    const ageFilter = document.getElementById('edad').value;
    const sexFilter = document.getElementById('sexo').value;

    // 2. Obtener la lista de todos los perfiles de perros
    const perros = document.querySelectorAll('.perroDatos');

    // 3. Iterar sobre cada perro y aplicar los filtros
    perros.forEach(perro => {
        const perroSize = perro.dataset.size;
        const perroAge = perro.dataset.age;
        const perroSex = perro.dataset.sex;

        let mostrarPerro = true;

        // Comprobación de TAMAÑO
        if (sizeFilter !== "" && perroSize !== sizeFilter) {
            mostrarPerro = false;
        }

        // Comprobación de EDAD
        if (mostrarPerro && ageFilter !== "" && perroAge !== ageFilter) {
            mostrarPerro = false;
        }

        // Comprobación de SEXO
        if (mostrarPerro && sexFilter !== "" && perroSex !== sexFilter) {
            mostrarPerro = false;
        }

        // 4. Aplicar el estilo: Mostrar u Ocultar
        if (mostrarPerro) {
            perro.style.display = 'block'; 
        
        } else {
            perro.style.display = 'none'; // Oculta el perro
        }
    });
}


// NUEVA FUNCIÓN: Resetear los filtros del formulario
function resetearFiltros() {
    // 1. Accede al formulario por su ID y usa el método nativo .reset()
    document.getElementById('filtro-perros').reset();
    
    // 2. Vuelve a llamar a la función de filtrado. 
    // Como los select ya están en "", la función mostrará todos los perros.
    filtrarPerros();
}

// Ejecutar el filtrado una vez al cargar la página para asegurar que todos los perros se muestren por defecto.
window.onload = filtrarPerros;