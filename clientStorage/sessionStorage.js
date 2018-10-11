const input = document.querySelector('#name');
const form = document.querySelector('form');
const submit = document.querySelector('#submitName');
const remove = document.querySelector('#removeName');

form.addEventListener('sumbit', e => {
    e.preventDefualt();
});

submit.addEventListener('click', () => {
    localStorage.setItem('name', input.value)
})

remove.addEventListener('click', () => {
    localStorage.removeItem('name');
})
const name = localStorage.getItem('name');
const h1 = document.querySelector('#title');
name ? h1.textContent = `Welcome ${name}` : 
h1.textContent = `So sad, Nobody to welcome`;