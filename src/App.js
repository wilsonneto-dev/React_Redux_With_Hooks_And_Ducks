import React from 'react';
import { Provider } from 'react-redux';

import CoursesList from './components/CoursesList';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CoursesList />
      </div>
    </Provider>
  );
}

export default App;
