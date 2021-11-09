const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = inputForm.searchByID.value;
        fetch(`http://localhost:3000/movies/${input}`)
        .then((resp) => resp.json())
        .then(data => {
            const title = document.querySelector('h4');
            const summary = document.querySelector('p');
            title.textContent = data.title;
            summary.textContent = data.summary;
        }),
        inputForm.reset();
    })
}

document.addEventListener('DOMContentLoaded', init);