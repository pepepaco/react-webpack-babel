import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import toggleApp from './reducers'
const store = createStore(toggleApp)

render(<Provider store={store}><App /></Provider>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector("#app")
    );
  });
}
