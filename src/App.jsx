import React from 'react';
import Counter from './components/counter.jsx';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
