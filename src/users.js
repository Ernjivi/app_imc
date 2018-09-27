// Cache de DOM

var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var birthDate = document.querySelector('#birthDate');
var submit = document.querySelector('#submit');
var lista = document.querySelector('#lista');
var data = [];


var processForm = () => {
    return {
        firstName: firstName.value,
        lastName: lastName.value,
        birthDate: Date.parse(birthDate.value),
    }
}

var render = () => {
    lista.innerHTML = '';
    data.forEach((user) => {
        let item = document.createElement('li');
        let itemText = document.createTextNode(
            `${user.firstName} ${user.lastName} ${JSON.stringify(user.birthDate)}`);
        item.appendChild(itemText);
        lista.appendChild(item)
    })
}

submit.addEventListener('click', (evt) => {
    data.push(processForm());
    render();
})
