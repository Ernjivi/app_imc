// Cache de DOM

var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var birthDate = document.querySelector('#birthDate');
var submit = document.querySelector('#submit');
var lista = document.querySelector('#lista');
var data = [];

var init = () => {
    fetch("http://localhost:3000/users")
        .then((users) => users.json())
        .then((jsonData) => {
            data = jsonData;
            render();
        })
}

var processForm = () => {
    return {
        first_name: firstName.value,
        last_name: lastName.value
    }
}

var render = () => {
    lista.innerHTML = '';
    data.forEach((user) => {
        let item = document.createElement('li');
        let itemText = document.createTextNode(
            `${user.first_name} ${user.last_name}`);
        item.appendChild(itemText);
        lista.appendChild(item)
    })
}

var createUser = () => {

    console.log(processForm());
    fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify(processForm()),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            init();
        }
        return response.json()
    })
    .then(responseJson => console.log(responseJson))
    .catch(e => console.log(e));
}

submit.addEventListener('click', (evt) => {
    // data.push(processForm());
    createUser();
    render();
})

init();
