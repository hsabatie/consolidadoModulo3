function menu(){
    const navbar__menu = document.getElementById('navbar__menu');
    //console.log(navbar__menu);
        if (navbar__menu.style.display === 'flex') {
            navbar__menu.style.display = 'none';
        } else {
            navbar__menu.style.display = 'flex';
            navbar__menu.style.flexDirection = 'column';
        }

}

function MostrarChat(nombre, imagen) {
    const contenedorUl = document.getElementById('contenedorUl');
    const chat = document.getElementById('chat');
    const NombreContacto = document.getElementById('NombreContacto');
    const imagenUsuario = document.getElementById('imagenUsuario');
    const anchoPantalla =window.innerWidth;
    
    imagenUsuario.style.display = 'block';
    imagenUsuario.src = imagen;
    NombreContacto.textContent = nombre; // Actualiza el nombre del contacto
    
    if (anchoPantalla < 768) {
        contenedorUl.classList.add('hidden'); // Oculta el contenedor de contactos
        chat.classList.add('active'); // Muestra el chat 

    } else {
        
    }

    
}

function mostrarContactos() {
    const contenedorUl = document.getElementById('contenedorUl');
    const chat = document.getElementById('chat');

    contenedorUl.classList.remove('hidden'); // Muestra el contenedor de contactos
    chat.classList.remove('active'); // Oculta el chat
}
