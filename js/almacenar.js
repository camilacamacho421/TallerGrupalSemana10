document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('item');
    const buttonAgregar = document.getElementById('agregar');
    const buttonLimpiar = document.getElementById('limpiar');
    const contenedor = document.getElementById('contenedor');

    cargarElementos();

    //Función para agregar
    buttonAgregar.addEventListener('click', function () {
        // Guarda el valor del input en localStorage
        const nuevoeElemento = inputText.value;

        if(nuevoeElemento !== ''){
            let lista = JSON.parse(localStorage.getItem('listado')) || [];
            // Agregar el nuevo ítem 
            lista.push(nuevoeElemento);

            //guardamos en el localstorage, y para eso lo convertimos en string
            localStorage.setItem('listado', JSON.stringify(lista));
            actualizarListado();

            //Limpia la entrada
            inputText.value = '';
        }
    });


    // Función para limpiar el almacenamiento local y el listado 
    buttonLimpiar.addEventListener('click', function () { 
        localStorage.removeItem('listado'); 
        actualizarListado(); 
    });

    // Función para cargar los ítems al cargar la página 
    function cargarElementos() { 
        const items = JSON.parse(localStorage.getItem('listado')) || []; 
        contenedor.innerHTML = ''; 
        items.forEach(i => { 
            const li = document.createElement('li'); 
            li.textContent = i; 
            contenedor.appendChild(li); 
        }); 
    }

    function actualizarListado(){
        cargarElementos();
    }

});

