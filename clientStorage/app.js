let db;

const firstNameInput = document.querySelector('#firstName')
const lastNameInput = document.querySelector('#lastName')
const form = document.querySelector('form')

window.onload = () => {
    let request = window.indexedDB.open('contacts', 1);

    request.onerror = () => {
        console.log("database failed");
    }
    request.onsuccess = () => {
        console.log("database sucess!!!!")
        db = request.result;
    }
}