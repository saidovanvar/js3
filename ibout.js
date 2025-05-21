import {validator , input} from '/index.js';

try {
    validator(input)
}
catch (e) {
    console.log(e)
}