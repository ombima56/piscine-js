export function compose() {
    document.addEventListener("keydown", (event) => {
        const { key, keyCode } = event;

        if (key >= 'a' && key <= 'z') {
            const note = document.createElement("div");
            note.className = "note";
            note.style.background = `hsl(${keyCode * 3}, 70%, 50%)`;
            note.textContent = key;
            document.body.appendChild(note);
        } else if (key === "Backspace") {
            const lastNote = document.querySelector(".note:last-child");
            if (lastNote) lastNote.remove();
        } else if (key === "Escape") {
            document.querySelectorAll(".note").forEach(note => note.remove());
        }
    });
}

  