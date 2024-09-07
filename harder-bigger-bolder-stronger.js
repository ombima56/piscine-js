const generateLetters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 120; i++) {
        const newDiv = document.createElement('div');
        const randomGenerate = Math.floor(Math.random()* (alphabet.length - 0)) + 0;
        const letter = alphabet[randomGenerate];
        newDiv.textContent = `${letter}`;

        let fonts_size = 11 + i;
        newDiv.style.fontSize = `${fonts_size}px`;

        if (i < 40) {
            newDiv.style.fontWeight = 300;
        } else if (i < 80) {
            newDiv.style.fontWeight = 400;
        } else {
            newDiv.style.fontWeight = 600;
        }

        document.body.appendChild(newDiv);
    }

}

export{generateLetters}