import React from 'react';
import ReactDOM from 'react-dom';
import './CSS-index.css';
import App from './JS-App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
				<App/>
				, document.getElementById('root'));
serviceWorker.register();

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
