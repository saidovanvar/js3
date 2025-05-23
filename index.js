const form = document.querySelector('#form');
const input = document.querySelector('#username');
const result = document.querySelector('#result');

let names = JSON.parse(localStorage.getItem('names')) || [];

function main() {
    result.innerHTML = '';
    names.forEach(name => {
        const div = document.createElement('div');
        div.textContent = name;
        result.appendChild(div);
    })

}

main();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = input.value.trim();
    if (name) {
        names.push(name);
        localStorage.setItem('names', JSON.stringify(names));
        main();
        input.value = '';
    }
});