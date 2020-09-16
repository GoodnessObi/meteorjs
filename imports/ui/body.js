import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
    tasks: [
        { text: 'This is task 1', age: 20 },
        { text: 'This is task 2', age: 45 },
        { text: 'This is task 3', age: 60 }
    ],
});