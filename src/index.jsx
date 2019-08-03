import Intl from './app/intl';
import { h, render } from 'preact';
import App from './app';

Intl.init();
setTimeout(() => {
  render(<App />, document.getElementById('popup-container'));
}, 1000);