let bricks = 0;

const build = (n) => {
    const intervalId = setInterval(() => {
        // Create a new brick
        const newDiv = document.createElement('div');
        bricks++;
        newDiv.id = `brick-${bricks}`;
        newDiv.textContent = bricks;

        if (bricks % 3 === 2) {
            newDiv.setAttribute("data-foundation", true);
        }

        document.body.appendChild(newDiv);

        // Stop the interval once the number of bricks reaches the target
        if (bricks >= n) {
            clearInterval(intervalId); // Clear the interval
        }
    }, 100); // Interval set to 100ms
};

const repair = (...ids) => {
    ids.forEach(id => {
        const htmlElem = document.getElementById(id);
        if (htmlElem.hasAttribute("data-foundation")) {
            htmlElem.setAttribute("data-repaired", "in progress")
        } else {
            htmlElem.setAttribute("data-repaired", true)
        }
    });
}

const destroy = () => {
    const lastBrick = document.getElementById(`brick-${bricks}`)
    if (bricks > 0) {
        document.body.removeChild(lastBrick)
        bricks--
    }
}

export {build, repair, destroy}
