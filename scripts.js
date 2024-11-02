document.getElementById('btn-programacion').onclick = function() {
    toggleInfo('info-programacion');
};

document.getElementById('btn-hardware').onclick = function() {
    toggleInfo('info-hardware');
};

document.getElementById('btn-redes').onclick = function() {
    toggleInfo('info-redes');
};

function toggleInfo(infoId) {
    const infoSections = document.querySelectorAll('.info-section');
    infoSections.forEach(section => {
        section.style.display = 'none'; // Ocultar todas las secciones
    });
    document.getElementById(infoId).style.display = 'block'; // Mostrar la sección seleccionada
}

