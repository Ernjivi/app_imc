

export default class UserList{

    constructor(selector){
        this.el = document.querySelector(selector);
        this.cacheDOM();
        this.fetchUsers()
            .then(response => response.json())
            .then(data => {
                this.data = data;
            });
    }

    cacheDOM(){
        this.inputFirstName = this.el.querySelector('#firstName');
        this.inputLastName = this.el.querySelector('#lastName');
        this.submitButton = this.el.querySelector('#submit');
        this.list = this.el.querySelector('#list');
    }

    createUser(){
        // 
    }

    fetchUsers(){
        return fetch('http://localhost:3000/users')
    }
}

var userList = new UserList('#userList');