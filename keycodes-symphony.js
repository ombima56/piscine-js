function getRandomColor(key) {
    const hash = key.charCodeAt(0);
    const hue = (hash * 137) % 360;
    return `hsl(${hue}, 80%, 60%)`;
}

function compose() {
    const container = document.createElement('div');
    container.id = 'note-container';
    document.body.appendChild(container);
  
    document.addEventListener('keydown', (event) => {
      const key = event.key.toLowerCase();

      console.log("Key pressed:", key);
      
      if (key >= 'a' && key <= 'z') {
        const note = document.createElement('div');
        note.classList.add('note');
        note.style.backgroundColor = getRandomColor(key);
        note.textContent = key;
        container.appendChild(note);
      } else if (key === 'backspace') {
        event.preventDefault();

        const notes = container.querySelectorAll('.note');
        if (notes.length > 0) {
          notes[notes.length - 1].remove();
          console.log("Note removed:", notes[notes.length - 1]);
        }
      } else if (key === 'escape') {
        container.innerHTML = '';
      }
    });
}
  
export { compose };

  