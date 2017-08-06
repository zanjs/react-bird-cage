import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
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

const EleRoot = document.getElementById('root')

ReactDOM.render(Root, EleRoot);


if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider {...RootStore}>
        <App />
      </Provider>,
      EleRoot,
    )
  })
}

registerServiceWorker();
