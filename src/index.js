import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react'
import RootStore from './stores/Root'


const Root = (
    <Provider {...RootStore} >
        <App />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
