const getArchitects = () => {
    const a_tags = document.querySelectorAll('a');
    const span_elem = document.querySelectorAll('span')

    const architects = Array.from(a_tags);
    const nonArchitects = Array.from(span_elem);

    return [architects, nonArchitects];
}

const getClassical = () => {
    const architects = getArchitects()[0];
    const classical_class = architects.filter(arch => 
        arch.classList.contains('classical') 
    );

    const non_classical = architects.filter(arch => 
        !arch.classList.contains('classical')
    );

    return [classical_class, non_classical];
}

const getActive = () => {
    const active = getClassical()[0];

    const active_classical = active.filter(arch => 
        arch.classList.contains('active')
    );

    const non_active_classical = active.filter(arch => 
        !arch.classList.contains('active')
    );

    return [active_classical, non_active_classical];
}

const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano');

    // Get all active classical architects
    const activeClassicalArchitects = Array.from(document.getElementsByClassName('classical'))
        .filter(arch => arch.classList.contains('active'));

    // Filter out Bonanno Pisano from the active classical architects
    const remainingArchitects = activeClassicalArchitects.filter(arch => arch.id !== 'BonannoPisano');

    // Return Bonanno Pisano and the remaining active classical architects
    return [bonannoPisano, remainingArchitects];
}


export {getArchitects, getClassical, getActive, getBonannoPisano};