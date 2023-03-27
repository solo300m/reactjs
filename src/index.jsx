import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './Header';

import { HWOne } from './homeWork';
import { MyMyArray } from './homeWork';
import { Dev } from './typeOf';

window.addEventListener('load', () => {
    ReactDOM.render(<Header/>, document.getElementById('react_root'));
});

const newObj = new HWOne();
const temp2 = newObj.concat('New','Hello World!');
console.log(temp2);

const temp = [1,2,3];
const t = temp.reduce((acc,value)=>{
    return acc + value;
},0);
console.log(t);

const temp3 = new MyMyArray();
temp3.N = [1,2,3];
const t6 = temp3.N.reduce((ass,value)=>{
    return ass + value
},0);
console.log(t6);

