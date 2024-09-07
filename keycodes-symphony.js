function getRandomColor(key) {
    const hash = key.charCodeAt(0);
    const hue = (hash * 137) % 360;
    return `hsl(${hue}, 80%, 60%)`;
  }
  
  function compose() {
    const body = document.body;
  
    // Keydown event listener
    document.addEventListener('keydown', (event) => {
      const key = event.key.toLowerCase();
      
      if (key >= 'a' && key <= 'z') {
        // If a lowercase letter is pressed, create a new note
        const note = document.createElement('div');
        note.classList.add('note');
        note.style.backgroundColor = getRandomColor(key); // Apply unique background color
        note.textContent = key;
        body.appendChild(note);
      } else if (key === 'backspace') {
        // If Backspace is pressed, remove the last note
        const notes = document.querySelectorAll('.note');
        if (notes.length > 0) {
          notes[notes.length - 1].remove();
        }
      } else if (key === 'escape') {
        // If Escape is pressed, clear all notes
        const notes = document.querySelectorAll('.note');
        notes.forEach(note => note.remove());
      }
    });
  }
  
  compose();
  
  export { compose };
  