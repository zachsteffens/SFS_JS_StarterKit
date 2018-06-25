// import './index.css';

// import numeral from 'numeral';

// const courseValue = numeral(1000).format('$0,0.00');
// console.log(`I would pay ${courseValue} for this awesome course`); //eslint-disable-line no-console

import {getUsers} from './api/userApi';

//populate table of users via api call
getUsers().then(result => {
    let usersBody = '';
    result.forEach(user => {
        //note the back ticks used to build this string. this allows you to build this string on multiple lines.
        //also, this would typically be done with a framework like react or angular.
        usersBody += `<tr>
            <td><a href="#" data-id='${user.id}' class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            </tr>`;
    });
    global.document.getElementById('users').innerHTML = usersBody;
});
