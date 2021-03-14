import { example } from './js/example';
import webpackLogo from './images/webpack-logo.svg';
import bg from './images/bg.jpg';

import './styles/index.scss';

const logo = document.createElement('img');
logo.src = webpackLogo;

const heading = document.createElement('h1');
heading.textContent = example();

const app = document.querySelector('#root');
app.append(logo, heading);

document.querySelector(
  '.inner-img'
).innerHTML = `<img src="${bg}" style="width: 100px; height=100px;"/>`;
