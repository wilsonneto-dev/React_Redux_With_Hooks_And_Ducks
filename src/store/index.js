import { createStore } from 'redux';

const INITIAL_STATE_COURSES = {
  data: ['React Native', 'React JS', 'NodeJS']
};

function courses(state = INITIAL_STATE_COURSES, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
