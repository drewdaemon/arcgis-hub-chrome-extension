import Intl from './app/intl';
import { h, render } from 'preact';
import App from './app/app';

Intl.init();
render(<App />, document.body);